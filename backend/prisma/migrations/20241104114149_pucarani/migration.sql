/*
  Warnings:

  - You are about to drop the `Producto` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Producto";

-- CreateTable
CREATE TABLE "actividad" (
    "id" SERIAL NOT NULL,
    "titulo" VARCHAR(255) NOT NULL,
    "descripcion" TEXT,
    "fecha_inicio" DATE,
    "fecha_fin" DATE,
    "tipo" VARCHAR(50),

    CONSTRAINT "actividad_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "beca" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "descripcion" TEXT,
    "requisitos" TEXT,

    CONSTRAINT "beca_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "blog" (
    "id" SERIAL NOT NULL,
    "titulo" VARCHAR(255) NOT NULL,
    "contenido" TEXT,
    "fecha_publicacion" DATE NOT NULL,
    "categoria" VARCHAR(50),

    CONSTRAINT "blog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bolsa_trabajo" (
    "id" SERIAL NOT NULL,
    "titulo" VARCHAR(255) NOT NULL,
    "descripcion" TEXT,
    "fecha_publicacion" DATE,
    "fecha_expiracion" DATE,

    CONSTRAINT "bolsa_trabajo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "carrera" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "descripcion" TEXT,
    "perfil_egresado" TEXT,
    "oportunidades_profesionales" TEXT,

    CONSTRAINT "carrera_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "estudiante" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "apellido" VARCHAR(100) NOT NULL,
    "correo" VARCHAR(100),
    "telefono" VARCHAR(20),
    "direccion" TEXT,
    "historial_academico" TEXT,

    CONSTRAINT "estudiante_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "evento" (
    "id" SERIAL NOT NULL,
    "titulo" VARCHAR(255) NOT NULL,
    "descripcion" TEXT,
    "fecha_inicio" DATE,
    "fecha_fin" DATE,
    "categoria" VARCHAR(50),

    CONSTRAINT "evento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "institucion" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "descripcion" TEXT,
    "mision" TEXT,
    "vision" TEXT,
    "valores" TEXT,

    CONSTRAINT "institucion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "normativa" (
    "id" SERIAL NOT NULL,
    "titulo" VARCHAR(255) NOT NULL,
    "descripcion" TEXT,
    "url_pdf" TEXT,

    CONSTRAINT "normativa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "noticia" (
    "id" SERIAL NOT NULL,
    "titulo" VARCHAR(255) NOT NULL,
    "contenido" TEXT NOT NULL,
    "fecha_publicacion" DATE NOT NULL,
    "categoria" VARCHAR(50),

    CONSTRAINT "noticia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pregunta_frecuente" (
    "id" SERIAL NOT NULL,
    "pregunta" TEXT NOT NULL,
    "respuesta" TEXT,

    CONSTRAINT "pregunta_frecuente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "recurso_academico" (
    "id" SERIAL NOT NULL,
    "titulo" VARCHAR(255) NOT NULL,
    "autor" VARCHAR(100),
    "tipo" VARCHAR(50),
    "url" TEXT,
    "categoria" VARCHAR(50),

    CONSTRAINT "recurso_academico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reserva" (
    "id" SERIAL NOT NULL,
    "id_estudiante" INTEGER,
    "id_recurso" INTEGER,
    "fecha_reserva" DATE NOT NULL,

    CONSTRAINT "reserva_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "testimonio" (
    "id" SERIAL NOT NULL,
    "id_persona" INTEGER,
    "testimonio" TEXT NOT NULL,
    "fecha_publicacion" DATE,

    CONSTRAINT "testimonio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usuario" (
    "id" SERIAL NOT NULL,
    "nombre_usuario" VARCHAR(50) NOT NULL,
    "contrasena" VARCHAR(255) NOT NULL,
    "rol" VARCHAR(50),
    "id_estudiante" INTEGER,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "estudiante_correo_key" ON "estudiante"("correo");

-- CreateIndex
CREATE UNIQUE INDEX "usuario_nombre_usuario_key" ON "usuario"("nombre_usuario");

-- AddForeignKey
ALTER TABLE "reserva" ADD CONSTRAINT "reserva_id_estudiante_fkey" FOREIGN KEY ("id_estudiante") REFERENCES "estudiante"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "reserva" ADD CONSTRAINT "reserva_id_recurso_fkey" FOREIGN KEY ("id_recurso") REFERENCES "recurso_academico"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "usuario" ADD CONSTRAINT "usuario_id_estudiante_fkey" FOREIGN KEY ("id_estudiante") REFERENCES "estudiante"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
