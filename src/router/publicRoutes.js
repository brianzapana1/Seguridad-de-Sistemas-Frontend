import LayoutPredeterminado from '@/layouts/LayoutPredeterminado.vue';
import PaginaPrincipal from '@/components/pages/PaginaPrincipal.vue';
import Noticias from '@/components/noticias/Noticias.vue';
import Testimonios from '@/components/estudiantes/Testimonios.vue';
import Investigacion from '@/components/estudiantes/Investigacion.vue';
import BibliotecaDigital from '@/components/biblioteca/BibliotecaDigital.vue';
import Enfermeria from '@/components/estudiantes/Enfermeria.vue';
import Fisioterapia from '@/components/estudiantes/Fisioterapia.vue';
import Faqs from '@/components/eventos/Faqs.vue';
import BolsaTrabajo from '@/components/egresados/BolsaTrabajo.vue';
import Egresados from '@/components/egresados/Egresados.vue';
import Reglas from '@/components/eventos/Reglas.vue';
import AdmisionBeca from '@/components/becas/AdmisionBeca.vue';
import Pastoral from '@/components/eventos/Pastoral.vue';
import EventosProfesionales from '@/components/eventos/EventosProfesionales.vue';
import Contacto from '@/components/pages/Contacto.vue';
import InfoContacto from '@/components/pages/info-contacto.vue';

export default [
  {
    path: '/',
    component: LayoutPredeterminado,
    children: [
      { path: '', component: PaginaPrincipal },
      { path: 'noticias', component: Noticias },
      { path: 'testimonios', component: Testimonios },
      { path: 'investigacion', component: Investigacion },
      { path: 'biblioteca-digital', component: BibliotecaDigital },
      { path: 'enfermeria', component: Enfermeria },
      { path: 'fisioterapia', component: Fisioterapia },
      { path: 'faqs', component: Faqs },
      { path: 'bolsatrabajo', component: BolsaTrabajo },
      { path: 'egresadosUAC', component: Egresados },
      { path: 'reglas', component: Reglas },
      { path: 'admi-beca', component: AdmisionBeca },
      { path: 'pastoral', component: Pastoral },
      { path: 'eventos-profesionales', component: EventosProfesionales },
      { path: 'contacto', component: Contacto },
      { path: 'info-contacto', component: InfoContacto },
    ],
  },
];
