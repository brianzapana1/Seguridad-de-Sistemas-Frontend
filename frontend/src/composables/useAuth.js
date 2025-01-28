import { ref } from "vue";
import { useAuthStore } from "@/stores/authStore";
import { useRouter } from "vue-router";

export function useAuth() {
    const authStore = useAuthStore();
    const router = useRouter();

    const nombreUsuario = ref("");
    const contrasena = ref("");
    const mostrarContrasena = ref(false);
    const mostrarMensaje = ref(false);

    const validarFormulario = async () => {
        mostrarMensaje.value = false;

        if (!nombreUsuario.value || !contrasena.value) {
            authStore.mensaje = "Por favor, completa todos los campos.";
            authStore.mensajeTipo = "error";
            mostrarMensaje.value = true;
            return;
        }

        await authStore.login(nombreUsuario.value, contrasena.value);
        mostrarMensaje.value = true;

        // ✅ Obtener sesión para verificar autenticación
        await authStore.obtenerUsuarioAutenticado();

        if (authStore.isAuthenticated) {
            setTimeout(() => {
                router.push("/"); // ✅ Redirige al dashboard en vez de "/"
            }, 1500);
        }
    };

    return {
        authStore,
        nombreUsuario,
        contrasena,
        mostrarContrasena,
        mostrarMensaje,
        validarFormulario,
    };
}
