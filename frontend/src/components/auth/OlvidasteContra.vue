<template>
    <div class="contenedor-principal">
      <div class="contenedor-olvide-contrasena">
        <!-- Logo del formulario -->
        <img src="/UAC Pucarani 1.2 OFICIAL 1.png" alt="Logo" class="logo" /> <!-- Cambia la ruta a la ubicación correcta de tu logo -->
        <form id="formularioOlvideContrasena" @submit.prevent="enviarEnlaceRestablecimiento">
          <legend>Olvidaste tu contraseña</legend>
          <p class="instrucciones">
            Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña.
          </p>
          <div class="campo">
            <input type="email" id="correo" placeholder="Tu Correo electrónico" required>
          </div>
          <div class="campo-boton">
            <button type="submit">Enviar enlace</button>
          </div>
          <div class="enlaces">
            <router-link to="/">Volver al inicio</router-link>
            <router-link to="/auth/login">Iniciar sesión</router-link>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <style scoped>
    /* Estilos del contenedor principal */
    .contenedor-principal {
      min-height: 100vh; /* Altura mínima total de la ventana */
      display: flex;
      align-items: center; /* Centrado vertical */
      justify-content: center; /* Centrado horizontal */
      background-color: #001f3f; /* Fondo azul oscuro de la página */
      font-family: Arial, sans-serif;
    }
  
    /* Estilos del contenedor del formulario */
    .contenedor-olvide-contrasena {
      background-color: #00274a; /* Azul oscuro */
      color: white;
      padding: 30px; /* Padding ajustado */
      border-radius: 10px;
      width: 100%;
      max-width: 400px; /* Ancho máximo reducido */
      animation: aparecer 1s ease-in-out;
      box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.3); /* Sombra */
      margin: auto; /* Margen automático para centrar */
      text-align: center; /* Centrado del texto */
    }
  
    /* Estilos del logo */
    .logo {
      max-width: 100%; /* Asegura que el logo no exceda el ancho del contenedor */
      height: auto; /* Mantiene la relación de aspecto */
      margin-bottom: 20px; /* Espacio debajo del logo */
    }
  
    /* Estilos del formulario */
    form legend {
      font-size: 24px; /* Texto más pequeño */
      font-weight: bold;
      color: #f7c600; /* Amarillo */
      text-align: center;
      margin-bottom: 20px;
      animation: desvanecerTexto 1.5s ease-in-out; /* Animación del texto */
    }
  
    @keyframes desvanecerTexto {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  
    /* Estilos de las instrucciones */
    .instrucciones {
      margin-bottom: 20px;
      font-size: 14px;
      color: #f7c600;
    }
  
    /* Estilos del campo */
    .campo {
      margin-top: 20px;
    }
  
    .campo input {
      width: 100%;
      padding: 10px; /* Ajuste en el padding */
      border: none;
      border-radius: 5px;
      margin-top: 10px;
      box-sizing: border-box;
      transition: all 0.3s ease; /* Transición para interacción */
    }
  
    .campo input:focus {
      outline: 2px solid #f7c600; /* Amarillo */
      transform: scale(1.02); /* Aumenta un poco el tamaño */
    }
  
    .campo-boton {
      margin-top: 20px; /* Espacio antes del botón */
    }
  
    .campo-boton button {
      background-color: #f7c600; /* Amarillo */
      color: #00274a; /* Azul oscuro */
      border: none;
      padding: 12px 20px;
      border-radius: 5px;
      font-size: 18px;
      cursor: pointer;
      width: 100%;
      transition: background-color 0.3s ease, transform 0.3s ease;
    }
  
    .campo-boton button:hover {
      background-color: #d1a700; /* Tonalidad más oscura de amarillo */
      transform: scale(1.05); /* Aumenta un poco el tamaño */
    }
  
    .campo-boton button:active {
      transform: scale(1); /* Regresa a su tamaño normal cuando se presiona */
    }
  
    /* Estilos de los enlaces */
    .enlaces {
      margin: 30px 0px; /* Espacio arriba y abajo de los enlaces */
      font-size: 14px; /* Tamaño de fuente */
      display: flex; /* Usamos flexbox para distribuir los enlaces */
      justify-content: space-between; /* Espacio entre los enlaces */
    }
  
    .enlaces a {
      color: #f7c600; /* Color amarillo */
      text-decoration: none; /* Sin subrayado */
      padding: 0 15px; /* Espacio entre los enlaces */
    }
  
    .enlaces a:hover {
      text-decoration: underline; /* Subrayado al pasar el mouse */
    }
  
    /* Ajustes de responsividad */
    @media screen and (max-width: 768px) {
      .contenedor-olvide-contrasena {
        max-width: 90%; /* Se adapta a pantallas pequeñas */
        padding: 20px; /* Ajusta el padding para pantallas pequeñas */
      }
    }
  </style>
  
  <script>
  export default {
    methods: {
      enviarEnlaceRestablecimiento() {
        const correo = document.getElementById('correo').value;
  
        if (!correo) {
          alert('Por favor, ingresa tu correo electrónico.');
          return false;
        }
  
        // Lógica para enviar el enlace de restablecimiento de contraseña
        alert('Te hemos enviado un enlace para restablecer tu contraseña.');
      }
    }
  }
  </script>
  