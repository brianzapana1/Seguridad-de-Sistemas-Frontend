import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/api/auth", // Asegúrate de que sea la URL correcta del backend
  withCredentials: true, // 🔥 Permite enviar y recibir cookies automáticamente
});

const authService = {
    login: (Nombre_usuario, Contrasenia) => api.post("/login", { Nombre_usuario, Contrasenia }),
    getUserInfo: () => api.get("/user-info"),  // ✅ RUTA CORRECTA
    logout: () => api.post("/logout"),
  };
  
  

export default authService;
