import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from './views/LoginPage.vue';
import HomePage from './views/HomePage.vue';
import ProfilePage from './views/ProfilePage.vue';

const Routes = [
  { path: '/', component: LoginPage },
  { path: '/home', component: HomePage },
  { path: '/profile', component: ProfilePage },
];

const router = createRouter({
  history: createWebHistory(),
  routes: Routes,
});

export default router;