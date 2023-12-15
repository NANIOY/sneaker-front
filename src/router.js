import { createRouter, createWebHistory } from 'vue-router'; // Import createRouter and createWebHistory
import LoginPage from './views/LoginPage.vue';
import HomePage from './views/HomePage.vue';
import ProfilePage from './views/ProfilePage.vue';

const routes = [
  { path: '/', component: LoginPage },
  { path: '/home', component: HomePage },
  { path: '/profile', component: ProfilePage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;