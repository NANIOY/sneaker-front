import './styles/normalize.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './styles/global.css';
const app = createApp(App);

app.use(router); // Use the router with the app

app.mount('#app');

