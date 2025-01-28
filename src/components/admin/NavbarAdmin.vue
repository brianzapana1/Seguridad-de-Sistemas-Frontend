<template>
  <nav :class="['admin-navbar', { 'navbar-oculto': navbarOculto }]">
    <!-- Botón para ocultar/mostrar la barra -->
    <button class="toggle-navbar" @click="alternarNavbar">
      {{ navbarOculto ? '➡️' : '⬅️' }}
    </button>

    <div v-if="!navbarOculto">
      <!-- Logo y mensaje de bienvenida -->
      <div class="navbar-logo">
        <img src="/UAC Pucarani 1.1.png" alt="Logo UAC Pucarani" class="logo-image" />
      </div>
      <h2 class="mensaje-bienvenida">Bienvenido, Administrador</h2>

      <!-- Lista de navegación -->
      <ul class="navbar-lista">
        <!-- Inicio -->
        <li class="navbar-item">
          <a href="/admin" class="navbar-enlace">🏠 Inicio</a>
        </li>

        <!-- Gestión de Usuarios -->
        <li class="navbar-item">
          <a href="#" class="navbar-enlace" @click.prevent="alternarMenuUsuarios">
            👥 Gestión de Usuarios
          <span :class="['flecha', { 'flecha-arriba': usuariosAbierto, 'flecha-abajo': !usuariosAbierto }]"></span>
          </a>
          <ul v-show="usuariosAbierto" class="sub-menu">
            <li><router-link to="/admin/usuario/registrar" class="navbar-enlace">📝 Registrar Usuario</router-link></li>
            <li><router-link to="/admin/usuario/roles" class="navbar-enlace">⚖️ Asignar Roles</router-link></li>
            <li><router-link to="/admin/usuario/permisos" class="navbar-enlace">🔐 Asignar Permisos</router-link></li>
            <li><router-link to="/admin/usuario/visualizar" class="navbar-enlace">👀 Ver Usuarios</router-link></li>
            <li><router-link to="/admin/usuario/editar" class="navbar-enlace">✏️ Editar Usuario</router-link></li>
            <li><router-link to="/admin/usuario/eliminar" class="navbar-enlace">🗑️ Eliminar Usuario</router-link></li>
            </ul>
          </li>


        <!-- Gestión de Contenido -->
        <li class="navbar-item">
          <a href="#" class="navbar-enlace" @click.prevent="alternarMenuContenido">
            📚 Gestión de Contenido
            <span :class="['flecha', { 'flecha-arriba': contenidoAbierto, 'flecha-abajo': !contenidoAbierto }]"></span>
          </a>
          <ul v-show="contenidoAbierto" class="sub-menu">
            <li>
              <a href="#" class="navbar-enlace" @click.prevent="alternarMenuBiblioteca">
                📚 Recursos Académicos
                <span :class="['flecha', { 'flecha-arriba': bibliotecaAbierta, 'flecha-abajo': !bibliotecaAbierta }]"></span>
              </a>
              <ul v-show="bibliotecaAbierta" class="sub-menu">
                <li><router-link to="/admin/recursos/aniadir" class="navbar-enlace">Añadir</router-link></li>
                <li><router-link to="/admin/recursos/editar" class="navbar-enlace">Editar</router-link></li>
              </ul>
            </li>
            <li>
              <a href="#" class="navbar-enlace" @click.prevent="alternarMenuNoticias">
                📰 Noticias
                <span :class="['flecha', { 'flecha-arriba': noticiasAbiertas, 'flecha-abajo': !noticiasAbiertas }]"></span>
              </a>
              <ul v-show="noticiasAbiertas" class="sub-menu">
                <li><router-link to="/admin/noticias/aniadir" class="navbar-enlace">Añadir</router-link></li>
                <li><router-link to="/admin/noticias/editar" class="navbar-enlace">Editar</router-link></li>
              </ul>
            </li>
            <li>
              <a href="#" class="navbar-enlace" @click.prevent="alternarMenuTestimonios">
                💬 Testimonios
                <span :class="['flecha', { 'flecha-arriba': testimoniosAbiertos, 'flecha-abajo': !testimoniosAbiertos }]"></span>
              </a>
              <ul v-show="testimoniosAbiertos" class="sub-menu">
                <li><router-link to="/admin/testimonios/aniadir" class="navbar-enlace">Añadir</router-link></li>
                <li><router-link to="/admin/testimonios/editar" class="navbar-enlace">Editar</router-link></li>
              </ul>
            </li>
            <li>
              <a href="#" class="navbar-enlace" @click.prevent="alternarMenuEventos">
                📅 Eventos
                <span :class="['flecha', { 'flecha-arriba': eventosAbiertos, 'flecha-abajo': !eventosAbiertos }]"></span>
              </a>
              <ul v-show="eventosAbiertos" class="sub-menu">
                <li><router-link to="/admin/eventos/aniadir" class="navbar-enlace">Añadir</router-link></li>
                <li><router-link to="/admin/eventos/editar" class="navbar-enlace">Editar</router-link></li>
              </ul>
            </li>
            <li>
              <a href="#" class="navbar-enlace" @click.prevent="alternarMenuBlog">
                ✍️ Blog
                <span :class="['flecha', { 'flecha-arriba': blogAbierto, 'flecha-abajo': !blogAbierto }]"></span>
              </a>
              <ul v-show="blogAbierto" class="sub-menu">
                <li><router-link to="/admin/blog/aniadir" class="navbar-enlace">Añadir</router-link></li>
                <li><router-link to="/admin/blog/editar" class="navbar-enlace">Editar</router-link></li>
              </ul>
            </li>
          </ul>
        </li>

        <!-- Vista previa y cerrar sesión -->
        <li class="navbar-item">
          <router-link to="/" class="navbar-enlace">👀 Vista sitio</router-link>
        </li>
        <li class="navbar-item">
          <a href="#" class="navbar-enlace" @click.prevent="cerrarSesion">🔒 Cerrar sesión</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarAdmin",
  data() {
    return {
      navbarOculto: false,
      usuariosAbierto: false,
      contenidoAbierto: false,
      bibliotecaAbierta: false,
      noticiasAbiertas: false,
      testimoniosAbiertos: false,
      eventosAbiertos: false,
      blogAbierto: false,
    };
  },
  methods: {
    alternarNavbar() {
      this.navbarOculto = !this.navbarOculto;
      this.$emit('toggle-navbar', this.navbarOculto);  // Emitir el evento para ajustar el tamaño
    },
    alternarMenuUsuarios() {
      this.usuariosAbierto = !this.usuariosAbierto;
    },
    alternarMenuContenido() {
      this.contenidoAbierto = !this.contenidoAbierto;
    },
    alternarMenuBiblioteca() {
      this.bibliotecaAbierta = !this.bibliotecaAbierta;
    },
    alternarMenuNoticias() {
      this.noticiasAbiertas = !this.noticiasAbiertas;
    },
    alternarMenuTestimonios() {
      this.testimoniosAbiertos = !this.testimoniosAbiertos;
    },
    alternarMenuEventos() {
      this.eventosAbiertos = !this.eventosAbiertos;
    },
    alternarMenuBlog() {
      this.blogAbierto = !this.blogAbierto;
    },
    cerrarSesion() {
    // Limpiar los datos del localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('rol');
    
    // Redirigir al inicio (página de login o home)
    this.$router.push('/');
  }
  },
};
</script>

<style scoped>
/* Configuración general */
.admin-navbar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 280px;
  background: #002f5b;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
  transition: all 0.3s ease;
}

.navbar-oculto {
  width: 60px;
  background: #002f5b;
  overflow: hidden;
}

.toggle-navbar {
  background: #ffcc00;
  border: none;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  margin-bottom: 10px;
}

.navbar-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.logo-image {
  max-width: 150px;
}

.mensaje-bienvenida {
  font-size: 1.2em;
  margin-bottom: 20px;
  color: #f3f4f6;
  text-align: center;
}

.navbar-lista {
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: calc(100vh - 250px); /* Limita la altura de la lista */
  overflow-y: auto; /* Activa desplazamiento vertical */
  scrollbar-width: thin; /* Barra de desplazamiento delgada (Firefox) */
  scrollbar-color: #ffcc00 transparent; /* Colores personalizados (Firefox) */
}

/* Estilo para scrollbar en navegadores basados en WebKit (Chrome, Edge, Safari) */
.navbar-lista::-webkit-scrollbar {
  width: 6px; /* Ancho de la barra */
}

.navbar-lista::-webkit-scrollbar-thumb {
  background-color: #ffcc00; /* Color del scroll */
  border-radius: 3px; /* Redondeo */
}

.navbar-lista::-webkit-scrollbar-thumb:hover {
  background-color: #ffc700; /* Color al pasar el mouse */
}

.navbar-item {
  margin: 10px 0;
}

.navbar-enlace {
  display: block;
  padding: 10px;
  font-size: 1em;
  color: #f3f4f6;
  text-decoration: none;
  border-radius: 5px;
  transition: all 0.3s ease;
  padding-left: 15px; /* Espaciado interno para los enlaces */
}

.navbar-enlace:hover {
  background-color: #ffcc00;
  color: #002f5b;
}

.sub-menu {
  list-style: none;
  padding-left: 15px; /* Margen izquierdo para submenús */
  margin: 0;
}

.flecha {
  display: inline-block;
  margin-left: 10px;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid white;
  transition: transform 0.3s ease;
}

.flecha-abajo {
  transform: rotate(0deg);
}

.flecha-arriba {
  transform: rotate(180deg);
}

</style>
