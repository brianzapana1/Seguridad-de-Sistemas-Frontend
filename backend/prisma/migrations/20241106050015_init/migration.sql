/*
  Warnings:

  - You are about to drop the `actividad` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `beca` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `blog` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `bolsa_trabajo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `carrera` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `estudiante` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `evento` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `institucion` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `normativa` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `noticia` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `pregunta_frecuente` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `recurso_academico` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `reserva` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `testimonio` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `usuario` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "reserva" DROP CONSTRAINT "reserva_id_estudiante_fkey";

-- DropForeignKey
ALTER TABLE "reserva" DROP CONSTRAINT "reserva_id_recurso_fkey";

-- DropForeignKey
ALTER TABLE "usuario" DROP CONSTRAINT "usuario_id_estudiante_fkey";

-- DropTable
DROP TABLE "actividad";

-- DropTable
DROP TABLE "beca";

-- DropTable
DROP TABLE "blog";

-- DropTable
DROP TABLE "bolsa_trabajo";

-- DropTable
DROP TABLE "carrera";

-- DropTable
DROP TABLE "estudiante";

-- DropTable
DROP TABLE "evento";

-- DropTable
DROP TABLE "institucion";

-- DropTable
DROP TABLE "normativa";

-- DropTable
DROP TABLE "noticia";

-- DropTable
DROP TABLE "pregunta_frecuente";

-- DropTable
DROP TABLE "recurso_academico";

-- DropTable
DROP TABLE "reserva";

-- DropTable
DROP TABLE "testimonio";

-- DropTable
DROP TABLE "usuario";

-- CreateTable
CREATE TABLE "Actividades" (
    "idActividad" SERIAL NOT NULL,
    "Titulo" VARCHAR(255) NOT NULL,
    "Descripcion" TEXT NOT NULL,
    "Fecha_inicio" TIMESTAMP(3) NOT NULL,
    "Fecha_fin" TIMESTAMP(3) NOT NULL,
    "Tipo" VARCHAR(100) NOT NULL,

    CONSTRAINT "Actividades_pkey" PRIMARY KEY ("idActividad")
);

-- CreateTable
CREATE TABLE "Admi_beca" (
    "idAdmiBeca" SERIAL NOT NULL,
    "Nombre" VARCHAR(100) NOT NULL,
    "Descripcion" TEXT NOT NULL,
    "Requisitos" TEXT NOT NULL,

    CONSTRAINT "Admi_beca_pkey" PRIMARY KEY ("idAdmiBeca")
);

-- CreateTable
CREATE TABLE "Blog" (
    "idBlog" SERIAL NOT NULL,
    "Titulo" VARCHAR(255) NOT NULL,
    "Contenido" TEXT NOT NULL,
    "Fecha_publicacion" TIMESTAMP(3) NOT NULL,
    "Categoria" VARCHAR(100) NOT NULL,

    CONSTRAINT "Blog_pkey" PRIMARY KEY ("idBlog")
);

-- CreateTable
CREATE TABLE "Bolsa_de_trabajo" (
    "idBolsa" SERIAL NOT NULL,
    "Titulo" VARCHAR(255) NOT NULL,
    "Descripcion" TEXT NOT NULL,
    "Fecha_publicacion" INTEGER NOT NULL,
    "Fecha_expiracion" INTEGER NOT NULL,

    CONSTRAINT "Bolsa_de_trabajo_pkey" PRIMARY KEY ("idBolsa")
);

-- CreateTable
CREATE TABLE "Carreras" (
    "idCarrera" SERIAL NOT NULL,
    "Nombre" VARCHAR(100) NOT NULL,
    "Descripcion" TEXT NOT NULL,
    "Perfil_egresado" TEXT NOT NULL,
    "Oportunidades_prof" TEXT NOT NULL,

    CONSTRAINT "Carreras_pkey" PRIMARY KEY ("idCarrera")
);

-- CreateTable
CREATE TABLE "Eventos" (
    "idEvento" SERIAL NOT NULL,
    "Titulo" VARCHAR(100) NOT NULL,
    "Descripcion" TEXT NOT NULL,
    "FechadeInicio" TIMESTAMP(3) NOT NULL,
    "FechadeFin" TIMESTAMP(3) NOT NULL,
    "Categoria" VARCHAR(100) NOT NULL,

    CONSTRAINT "Eventos_pkey" PRIMARY KEY ("idEvento")
);

-- CreateTable
CREATE TABLE "Noticias" (
    "idNoticia" SERIAL NOT NULL,
    "Titulo" VARCHAR(255) NOT NULL,
    "Contenido" TEXT NOT NULL,
    "Fecha_publicacion" TIMESTAMP(3) NOT NULL,
    "Categoria" VARCHAR(100) NOT NULL,

    CONSTRAINT "Noticias_pkey" PRIMARY KEY ("idNoticia")
);

-- CreateTable
CREATE TABLE "Persona" (
    "idPersona" SERIAL NOT NULL,
    "Nombre" VARCHAR(100) NOT NULL,
    "Seg_Nombre" VARCHAR(100),
    "Tercer_Nombre" VARCHAR(100),
    "Apellido_Paterno" VARCHAR(100) NOT NULL,
    "Apellido_Materno" VARCHAR(100) NOT NULL,
    "Correo" VARCHAR(150) NOT NULL,
    "Telefono" VARCHAR(20) NOT NULL,
    "Direccion" TEXT NOT NULL,
    "Historial_acad" TEXT NOT NULL,

    CONSTRAINT "Persona_pkey" PRIMARY KEY ("idPersona")
);

-- CreateTable
CREATE TABLE "Preguntas_frecuentes" (
    "idPreg_Frec" SERIAL NOT NULL,
    "Pregunta" VARCHAR(100) NOT NULL,
    "Respuesta" VARCHAR(100) NOT NULL,

    CONSTRAINT "Preguntas_frecuentes_pkey" PRIMARY KEY ("idPreg_Frec")
);

-- CreateTable
CREATE TABLE "Recursos_academicos" (
    "idRecurso" SERIAL NOT NULL,
    "Titulo" VARCHAR(255) NOT NULL,
    "Autor" VARCHAR(100) NOT NULL,
    "Tipo" VARCHAR(50) NOT NULL,
    "url" TEXT NOT NULL,
    "Categoria" VARCHAR(50) NOT NULL,

    CONSTRAINT "Recursos_academicos_pkey" PRIMARY KEY ("idRecurso")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "idUsuario" SERIAL NOT NULL,
    "idPersona" INTEGER NOT NULL,
    "Nombre_usuario" VARCHAR(100) NOT NULL,
    "Contrasenia" VARCHAR(255) NOT NULL,
    "Rol" VARCHAR(50) NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("idUsuario")
);

-- CreateTable
CREATE TABLE "Reservas" (
    "idReserva" SERIAL NOT NULL,
    "idUsuario" INTEGER NOT NULL,
    "idRecurso" INTEGER NOT NULL,
    "Fecha_reserva" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Reservas_pkey" PRIMARY KEY ("idReserva")
);

-- CreateTable
CREATE TABLE "Testimonio" (
    "idTestimonio" SERIAL NOT NULL,
    "idUsuario" INTEGER NOT NULL,
    "Testimonio" TEXT NOT NULL,
    "Fecha_publicacion" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Testimonio_pkey" PRIMARY KEY ("idTestimonio")
);

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_idPersona_fkey" FOREIGN KEY ("idPersona") REFERENCES "Persona"("idPersona") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservas" ADD CONSTRAINT "Reservas_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuario"("idUsuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservas" ADD CONSTRAINT "Reservas_idRecurso_fkey" FOREIGN KEY ("idRecurso") REFERENCES "Recursos_academicos"("idRecurso") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Testimonio" ADD CONSTRAINT "Testimonio_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuario"("idUsuario") ON DELETE RESTRICT ON UPDATE CASCADE;
