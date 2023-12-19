import './styles/normalize.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './styles/global.css';

const app = createApp(App);

// initialize the websocket
const websocket = new WebSocket('wss://sneaker-back.onrender.com/primus');

websocket.addEventListener('open', () => {
  console.log('WebSocket connected');
});

websocket.addEventListener('close', (event) => {
  console.log('WebSocket closed:', event);
});

websocket.addEventListener('error', (event) => {
  console.error('WebSocket error:', event);
});

// mount the app
app.use(router);
app.mount('#app');
