import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import pinia from './config/piniaConfig';  // Mueve la config de Pinia a otro archivo
import quillConfig from './config/quillConfig';  // Usa la nueva config de Quill

const app = createApp(App);

app.use(pinia);
app.use(quillConfig);
app.use(router);
app.mount('#app');
