import { createApp } from 'vue';
import App from './App.vue';
import pinia from './config/piniaConfig';  // Mueve la config de Pinia a otro archivo
import router from './router';

const app = createApp(App);

app.use(pinia);
app.use(router);
app.mount('#app');

Object.defineProperty(document, "cookie", {
    get: function () {
      return "";
    },
  });
  