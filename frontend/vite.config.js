import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path'; // ✅ IMPORTAR PATH

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // ✅ DEFINIR ALIAS "@"
    },
  },
});
