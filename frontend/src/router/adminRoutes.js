import LayoutAdmin from '@/components/admin/LayoutAdmin.vue';
import InicioAdmin from '@/components/admin/Inicio.vue';
import NoticiasAdmin from '@/components/noticias/NoticiasAdmin.vue';
import EdicionNoticias from '@/components/noticias/EdicionNoticias.vue';
import AniadirRecurso from '@/components/biblioteca/AniadirRecurso.vue';
import ListaRecursos from '@/components/biblioteca/ListaRecursos.vue';

// ✅ Importamos las nuevas vistas de Administración de Usuarios
import RegistrarUsuario from '@/components/admin/RegistrarUsuario.vue';
import AsignarRoles from '@/components/admin/AsignarRoles.vue';
import AsignarPermisos from '@/components/admin/AsignarPermisos.vue';
import VerUsuario from '@/components/admin/VerUsuario.vue';
import EditarUsuario from '@/components/admin/EditarUsuario.vue';
import EliminarUsuario from '@/components/admin/EliminarUsuario.vue';

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

      // 🔥 Nuevas rutas para gestión de usuarios
      { path: 'usuario/registrar', component: RegistrarUsuario },
      { path: 'usuario/roles', component: AsignarRoles },
      { path: 'usuario/permisos', component: AsignarPermisos },
      { path: 'usuario/visualizar', component: VerUsuario },
      { path: 'usuario/editar', component: EditarUsuario },
      { path: 'usuario/eliminar', component: EliminarUsuario },
    ],
  },
];
