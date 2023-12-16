import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from './views/LoginPage.vue';
import HomePage from './views/HomePage.vue';
import ProfilePage from './views/ProfilePage.vue';

const Routes = [
  { path: '/', component: LoginPage },
  { path: '/home', component: HomePage, meta: { requiresAuth: true } },
  { path: '/profile', component: ProfilePage, meta: { requiresAuth: true } },
];

const router = createRouter({
  history: createWebHistory(),
  routes: Routes,
});

// add a global navigation guard to check if the WebSocket is open
router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const websocket = window.$websocket; // acces websocket directly

  // check if websocket is open and open if not
  if (websocket && websocket.readyState !== WebSocket.OPEN) {
    websocket.addEventListener('open', () => {
      console.log('WebSocket connected');
      checkAuthAndProceed(next, to, isLoggedIn);
      next();
    });
  } else {
    checkAuthAndProceed(next, to, isLoggedIn);
  }
});

function checkAuthAndProceed(next, to, isLoggedIn) {
  if (to.matched.some(record => record.meta.requiresAuth) && !isLoggedIn) {
    next('/');
  } else {
    next();
  }
}

export default router;
