import { ref, onMounted } from 'vue';
import { adminService } from '@/services/adminService';
import { useAuthStore } from '@/stores/authStore';

export function useAdmin() {
    const authStore = useAuthStore();
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
            const data = await adminService.obtenerDatosAdmin(authStore.token);
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
            await adminService.guardarDatosAdmin(authStore.token, admin.value);
            isEditing.value = false;
        } catch (error) {
            console.error(error);
        }
    };

    onMounted(obtenerDatosAdmin);

    return { admin, isEditing, obtenerDatosAdmin, guardarDatosAdmin };
}
