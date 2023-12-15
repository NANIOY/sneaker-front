import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './styles/global.css';
import './styles/normalize.css';

const app = createApp(App);

app.use(router); // Use the router with the app

app.mount('#app');

