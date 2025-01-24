<template>
    <div class="container">
        <!-- Banner -->
        <section class="banner-section">
            <div class="banner">
                <img src="@/assets/bolsa.png" alt="Imagen del banner">
                <div class="banner-overlay">
                    <h1>Conecta tu talento con el mercado laboral</h1>
                </div>
            </div>
        </section>

        <!-- Información de la Bolsa de Trabajo -->
        <section class="infobolsa">
            <div class="block-info1">
                <h1>¿Qué es la Bolsa de Trabajo UCB?</h1>
                <p>La Bolsa de Trabajo de la Universidad Católica Boliviana tiene como objetivo vincular a nuestros estudiantes y egresados con empresas nacionales e internacionales, brindando oportunidades de empleo y prácticas profesionales. Queremos ser el puente entre el talento académico y el mercado laboral, facilitando el desarrollo profesional y el crecimiento de nuestra comunidad universitaria.</p>
            </div>
            <div class="block-info2">
                <img src="@/assets/bolsa2.png" alt="Imagen informativa">
            </div>
        </section>

        <!-- Formulario para dejar el CV -->
        <section class="deja">
            <div class="block-img">
                <img src="@/assets/bolsa3.png" alt="Imagen deja tus datos">
            </div>
            <div class="form-block">
                <h1>Dejanos tus datos</h1>
                <p>¿Te gustaría formar parte de un equipo comprometido con la educación y el desarrollo profesional? En la Universidad Católica Boliviana, valoramos tu talento y dedicación. ¡Déjanos tus datos y únete a nuestra misión de formar líderes y servir a la comunidad!</p>

                <form action="#" method="POST" enctype="multipart/form-data">
                    <input type="text" name="nombre" placeholder="Nombres y apellidos" required>
                    <input type="email" name="correo" placeholder="Correo electrónico" required>
                    <input type="tel" name="celular" placeholder="Celular" required>
                    <input type="file" name="hoja_de_vida" accept=".pdf, .doc, .docx" required>
                    <button type="submit" class="submit-btn">Enviar</button>
                </form>
            </div>
        </section>

        <!-- Beneficios -->
        <section class="benefits-section">
            <h1>Nuestros Beneficios</h1>
            <div class="benefits-grid">
                <a href="/ofertas-laborales" class="benefit">
                    <i class="fas fa-hand-holding-usd benefit-icon"></i>
                    <h2>Compensación Competitiva e Igualdad</h2>
                    <p>Ofrecemos sueldos base competitivos y promovemos un entorno de igualdad de oportunidades.</p>
                </a>
                <a href="/ofertas-laborales" class="benefit">
                    <i class="fas fa-chalkboard-teacher benefit-icon"></i>
                    <h2>Capacitación y Desarrollo Profesional</h2>
                    <p>Brindamos programas de formación continua para impulsar el crecimiento de nuestros empleados.</p>
                </a>
                <a href="/ofertas-laborales" class="benefit">
                    <i class="fas fa-heart benefit-icon"></i>
                    <h2>Programas de Bienestar</h2>
                    <p>Facilitamos acceso a actividades de bienestar para fomentar el equilibrio entre la vida laboral y personal.</p>
                </a>
                <a href="/ofertas-laborales" class="benefit">
                    <i class="fas fa-shield-alt benefit-icon"></i>
                    <h2>Estabilidad Laboral</h2>
                    <p>Ofrecemos un ambiente de trabajo estable y seguro, comprometidos con el bienestar de nuestro equipo.</p>
                </a>
            </div>
        </section>
    </div>
</template>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');

/* Banner */
.banner-section {
    position: relative;
    overflow: hidden;
    animation: fadeIn 1.2s ease-in-out;
}

.banner img {
    width: 100%;
    height: auto;
    filter: brightness(0.5);
}

.banner-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(0, 0, 50, 0.8), rgba(0, 50, 100, 0.6));
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    font-family: 'Playfair Display', serif;
}

.banner-overlay h1 {
    color: #fff;
    font-size: 3.2rem;
    font-weight: bold;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
    opacity: 0;
    animation: slideIn 1.4s ease-out forwards;
}

/* Información de la Bolsa */
.infobolsa {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px 20px;
    gap: 20px;
    animation: fadeInUp 1.5s ease-in-out;
}

.block-info1 h1 {
    font-size: 2.5rem;
    margin-bottom: 15px;
    color: #004080;
}

.block-info1 p {
    font-size: 1.2rem;
    line-height: 1.8;
    color: #444;
    text-align: justify;
}

.block-info2 img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

/* Formulario para Dejar CV */
.deja {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px 20px;
    background: linear-gradient(145deg, #f0f4ff, #e4ebf8);
    border-radius: 15px;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
    margin-top: 30px;
}

.form-block h1 {
    font-size: 2.2rem;
    margin-bottom: 15px;
    color: #003366;
}

.form-block p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #333;
    margin-bottom: 20px;
}

.form-block form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    animation: fadeIn 1s ease-in-out;
}

.form-block form input {
    padding: 12px;
    font-size: 1rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    transition: border-color 0.3s;
}

.form-block form input:focus {
    border-color: #007bff;
    box-shadow: 0 0 6px rgba(0, 123, 255, 0.3);
}

.form-block form .submit-btn {
    padding: 12px;
    font-size: 1.2rem;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
}

.form-block form .submit-btn:hover {
    background-color: #0056b3;
    transform: scale(1.05);
}

/* Beneficios */
.benefits-section {
    text-align: center;
    padding: 60px 20px;
    background: linear-gradient(135deg, #010250, #0a0b4f);
    color: #fff;
}

.benefits-section h1 {
    font-size: 2.5rem;
    margin-bottom: 40px;
    animation: fadeInDown 1s ease-out;
}

.benefits-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    max-width: 1200px;
    margin: 0 auto;
}

.benefit {
    background-color: #FFCF00;
    padding: 25px;
    border-radius: 12px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    text-align: center;
    color: #010250;
    text-decoration: none;
    transition: transform 0.3s, box-shadow 0.3s;
    animation: fadeIn 1.5s ease-out;
}

.benefit:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
}

.benefit h2 {
    font-size: 1.6rem;
    margin: 15px 0;
}

.benefit p {
    font-size: 1rem;
}

.benefit-icon {
    font-size: 2.5rem;
    color: #010250;
    margin-bottom: 15px;
    animation: pulse 1.8s infinite;
}

/* Animaciones */
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes fadeInDown {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

@keyframes slideIn {
    from { opacity: 0; transform: translateX(-50px); }
    to { opacity: 1; transform: translateX(0); }
}

@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
}
</style>
