import LayoutAdmin from '@/components/admin/LayoutAdmin.vue';
import InicioAdmin from '@/components/admin/Inicio.vue';
import NoticiasAdmin from '@/components/noticias/NoticiasAdmin.vue';
import EdicionNoticias from '@/components/noticias/EdicionNoticias.vue';
import AniadirRecurso from '@/components/biblioteca/AniadirRecurso.vue';
import ListaRecursos from '@/components/biblioteca/ListaRecursos.vue';

export default [
  {
    path: '/admin',
    component: LayoutAdmin,
    children: [
      { path: '', component: InicioAdmin },
      { path: 'noticias', component: NoticiasAdmin },
      { path: 'edicion-noticias', component: EdicionNoticias },
      { path: 'aniadir-biblio', component: AniadirRecurso },
      { path: 'edicion-biblio', component: ListaRecursos },
    ],
  },
];
