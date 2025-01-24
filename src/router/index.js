import { createRouter, createWebHistory } from 'vue-router';

// Importamos los módulos de rutas
import publicRoutes from './publicRoutes';
import authRoutes from './authRoutes';
import adminRoutes from './adminRoutes';

const routes = [
  ...publicRoutes,
  ...authRoutes,
  ...adminRoutes,
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
