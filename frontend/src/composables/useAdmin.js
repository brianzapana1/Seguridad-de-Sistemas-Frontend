import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { adminService } from '@/services/adminService';
import { useAuthStore } from '@/stores/authStore';

export function useAdmin() {
    const authStore = useAuthStore();
    const router = useRouter();
    const admin = ref({
        nombreCompleto: '',
        correo: '',
        telefono: '',
        direccion: '',
        historial_acad: '',
        nombre_usuario: '',
        rol: '',
    });
    const isEditing = ref(false);

    const obtenerDatosAdmin = async () => {
        try {
            // ✅ Verifica si el usuario está autenticado
            if (!authStore.isAuthenticated) {
                console.warn("⚠️ Usuario no autenticado. Redirigiendo al inicio...");
                router.push('/');
                return;
            }

            // ✅ Si no tiene permisos en el token, redirigir
            const tieneAcceso = authStore.tieneAlgunPermiso;
            console.log("🔍 Permiso para acceder a admin:", tieneAcceso);
            
            if (!tieneAcceso) {
              console.warn("⚠️ No tienes permisos para acceder a esta página.");
              router.push('/');
              return;
            }
            

            // ✅ Obtener datos del administrador (no se envía token manualmente)
            const data = await adminService.obtenerDatosAdmin();
            admin.value = {
                nombreCompleto: `${data.persona.Nombre} ${data.persona.Apellido_Paterno}`,
                correo: data.persona.Correo,
                telefono: data.persona.Telefono,
                direccion: data.persona.Direccion,
                historial_acad: data.persona.Historial_acad,
                nombre_usuario: data.usuario.Nombre_usuario,
                rol: data.usuario.Rol,
            };
        } catch (error) {
            console.error(error);
        }
    };

    const guardarDatosAdmin = async () => {
        try {
            await adminService.guardarDatosAdmin(admin.value);
            isEditing.value = false;
        } catch (error) {
            console.error(error);
        }
    };

    onMounted(async () => {
        await authStore.obtenerUsuarioAutenticado(); // 🔥 Se asegura de obtener datos de sesión antes de llamar a obtenerDatosAdmin()
        await obtenerDatosAdmin();
    });

    return { admin, isEditing, obtenerDatosAdmin, guardarDatosAdmin };
}
