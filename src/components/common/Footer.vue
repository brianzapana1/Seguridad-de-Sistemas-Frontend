<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-left">
        <img src="/UAC Pucarani 1.1.png" alt="UAC Pucarani Logo" class="footer-logo" />
        <div class="social-icons">
          <a href="https://www.tiktok.com/@enfe_fisioucb?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer">
            <img src="@/assets/tiktok.png" alt="Tiktok" class="social-icon" />
          </a>
          <a href="https://youtube.com/@uacucb_catolica?si=1Lt7PuTDjgxBD1DI" target="_blank" rel="noopener noreferrer">
            <img src="@/assets/youtube.png" alt="YouTube" class="social-icon" />
          </a>
          <a href="https://x.com/CatolicaUacs" class="social-icon" target="_blank" rel="noopener noreferrer">
            <img src="@/assets/x.png" alt="X" class="social-icon" />
          </a>

          <div class="facebook">
            <div class="facebook-icons">
              <a href="https://www.facebook.com/profile.php?id=100077839208489" target="_blank">
                <img src="@/assets/facebook.png" alt="Facebook" class="social-icon" />
              </a>
                <p>Fisioterapia y <br> Kinesiología</p>
            </div>
            <div class="facebook-icons">
              <a href="https://www.facebook.com/uacucb.pucarani/" target="_blank">
                <img src="@/assets/facebook.png" alt="Facebook" class="social-icon" />
              </a>
                <p>Enfermería</p>             
            </div>
          </div>
        </div>
      </div>
      <div class="footer-center">
        <h3>DIRECCIÓN:</h3>
        <p>Provincia Los Andes,</p>
        <p>Pucarani, Av. Avaroa s/n.</p>
        <h3>TELÉFONO:</h3>
        <p>2-2895160</p>
        <h3>CORREO ELECTRÓNICO:</h3>
        <p><a href="uac.pucarani.enf.fsk@gmail.com" class="email-link">uac.pucarani.enf.fsk@gmail.com</a></p>
        <p><a href="uacpucarani@uacucb.edu.bo" class="email-link">uacpucarani@uacucb.edu.bo</a></p>
      </div>
      <div class="footer-right">
        <h3>ENLACES RÁPIDOS:</h3>
        <ul>
          <li><router-link to="faqs" class="quick-link">Preguntas frecuentes</router-link></li>
          <li><router-link to="testimonios" class="quick-link">Testimonios de estudiantes</router-link></li>
        </ul>
        <div class="careers">
          <div class="career">
            <router-link to="/fisioterapia"> <!-- Cambia URL_FISIOTERAPIA por la URL real -->
              <img src="/LOGO FISIOTERAPIA Y KINESIOLOGIA.png" alt="Fisioterapia y Kinesiología" />
            </router-link>
            <p>FISIOTERAPIA Y KINESIOLOGÍA</p>           
          </div>
          <div class="career">
            <router-link to="enfermeria"> <!-- Cambia URL_ENFERMERIA por la URL real -->
              <img src="/LAMPARA ENFERMERIA 1.png" alt="Enfermería" />             
            </router-link>
            <p>ENFERMERÍA</p>
          </div>
        </div>
      </div>
    </div>
    <div class="whatsapp-icons">
      <a href="https://wa.me/+59164173898" target="_blank" rel="noopener noreferrer" class="whatsapp-link">
        <img src="@/assets/whatsapp.png" alt="WhatsApp Fisioterapia" class="whatsapp-icon" />
        <span class="whatsapp-description">Fisioterapia y Kinesiología</span>
      </a>
      <a href="https://wa.me/+59167304957" target="_blank" rel="noopener noreferrer" class="whatsapp-link">
        <img src="@/assets/whatsapp.png" alt="WhatsApp Enfermería" class="whatsapp-icon" />
        <span class="whatsapp-description">Enfermería</span>
      </a>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2024 <strong>TODOS LOS DERECHOS RESERVADOS | UAC PUCARANI</strong></p>
    </div>
  </footer>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  name: 'Footer',
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

.footer {
  background-color: #002244; /* Azul oscuro */
  color: white;
  padding: 40px 20px; /* Reducir padding para altura */
  font-family: 'Playfair Display', serif;
  position: relative;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  align-items: stretch; /* Alinear a lo largo del eje vertical */
  text-align: left;
}

.footer-left {
  flex: 1;
  max-width: 30%;
  text-align: center;
  border-right: 1px solid #ccc;
  padding-right: 20px; /* Agregar espacio a la derecha */
}

.footer-center {
  flex: 1;
  max-width: 30%;
  text-align: center;
  border-right: 1px solid #ccc;
  padding-right: 40px; /* Agregar espacio a la derecha */
}

.footer-right {
  flex: 1;
  max-width: 30%;
  text-align: center;
}

.footer-logo {
  width: 400px;
  margin-top: 50px;
  margin-bottom: 5px;
  
}

.footer-slogan {
  font-weight: 600;
  font-size: 1.2rem;
  margin-bottom: 5px;
}

.social-icons {
  margin-top: 15px;
  margin-left: 90px;
}


.social-icon {
  width: 40px;
  margin-right: 45px;
  transition: transform 0.3s ease; /* Mantener la transición de transform */
}

.social-icon:hover {
  transform: scale(1.2); /* Aumenta el tamaño al pasar el mouse */
  filter: brightness(0.8); /* Reduce el brillo */
}

.whatsapp-icons {
  display: flex;
  justify-content: center;
  margin: -100px 0 -40px 0; /* Ajustar margen para centrar verticalmente */
  padding-bottom: 90px;
}

.whatsapp-link {
  display: flex;
  flex-direction: column; /* Para apilar la imagen y la descripción */
  align-items: center; /* Centrar horizontalmente */
  margin: 0 90px; /* Espaciado horizontal entre iconos */
  text-decoration: none; /* Quitar subrayado */
  color: white; /* Color de texto de la descripción */
}

.whatsapp-icon {
  width: 40px; /* Tamaño de las imágenes de WhatsApp */
  transition: transform 0.3s ease; /* Animación para el hover */
}

.whatsapp-link:hover .whatsapp-icon {
  transform: scale(1.2); /* Aumentar tamaño al hacer hover */
}

.whatsapp-description {
  font-size: 0.8rem; /* Tamaño de la fuente de la descripción */
  margin-top: 6px; /* Espaciado entre icono y descripción */
}

.facebook{
  display: flex;
  justify-content: space-around;
  margin-right: 90px;
  text-align: center;
}

.facebook-icons img{
  margin-left: 40px;
  margin-top: 20px;
  text-align: center;
}


.facebook p{
  text-align: center;
  margin: 0 15px; /* Espaciado entre los dos enlaces de Facebook */
  color: #ffcc00;
  text-decoration: none;
}

.facebook-link p {
  margin-top: 5px;
  font-size: 0.8rem; /* Tamaño del texto debajo de cada icono */
}


.footer-right ul {
  list-style-type: none;
  padding: 0;
}

.footer-right ul li {
  margin-bottom: 10px; /* Espaciado entre enlaces */
}

.footer-right ul li a {
  color: white;
  text-decoration: none;
  transition: color 0.3s ease, transform 0.3s ease;
}

.footer-right ul li a:hover {
  color: #ffcc00;
  transform: translateY(-3px); /* Desplazamiento al hacer hover */
}

/* Añadir animación a los enlaces rápidos */
.quick-link {
  display: inline-block; /* Para permitir la animación */
  transition: transform 0.3s ease, color 0.3s ease; /* Animación para el hover */
}

.quick-link:hover {
  color: #ffcc00; /* Cambia el color al pasar el mouse */
  transform: scale(1.1); /* Aumentar tamaño al hacer hover */
}

.careers {
  display: flex;
  justify-content: space-around;
  margin-top: 90px; /* Aumenta el margen superior para bajar las imágenes más */
}

.career {
  text-align: center;
  transition: transform 0.3s ease;
}

.career:hover{
  transform: scale(1.15); /* Aumenta tamaño al hacer hover */

}
.career p{
  color: #ffcc00;
}

.career img {
  width: 150px;
  margin-bottom: 10px;
  transition: transform 0.3s ease;
}



.footer-bottom {
  text-align: center;
  margin-top: 20px; /* Ajustar margen superior */
  padding-top: 10px;
  border-top: 1px solid white; /* Cambiar color de la línea a blanco */
}

.footer-bottom p {
  color: white; /* Cambiar color del texto a blanco */
  font-size: 0.8rem; /* Reducir tamaño de fuente */
  font-weight: bold; /* Establecer en negrita */
  margin: 0; /* Quitar margen para centrar verticalmente */
  display: inline-block; /* Para centrar verticalmente */
}

.email-link {
  color: white; /* Color de texto para los enlaces de correo electrónico */
  text-decoration: none; /* Quitar subrayado */
}

.email-link:hover {
  text-decoration: underline; /* Subrayar al hacer hover */
}

/* Agregar estilo para los títulos en amarillo */
.footer-center h3,
.footer-right h3,
.footer-left h3 {
  color: #ffcc00; /* Color amarillo para los títulos */
}
</style>

