import LayoutNoPredeterminado from '@/layouts/LayoutNoPredeterminado.vue';
import Login from '@/components/auth/Login.vue';
import OlvidasteContra from '@/components/auth/OlvidasteContra.vue';

export default [
  {
    path: '/auth',
    component: LayoutNoPredeterminado,
    children: [
      { path: 'login', component: Login },
      { path: 'olvidaste', component: OlvidasteContra },
    ],
  },
];
