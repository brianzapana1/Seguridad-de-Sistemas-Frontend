/*
  Warnings:

  - You are about to drop the column `FechadeFin` on the `Eventos` table. All the data in the column will be lost.
  - You are about to drop the column `FechadeInicio` on the `Eventos` table. All the data in the column will be lost.
  - You are about to drop the column `Historial_acad` on the `Persona` table. All the data in the column will be lost.
  - You are about to drop the column `Seg_Nombre` on the `Persona` table. All the data in the column will be lost.
  - You are about to drop the column `idUsuario` on the `Reservas` table. All the data in the column will be lost.
  - You are about to drop the column `Rol` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the `Admi_beca` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Bolsa_de_trabajo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Carreras` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Preguntas_frecuentes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Recursos_academicos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Testimonio` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[Correo]` on the table `Persona` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[idPersona]` on the table `Usuario` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `idUsuario` to the `Actividades` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idUsuario` to the `Blog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `FechaFin` to the `Eventos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `FechaInicio` to the `Eventos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idUsuario` to the `Eventos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idUsuario` to the `Noticias` table without a default value. This is not possible if the table is not empty.
  - Made the column `Autor` on table `Noticias` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `idUsuarioRes` to the `Reservas` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Reservas" DROP CONSTRAINT "Reservas_idRecurso_fkey";

-- DropForeignKey
ALTER TABLE "Reservas" DROP CONSTRAINT "Reservas_idUsuario_fkey";

-- DropForeignKey
ALTER TABLE "Testimonio" DROP CONSTRAINT "Testimonio_idUsuario_fkey";

-- AlterTable
ALTER TABLE "Actividades" ADD COLUMN     "idUsuario" INTEGER NOT NULL,
ALTER COLUMN "Titulo" SET DATA TYPE TEXT,
ALTER COLUMN "Tipo" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Blog" ADD COLUMN     "idUsuario" INTEGER NOT NULL,
ALTER COLUMN "Titulo" SET DATA TYPE TEXT,
ALTER COLUMN "Categoria" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Eventos" DROP COLUMN "FechadeFin",
DROP COLUMN "FechadeInicio",
ADD COLUMN     "FechaFin" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "FechaInicio" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "idUsuario" INTEGER NOT NULL,
ALTER COLUMN "Titulo" SET DATA TYPE TEXT,
ALTER COLUMN "Categoria" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Noticias" ADD COLUMN     "idUsuario" INTEGER NOT NULL,
ALTER COLUMN "Titulo" SET DATA TYPE TEXT,
ALTER COLUMN "Categoria" SET DATA TYPE TEXT,
ALTER COLUMN "Autor" SET NOT NULL,
ALTER COLUMN "Autor" SET DATA TYPE TEXT,
ALTER COLUMN "Imagen" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Persona" DROP COLUMN "Historial_acad",
DROP COLUMN "Seg_Nombre",
ADD COLUMN     "Sep_Nombre" TEXT,
ADD COLUMN     "idCarrera" INTEGER,
ALTER COLUMN "Nombre" SET DATA TYPE TEXT,
ALTER COLUMN "Tercer_Nombre" SET DATA TYPE TEXT,
ALTER COLUMN "Apellido_Paterno" SET DATA TYPE TEXT,
ALTER COLUMN "Apellido_Materno" SET DATA TYPE TEXT,
ALTER COLUMN "Correo" SET DATA TYPE TEXT,
ALTER COLUMN "Telefono" DROP NOT NULL,
ALTER COLUMN "Telefono" SET DATA TYPE TEXT,
ALTER COLUMN "Direccion" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Reservas" DROP COLUMN "idUsuario",
ADD COLUMN     "idUsuarioRes" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Usuario" DROP COLUMN "Rol",
ALTER COLUMN "Nombre_usuario" SET DATA TYPE TEXT,
ALTER COLUMN "Contrasenia" SET DATA TYPE TEXT;

-- DropTable
DROP TABLE "Admi_beca";

-- DropTable
DROP TABLE "Bolsa_de_trabajo";

-- DropTable
DROP TABLE "Carreras";

-- DropTable
DROP TABLE "Preguntas_frecuentes";

-- DropTable
DROP TABLE "Recursos_academicos";

-- DropTable
DROP TABLE "Testimonio";

-- CreateTable
CREATE TABLE "BolsaTrabajo" (
    "idBolsa" SERIAL NOT NULL,
    "Titulo" TEXT NOT NULL,
    "Descripcion" TEXT NOT NULL,
    "Fecha_publicacion" TIMESTAMP(3) NOT NULL,
    "Fecha_expiracion" TIMESTAMP(3) NOT NULL,
    "idUsuario" INTEGER NOT NULL,

    CONSTRAINT "BolsaTrabajo_pkey" PRIMARY KEY ("idBolsa")
);

-- CreateTable
CREATE TABLE "Roles" (
    "idRol" SERIAL NOT NULL,
    "Nombre" TEXT NOT NULL,
    "descripcionRol" TEXT,

    CONSTRAINT "Roles_pkey" PRIMARY KEY ("idRol")
);

-- CreateTable
CREATE TABLE "UsuarioRol" (
    "idUsuarioRol" SERIAL NOT NULL,
    "idRol" INTEGER NOT NULL,
    "idUsuario" INTEGER NOT NULL,

    CONSTRAINT "UsuarioRol_pkey" PRIMARY KEY ("idUsuarioRol")
);

-- CreateTable
CREATE TABLE "Permisos" (
    "idPermiso" SERIAL NOT NULL,
    "idModulo" INTEGER NOT NULL,
    "idUsuarioRol" INTEGER NOT NULL,
    "Crear" BOOLEAN NOT NULL,
    "Actualizar" BOOLEAN NOT NULL,
    "Eliminar" BOOLEAN NOT NULL,
    "Leer" BOOLEAN NOT NULL,
    "Reportes" BOOLEAN NOT NULL,

    CONSTRAINT "Permisos_pkey" PRIMARY KEY ("idPermiso")
);

-- CreateTable
CREATE TABLE "Modulo" (
    "idModulo" SERIAL NOT NULL,
    "Nombre" TEXT NOT NULL,
    "Descripcion" TEXT NOT NULL,
    "Activo" BOOLEAN NOT NULL,

    CONSTRAINT "Modulo_pkey" PRIMARY KEY ("idModulo")
);

-- CreateTable
CREATE TABLE "RecursosAcademicos" (
    "idRecurso" SERIAL NOT NULL,
    "idUsuario" INTEGER NOT NULL,
    "Titulo" TEXT NOT NULL,
    "Autor" TEXT NOT NULL,
    "Tipo" TEXT NOT NULL,
    "Categoria" TEXT NOT NULL,
    "Portada" TEXT,
    "Archivo" TEXT NOT NULL,

    CONSTRAINT "RecursosAcademicos_pkey" PRIMARY KEY ("idRecurso")
);

-- CreateTable
CREATE TABLE "AdmiBeca" (
    "idAdmiBeca" SERIAL NOT NULL,
    "Nombre" TEXT NOT NULL,
    "Descripcion" TEXT NOT NULL,
    "Requisitos" TEXT NOT NULL,
    "idCarrera" INTEGER NOT NULL,

    CONSTRAINT "AdmiBeca_pkey" PRIMARY KEY ("idAdmiBeca")
);

-- CreateTable
CREATE TABLE "BeneficiariosBeca" (
    "idBeneficiario" SERIAL NOT NULL,
    "idAdmiBeca" INTEGER NOT NULL,
    "idPersona" INTEGER NOT NULL,

    CONSTRAINT "BeneficiariosBeca_pkey" PRIMARY KEY ("idBeneficiario")
);

-- CreateTable
CREATE TABLE "Carrera" (
    "idCarrera" SERIAL NOT NULL,
    "Nombre" TEXT NOT NULL,
    "Descripcion" TEXT NOT NULL,
    "Perfil_egresado" TEXT NOT NULL,
    "Oportunidades_prof" TEXT NOT NULL,

    CONSTRAINT "Carrera_pkey" PRIMARY KEY ("idCarrera")
);

-- CreateTable
CREATE TABLE "HistorialAcademico" (
    "idHistorial" SERIAL NOT NULL,
    "Fecha_inicio" TIMESTAMP(3) NOT NULL,
    "Fecha_fin" TIMESTAMP(3) NOT NULL,
    "Estado" TEXT NOT NULL,
    "idCarrera" INTEGER NOT NULL,
    "idPersona" INTEGER NOT NULL,

    CONSTRAINT "HistorialAcademico_pkey" PRIMARY KEY ("idHistorial")
);

-- CreateIndex
CREATE UNIQUE INDEX "Roles_Nombre_key" ON "Roles"("Nombre");

-- CreateIndex
CREATE UNIQUE INDEX "Persona_Correo_key" ON "Persona"("Correo");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_idPersona_key" ON "Usuario"("idPersona");

-- AddForeignKey
ALTER TABLE "Persona" ADD CONSTRAINT "Persona_idCarrera_fkey" FOREIGN KEY ("idCarrera") REFERENCES "Carrera"("idCarrera") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Noticias" ADD CONSTRAINT "Noticias_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuario"("idUsuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Blog" ADD CONSTRAINT "Blog_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuario"("idUsuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BolsaTrabajo" ADD CONSTRAINT "BolsaTrabajo_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuario"("idUsuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsuarioRol" ADD CONSTRAINT "UsuarioRol_idRol_fkey" FOREIGN KEY ("idRol") REFERENCES "Roles"("idRol") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsuarioRol" ADD CONSTRAINT "UsuarioRol_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuario"("idUsuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Permisos" ADD CONSTRAINT "Permisos_idModulo_fkey" FOREIGN KEY ("idModulo") REFERENCES "Modulo"("idModulo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Permisos" ADD CONSTRAINT "Permisos_idUsuarioRol_fkey" FOREIGN KEY ("idUsuarioRol") REFERENCES "UsuarioRol"("idUsuarioRol") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Eventos" ADD CONSTRAINT "Eventos_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuario"("idUsuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecursosAcademicos" ADD CONSTRAINT "RecursosAcademicos_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuario"("idUsuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservas" ADD CONSTRAINT "Reservas_idUsuarioRes_fkey" FOREIGN KEY ("idUsuarioRes") REFERENCES "Usuario"("idUsuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservas" ADD CONSTRAINT "Reservas_idRecurso_fkey" FOREIGN KEY ("idRecurso") REFERENCES "RecursosAcademicos"("idRecurso") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Actividades" ADD CONSTRAINT "Actividades_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuario"("idUsuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AdmiBeca" ADD CONSTRAINT "AdmiBeca_idCarrera_fkey" FOREIGN KEY ("idCarrera") REFERENCES "Carrera"("idCarrera") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BeneficiariosBeca" ADD CONSTRAINT "BeneficiariosBeca_idAdmiBeca_fkey" FOREIGN KEY ("idAdmiBeca") REFERENCES "AdmiBeca"("idAdmiBeca") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BeneficiariosBeca" ADD CONSTRAINT "BeneficiariosBeca_idPersona_fkey" FOREIGN KEY ("idPersona") REFERENCES "Persona"("idPersona") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HistorialAcademico" ADD CONSTRAINT "HistorialAcademico_idCarrera_fkey" FOREIGN KEY ("idCarrera") REFERENCES "Carrera"("idCarrera") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HistorialAcademico" ADD CONSTRAINT "HistorialAcademico_idPersona_fkey" FOREIGN KEY ("idPersona") REFERENCES "Persona"("idPersona") ON DELETE RESTRICT ON UPDATE CASCADE;
