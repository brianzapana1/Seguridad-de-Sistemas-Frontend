<template>
  <div class="admin-dashboard">
    <h1 class="welcome-message">📝 Registrar Usuario</h1>

    <div class="admin-info">
      <h2>📋 Datos del Usuario</h2>

      <form @submit.prevent="registrarPersona" class="edit-form">
        <!-- 🏷 Datos de Persona -->
        <h3>📄 Datos Personales</h3>
        <div class="form-group">
          <label>Nombre</label>
          <input v-model="persona.Nombre" type="text" required />
        </div>
        <div class="form-group">
          <label>Segundo Nombre (Opcional)</label>
          <input v-model="persona.Seg_Nombre" type="text" />
        </div>
        <div class="form-group">
          <label>Tercer Nombre (Opcional)</label>
          <input v-model="persona.Tercer_Nombre" type="text" />
        </div>
        <div class="form-group">
          <label>Apellido Paterno</label>
          <input v-model="persona.Apellido_Paterno" type="text" required />
        </div>
        <div class="form-group">
          <label>Apellido Materno</label>
          <input v-model="persona.Apellido_Materno" type="text" required />
        </div>
        <div class="form-group">
          <label>Correo Electrónico</label>
          <input v-model="persona.Correo" type="email" required />
        </div>
        <div class="form-group">
          <label>Teléfono (Opcional)</label>
          <input v-model="persona.Telefono" type="text" />
        </div>
        <div class="form-group">
          <label>Dirección (Opcional)</label>
          <input v-model="persona.Direccion" type="text" />
        </div>

        <!-- 🎓 Selección de Carrera -->
        <h3>🎓 Selección de Carrera</h3>
        <div class="form-group">
          <label>Carrera</label>
          <select v-model="persona.idCarrera" required>
            <option :value="null">Ninguna</option>
            <option v-for="carrera in carreras" :key="carrera.idCarrera" :value="carrera.idCarrera">
              {{ carrera.Nombre }}
            </option>
          </select>
        </div>

        <button class="save-button" type="submit">
          Registrar Persona
        </button>
      </form>

      <!-- 🔑 Sección para registrar Usuario -->
      <form v-if="personaRegistrada && usuario.idPersona" @submit.prevent="registrarUsuario" class="edit-form">
        <h3>🔑 Datos de Usuario</h3>
        <div class="form-group">
          <label>Nombre de Usuario</label>
          <input v-model="usuario.Nombre_usuario" type="text" required />
        </div>

        <!-- 🔒 Contraseña -->
        <div class="form-group">
          <label>Contraseña</label>
          <div class="password-container">
            <input
              v-model="usuario.Contrasenia"
              :type="mostrarContrasena ? 'text' : 'password'"
              required
              @input="validarContrasena"
            />
            <span class="toggle-password" @click="mostrarContrasena = !mostrarContrasena">
              {{ mostrarContrasena ? '👁‍🗨' : '👁' }}
            </span>
          </div>
          <small :class="{'error-message': !validaLongitud}">🔢 Mínimo 12 caracteres</small>
          <small :class="{'error-message': !validaMayuscula}">🔠 Al menos una letra mayúscula</small>
          <small :class="{'error-message': !validaNumero}">🔢 Al menos un número</small>
          <small :class="{'error-message': !validaEspecial}">🔣 Al menos un carácter especial</small>
        </div>

        <!-- 🔑 Confirmar Contraseña -->
        <div class="form-group">
          <label>Confirmar Contraseña</label>
          <div class="password-container">
            <input
              v-model="confirmarContrasena"
              :type="mostrarConfirmar ? 'text' : 'password'"
              required
            />
            <span class="toggle-password" @click="mostrarConfirmar = !mostrarConfirmar">
              {{ mostrarConfirmar ? '👁‍🗨' : '👁' }}
            </span>
          </div>
          <small v-if="confirmarContrasena && usuario.Contrasenia !== confirmarContrasena" class="error-message">
            ❌ Las contraseñas no coinciden
          </small>
        </div>

        <button class="save-button" type="submit" :disabled="!validacionCompleta || usuario.Contrasenia !== confirmarContrasena">
          Registrar Usuario
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      persona: {
        Nombre: "",
        Seg_Nombre: "",
        Tercer_Nombre: "",
        Apellido_Paterno: "",
        Apellido_Materno: "",
        Correo: "",
        Telefono: "",
        Direccion: "",
        idCarrera: null,
        idPersona: null, 
      },
      usuario: {
        Nombre_usuario: "",
        Contrasenia: "",
        idPersona: null, 
      },
      personaRegistrada: false, 
      carreras: [], 
      confirmarContrasena: "",
      mostrarContrasena: false,
      mostrarConfirmar: false,
      validaLongitud: false,
      validaMayuscula: false,
      validaNumero: false,
      validaEspecial: false,
    };
  },
  computed: {
    validacionCompleta() {
      return this.validaLongitud && this.validaMayuscula && this.validaNumero && this.validaEspecial;
    }
  },
  methods: {
    async obtenerCarreras() {
      try {
        const response = await axios.get("http://localhost:3001/api/carrera/all", { withCredentials: true });
        this.carreras = response.data;
      } catch (error) {
        console.error("❌ Error obteniendo carreras:", error);
      }
    },

    async registrarPersona() {
      try {
        const responsePersona = await axios.post("http://localhost:3001/api/persona/register", this.persona, { withCredentials: true });

        this.persona.idPersona = responsePersona.data.persona.idPersona;
        this.usuario.idPersona = responsePersona.data.persona.idPersona;
        this.personaRegistrada = true;

        console.log("✅ Persona registrada. ID:", this.persona.idPersona);
        console.log("👤 ID de usuario asignado:", this.usuario.idPersona);
        alert("✅ Persona registrada correctamente. Ahora puedes registrar el usuario.");
      } catch (error) {
        console.error("❌ Error al registrar persona:", error);
        alert(error.response?.data?.error || "⚠️ Error al registrar la persona.");
      }
    },

    async registrarUsuario() {
      console.log("📤 Intentando registrar usuario...");
      console.log("Datos enviados:", this.usuario);

      if (!this.validacionCompleta || this.usuario.Contrasenia !== this.confirmarContrasena) {
        alert("⚠️ Corrige los errores antes de registrar.");
        return;
      }

      try {
        const response = await axios.post("http://localhost:3001/api/usuario/register", this.usuario, { withCredentials: true });

        alert("✅ Usuario registrado correctamente");
        console.log("✅ Respuesta del servidor:", response);
        this.$router.push("/admin/ver-usuarios");
      } catch (error) {
        console.error("❌ Error al registrar usuario:", error);
        alert("Hubo un error al registrar el usuario.");
      }
    }
  },
  mounted() {
    this.obtenerCarreras();
  }
};
</script>




  
  <style scoped>
  @import "@/assets/adminStyles.css";
  
  .error-message {
    color: red;
    font-size: 0.9em;
  }
  
  .password-container {
    display: flex;
    align-items: center;
    position: relative;
  }
  
  .toggle-password {
    position: absolute;
    right: 10px;
    cursor: pointer;
    font-size: 1.2em;
  }
  </style>
  