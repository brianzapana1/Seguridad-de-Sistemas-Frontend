<template>
    <div class="contenedor-principal">
        <div class="contenedor-inicio-sesion">
            <img src="/UAC Pucarani 1.2 OFICIAL 1.png" alt="Logo" class="logo" />
            <form @submit.prevent="validarFormulario">
                <legend>Inicia sesión</legend>

                <!-- ✅ Mensaje de notificación SOLO después de presionar el botón -->
                <div v-if="mostrarMensaje" :class="['notificacion', authStore.mensajeTipo]">
                    {{ authStore.mensaje }}
                </div>

                <div class="campo">
                    <input type="text" v-model="nombreUsuario" placeholder="Tu Nombre de Usuario" required />
                </div>
                <div class="campo">
                    <div class="campo-contrasena">
                        <input
                            :type="mostrarContrasena ? 'text' : 'password'"
                            v-model="contrasena"
                            placeholder="Tu Contraseña"
                            required
                        />
                        <button type="button" @click="mostrarContrasena = !mostrarContrasena" class="btn-ojo">
                            <span v-if="mostrarContrasena">👁️</span>
                            <span v-else>👁️‍🗨️</span>
                        </button>
                    </div>
                </div>
                <div class="enlaces">
                    <router-link to="/">Volver al inicio</router-link>
                    <router-link to="/auth/olvidaste">Olvidaste tu contraseña?</router-link>
                </div>
                <div class="campo-boton">
                    <button type="submit">Acceder</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { useAuth } from '@/composables/useAuth';

export default {
    setup() {
        return useAuth();
    }
};
</script>



<style scoped>

.notificacion {
        padding: 10px;
        margin-bottom: 15px;
        border-radius: 5px;
        text-align: center;
    }

    .exito {
        background-color: #d4edda;
        color: #155724;
    }

    .error {
        background-color: #f8d7da;
        color: #721c24;
    }

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
    .contenedor-inicio-sesion {
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

    /* Estilos del campo de contraseña */
    .campo-contrasena {
        position: relative; /* Para el posicionamiento del botón de mostrar/ocultar */
    }

    .campo-contrasena input {
        width: 100%; /* El campo ocupa el 100% del ancho */
        padding-right: 40px; /* Espacio para el botón dentro del campo */
    }

    .btn-ojo {
        position: absolute; /* Posición absoluta para estar sobre el campo */
        right: 10px; /* Espacio a la derecha */
        top: 50%; /* Centramos verticalmente */
        transform: translateY(-50%); /* Ajuste para centrar */
        background: none; /* Sin fondo */
        border: none; /* Sin borde */
        color: white; /* Color del ícono */
        cursor: pointer; /* Cursor de puntero */
        font-size: 18px; /* Ajusta el tamaño del ícono si es necesario */
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

    /* Nuevo estilo para el enlace "Admin?" */
    .campo-admin {
        margin-top: 10px; /* Menos espacio antes del enlace */
    }

    .admin-link {
        color: #f7c600; /* Color amarillo */
        text-decoration: none; /* Sin subrayado */
        font-size: 14px; /* Tamaño de letra más pequeño (similar a "Olvidaste tu contraseña?") */
    }

    .admin-link:hover {
        text-decoration: underline; /* Subrayado al pasar el mouse */
    }

    /* Animación de entrada suave */
    @keyframes aparecer {
        from {
            opacity: 0;
            transform: translateY(-30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
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

    /* Ajustes de responsividad */
    @media screen and (max-width: 768px) {
        .contenedor-inicio-sesion {
            max-width: 90%; /* Se adapta a pantallas pequeñas */
            padding: 20px; /* Ajusta el padding para pantallas pequeñas */
        }
    }
</style>
