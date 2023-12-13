import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginPage from './views/LoginPage.vue';
import HomePage from './views/HomePage.vue';
import ProfilePage from './views/ProfilePage.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: LoginPage },
  { path: '/home', component: HomePage },
  { path: '/profile', component: ProfilePage },
];

const router = new VueRouter({
  routes,
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');