<template>
  <div class="fondo-nav">
    <nav class="navegacion-principal">
      <div class="logo">
        <div class="contenedor-logo">
          <router-link to="/"> 
            <img src="/UAC Pucarani 1.2 (1).png" alt="Logo UAC" /> 
          </router-link>
        </div>
      </div>
      <div class="enlaces">
        <div class="enlace-desplegable">
          <span class="no-clic">Carreras <i class="arrow-down"></i></span>
          <div class="submenu">
            <router-link to="/enfermeria">Enfermería</router-link>
            <router-link to="/fisioterapia">Fisioterapia y Kinesiología</router-link>
          </div>
        </div>
        <router-link to="/investigacion">Investigación</router-link>
        <router-link to="/biblioteca-digital">Biblioteca</router-link>
        <div class="enlace-desplegable">
          <span class="no-clic">Estudiantes <i class="arrow-down"></i></span>
          <div class="submenu">
            <a href="https://lms.ucb.edu.bo/" target="_blank">Acceso a moodle</a>
          </div>
        </div>
        <router-link to="/admi-beca">Admisiones y becas</router-link>
        <router-link to="/noticias">Noticias y eventos</router-link>
        <div class="enlace-desplegable">
          <span class="no-clic">Más <i class="arrow-down"></i></span>
          <div class="submenu submenu-mas">
            <router-link to="/contacto">Contacto</router-link>
            <router-link to="/testimonios">Testimonios</router-link>
            <router-link to="/faqs">Preguntas frecuentes</router-link>
            <router-link to="/pastoral">Pastoral y actividades</router-link>
            <router-link to="/bolsatrabajo">Egresados y Bolsa <br> de trabajo</router-link>
            <router-link to="/eventos-profesionales">Eventos de actualización <br> profesional</router-link>
          </div>
        </div>

        <!-- Verificación de autenticación usando Pinia -->
        <div v-if="authStore.isAuthenticated" class="contenedor-usuario">
          
          <!-- ✅ Solo muestra "Administrar" si el usuario tiene permisos asignados -->
          <div v-if="authStore.tieneAlgunPermiso" class="enlace-desplegable">
            <span class="no-clic">Bienvenido(a), <br> {{ authStore.user }} <i class="arrow-down"></i></span>
            <div class="submenu">
              <router-link to="/admin">Administrar</router-link>
              <router-link to="/" @click.native="authStore.logout">Cerrar sesión</router-link>
            </div>
          </div>

          <!-- ✅ Si no tiene permisos, solo muestra su nombre y cerrar sesión -->
          <div v-else class="enlace-desplegable">
            <span class="no-clic">Bienvenido(a), <br> {{ authStore.user }} <i class="arrow-down"></i></span>
            <div class="submenu">
              <router-link to="/" @click.native="authStore.logout">Cerrar sesión</router-link>
            </div>
          </div>

        </div>
        
        <div v-else class="contenedor-iniciar-sesion">
          <router-link to="/auth/login" class="btn-iniciar-sesion">Iniciar sesión</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { useAuthStore } from '@/stores/authStore';

export default {
  setup() {
    const authStore = useAuthStore();
    return { authStore };
  }
};
</script>




<style scoped>
.fondo-nav {
  background-color: #082447;
  padding: 10px 20px;
}

.navegacion-principal {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.contenedor-logo {
  background-color: #ffcc00;
  padding: 1px;
  border-radius: 5px;
}

.logo img {
  height: 100px;
  display: block;
}

.enlaces {
  display: flex;
  align-items: center;
  gap: 50px; /* Separación entre enlaces */
}

.enlaces a,
.no-clic {
  color: #ffffff;
  text-decoration: none;
  font-size: 1.2rem;
  position: relative;
  transition: color 0.3s;
  padding: 15px 0; /* Ajustar padding para ocupar espacio vertical */
}

.enlaces a:not(.btn-iniciar-sesion):not(.submenu a)::after {
  content: '';
  display: block;
  width: 0;
  height: 2px;
  background-color: #ffcc00;
  transition: width 0.3s;
  position: absolute;
  bottom: -5px;
  left: 0;
}

.enlaces a:not(.btn-iniciar-sesion):not(.submenu a):hover::after {
  width: 100%; /* Efecto de línea en hover solo para enlaces principales */
}

.submenu a::after {
  display: none;
}

.enlaces a:hover,
.no-clic:hover {
  color: #ffcc00;
}

.no-clic {
  cursor: default;
  display: flex;
  align-items: center;
}

.no-clic .arrow-down {
  margin-left: 5px;
  border: solid white;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
  transition: transform 0.3s;
}

.enlace-desplegable:hover .arrow-down {
  transform: rotate(-135deg); /* Flecha hacia arriba en hover */
}

.enlace-desplegable {
  position: relative;
}

.submenu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #082447;
  padding: 10px 0;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
  width: 210px;
}

.submenu-mas {
  left: -100px; /* Ajustar para que el submenú aparezca más a la izquierda */
}

.submenu-sub {
  display: none;
  position: absolute;
  top: 0;
  left: auto; /* Cambiar a auto */
  right: 100%; /* Desplaza el submenú a la izquierda */
  background-color: #082447;
  padding: 10px 0;
  border-radius: 5px;
  width: 210px; /* Mantener ancho original */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.enlace-desplegable-sub:hover .submenu-sub {
  display: block;
}

.submenu a {
  display: block;
  padding: 20px;
  color: #ffffff;
  text-decoration: none;
  font-size: 1rem;
  white-space: nowrap;
  text-align: left;
}

.submenu a:hover {
  background-color: #ffcc00;
  color: #082447;
}

.enlace-desplegable:hover .submenu {
  display: block;
}

.contenedor-iniciar-sesion {
  background-color: #ffcc00;
  padding: 15px 10px;
  border-radius: 5px;
}

.btn-iniciar-sesion {
  color: #002a5c;
  font-weight: bold;
}

.btn-iniciar-sesion::after {
  display: none;
}

/* Nueva regla para la flecha a la izquierda */
.arrow-right {
  margin-right: 0px;
  margin-left: 20px;
  border: solid white;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(135deg); /* Orientación de la flecha a la izquierda */
}

.espacio-egresados {
  margin-bottom: 0px; 
}

.espacio-contacto {
  margin-top: 0px; 
}
/* Estilos para el mensaje de bienvenida */
.contenedor-usuario span {
  color: #ffcc00; /* Color de texto en amarillo */
  font-weight: bold;
  font-size: 1rem; /* Tamaño de fuente reducido */
  margin-right: 10px; /* Separación ajustada */
}

/* Estilos para el botón de cierre de sesión */
.btn-cerrar-sesion {
  background-color: #ffcc00; /* Color de fondo en amarillo */
  color: #002a5c; /* Color de texto en azul oscuro */
  font-weight: bold;
  border: none;
  padding: 5px 10px; /* Padding reducido */
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.btn-cerrar-sesion:hover {
  background-color: #e6b800; /* Fondo en amarillo más oscuro al hacer hover */
  color: #ffffff; /* Cambia a blanco para resaltar más */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* Sombra para un efecto más visible */
}



</style>