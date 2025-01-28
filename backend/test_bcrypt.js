import bcrypt from "bcryptjs";

const contrasena = "Skipekei22"; // 🔥 La contraseña que queremos hashear

// ✅ Generar un nuevo hash
bcrypt.hash(contrasena, 10)
    .then(hash => console.log("Nuevo Hash Generado:", hash))
    .catch(err => console.error(err));
