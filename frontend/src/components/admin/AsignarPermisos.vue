<template>
    <div class="admin-dashboard">
      <h1 class="welcome-message">🔐 Asignar Permisos</h1>
  
      <div class="admin-info">
        <!-- Selección de Usuario -->
        <h2>👤 Seleccionar Usuario</h2>
        <div class="form-group">
          <select v-model="usuarioSeleccionado" @change="cargarPermisos">
            <option disabled value="">Seleccione un usuario...</option>
            <option v-for="usuario in usuarios" :key="usuario.idUsuario" :value="usuario.idUsuario">
              {{ usuario.Nombre_usuario }} ({{ usuario.Persona?.Correo }})
            </option>
          </select>
        </div>
  
        <!-- Tabla de Permisos -->
        <h2>📋 Permisos por Módulo</h2>
        <table class="permissions-table">
          <thead>
            <tr>
              <th>Módulo</th>
              <th>
                <input type="checkbox" @change="toggleAll('crear')" />
                Crear
              </th>
              <th>
                <input type="checkbox" @change="toggleAll('leer')" />
                Leer
              </th>
              <th>
                <input type="checkbox" @change="toggleAll('actualizar')" />
                Actualizar
              </th>
              <th>
                <input type="checkbox" @change="toggleAll('eliminar')" />
                Eliminar
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="modulo in modulos" :key="modulo.idModulo">
              <td>{{ modulo.Nombre }}</td>
              <td><input type="checkbox" v-model="permisos[modulo.idModulo].crear" class="switch" /></td>
              <td><input type="checkbox" v-model="permisos[modulo.idModulo].leer" class="switch" /></td>
              <td><input type="checkbox" v-model="permisos[modulo.idModulo].actualizar" class="switch" /></td>
              <td><input type="checkbox" v-model="permisos[modulo.idModulo].eliminar" class="switch" /></td>
            </tr>
          </tbody>
        </table>
  
        <!-- Botón para Guardar -->
        <button @click="confirmarGuardado" class="save-button" :disabled="!usuarioSeleccionado">
          ✅ Guardar Permisos
        </button>
  
        <p v-if="mensajeError" class="error-message">{{ mensajeError }}</p>
        <p v-if="mensajeExito" class="success-message">{{ mensajeExito }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        usuarios: [],
        modulos: [],
        usuarioSeleccionado: "",
        permisos: {},
        permisosIniciales: {},
        mensajeError: "",
        mensajeExito: "",
      };
    },
    methods: {
      async cargarDatos() {
        try {
          const [usuariosResponse, modulosResponse] = await Promise.all([
            axios.get("http://localhost:3001/api/usuario/all", { withCredentials: true }),
            axios.get("http://localhost:3001/api/modulo/all", { withCredentials: true }),
          ]);
  
          this.usuarios = usuariosResponse.data;
          this.modulos = modulosResponse.data;
  
          // Inicializar permisos vacíos para cada módulo
          this.permisos = this.modulos.reduce((acc, modulo) => {
            acc[modulo.idModulo] = { crear: false, leer: false, actualizar: false, eliminar: false };
            return acc;
          }, {});
        } catch (error) {
          console.error("❌ Error cargando datos:", error);
        }
      },
      async cargarPermisos() {
        if (!this.usuarioSeleccionado) return;
        try {
          const response = await axios.get(
            `http://localhost:3001/api/permiso/${this.usuarioSeleccionado}`,
            { withCredentials: true }
          );
          const permisosUsuario = response.data;
  
          // Reiniciar permisos y asignar los existentes
          this.permisos = this.modulos.reduce((acc, modulo) => {
            const permiso = permisosUsuario.find((p) => p.idModulo === modulo.idModulo);
            acc[modulo.idModulo] = permiso
              ? { crear: permiso.Crear, leer: permiso.Leer, actualizar: permiso.Actualizar, eliminar: permiso.Eliminar }
              : { crear: false, leer: false, actualizar: false, eliminar: false };
            return acc;
          }, {});
          this.permisosIniciales = JSON.parse(JSON.stringify(this.permisos)); // Guardamos estado inicial
        } catch (error) {
          console.error("⚠️ No se pudieron cargar los permisos:", error);
        }
      },
      confirmarGuardado() {
        const cambios = Object.keys(this.permisos).some(
          (moduloId) =>
            JSON.stringify(this.permisos[moduloId]) !== JSON.stringify(this.permisosIniciales[moduloId])
        );
  
        if (cambios) {
          if (confirm("⚠️ Se han modificado permisos. ¿Desea continuar?")) {
            this.guardarPermisos();
          }
        } else {
          this.mensajeError = "⚠️ No hay cambios en los permisos.";
        }
      },
      async guardarPermisos() {
        if (!this.usuarioSeleccionado) {
          this.mensajeError = "⚠️ Debes seleccionar un usuario.";
          return;
        }
  
        try {
          await axios.post(
            "http://localhost:3001/api/permiso/register",
            {
              idUsuario: this.usuarioSeleccionado,
              permisos: this.permisos,
            },
            { withCredentials: true }
          );
  
          this.mensajeExito = "✅ Permisos asignados correctamente.";
          this.mensajeError = "";
          this.permisosIniciales = JSON.parse(JSON.stringify(this.permisos));
        } catch (error) {
          console.error("❌ Error al guardar permisos:", error);
          this.mensajeError = "⚠️ No se pudo asignar los permisos. Intenta de nuevo.";
          this.mensajeExito = "";
        }
      },
      toggleAll(tipo) {
        const estado = Object.values(this.permisos).every((p) => p[tipo]);
        Object.keys(this.permisos).forEach((moduloId) => {
          this.permisos[moduloId][tipo] = !estado;
        });
      },
    },
    mounted() {
      this.cargarDatos();
    },
  };
  </script>
  
  <style scoped>
  @import "@/assets/adminStyles.css";
  
  /* 📌 Estilos de la Tabla */
  .permissions-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  
  .permissions-table th,
  .permissions-table td {
    padding: 12px;
    text-align: center;
    border-bottom: 1px solid #ddd;
  }
  
  .permissions-table th {
    background: #002f5b;
    color: white;
  }
  
  /* 📌 Estilos para Switch */
  .switch {
    transform: scale(1.3);
    cursor: pointer;
  }
  
  /* 📌 Estilos de Mensajes */
  .error-message {
    color: red;
    font-size: 0.9em;
    margin-top: 10px;
  }
  
  .success-message {
    color: green;
    font-size: 0.9em;
    margin-top: 10px;
  }
  </style>
  