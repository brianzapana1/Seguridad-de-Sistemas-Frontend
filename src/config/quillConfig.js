import { QuillEditor } from '@vueup/vue-quill';
import 'quill/dist/quill.snow.css'; // Importa estilos de Quill

export default {
  install(app) {
    app.use(QuillEditor);
  },
};
