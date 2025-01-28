/*
  Warnings:

  - You are about to drop the `Actividades` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AdmiBeca` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BeneficiariosBeca` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Blog` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BolsaTrabajo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Carrera` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Eventos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `HistorialAcademico` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Modulo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Noticias` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Permisos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Persona` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RecursosAcademicos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Reservas` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Roles` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Usuario` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UsuarioRol` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Actividades" DROP CONSTRAINT "Actividades_idUsuario_fkey";

-- DropForeignKey
ALTER TABLE "AdmiBeca" DROP CONSTRAINT "AdmiBeca_idCarrera_fkey";

-- DropForeignKey
ALTER TABLE "BeneficiariosBeca" DROP CONSTRAINT "BeneficiariosBeca_idAdmiBeca_fkey";

-- DropForeignKey
ALTER TABLE "BeneficiariosBeca" DROP CONSTRAINT "BeneficiariosBeca_idPersona_fkey";

-- DropForeignKey
ALTER TABLE "Blog" DROP CONSTRAINT "Blog_idUsuario_fkey";

-- DropForeignKey
ALTER TABLE "BolsaTrabajo" DROP CONSTRAINT "BolsaTrabajo_idUsuario_fkey";

-- DropForeignKey
ALTER TABLE "Eventos" DROP CONSTRAINT "Eventos_idUsuario_fkey";

-- DropForeignKey
ALTER TABLE "HistorialAcademico" DROP CONSTRAINT "HistorialAcademico_idCarrera_fkey";

-- DropForeignKey
ALTER TABLE "HistorialAcademico" DROP CONSTRAINT "HistorialAcademico_idPersona_fkey";

-- DropForeignKey
ALTER TABLE "Noticias" DROP CONSTRAINT "Noticias_idUsuario_fkey";

-- DropForeignKey
ALTER TABLE "Permisos" DROP CONSTRAINT "Permisos_idModulo_fkey";

-- DropForeignKey
ALTER TABLE "Permisos" DROP CONSTRAINT "Permisos_idUsuarioRol_fkey";

-- DropForeignKey
ALTER TABLE "Persona" DROP CONSTRAINT "Persona_idCarrera_fkey";

-- DropForeignKey
ALTER TABLE "RecursosAcademicos" DROP CONSTRAINT "RecursosAcademicos_idUsuario_fkey";

-- DropForeignKey
ALTER TABLE "Reservas" DROP CONSTRAINT "Reservas_idRecurso_fkey";

-- DropForeignKey
ALTER TABLE "Reservas" DROP CONSTRAINT "Reservas_idUsuarioRes_fkey";

-- DropForeignKey
ALTER TABLE "Usuario" DROP CONSTRAINT "Usuario_idPersona_fkey";

-- DropForeignKey
ALTER TABLE "UsuarioRol" DROP CONSTRAINT "UsuarioRol_idRol_fkey";

-- DropForeignKey
ALTER TABLE "UsuarioRol" DROP CONSTRAINT "UsuarioRol_idUsuario_fkey";

-- DropTable
DROP TABLE "Actividades";

-- DropTable
DROP TABLE "AdmiBeca";

-- DropTable
DROP TABLE "BeneficiariosBeca";

-- DropTable
DROP TABLE "Blog";

-- DropTable
DROP TABLE "BolsaTrabajo";

-- DropTable
DROP TABLE "Carrera";

-- DropTable
DROP TABLE "Eventos";

-- DropTable
DROP TABLE "HistorialAcademico";

-- DropTable
DROP TABLE "Modulo";

-- DropTable
DROP TABLE "Noticias";

-- DropTable
DROP TABLE "Permisos";

-- DropTable
DROP TABLE "Persona";

-- DropTable
DROP TABLE "RecursosAcademicos";

-- DropTable
DROP TABLE "Reservas";

-- DropTable
DROP TABLE "Roles";

-- DropTable
DROP TABLE "Usuario";

-- DropTable
DROP TABLE "UsuarioRol";

-- CreateTable
CREATE TABLE "Logs_Sistema" (
    "idLog" SERIAL NOT NULL,
    "idUsuario" INTEGER NOT NULL,
    "Tipo_evento" VARCHAR(50) NOT NULL,
    "Descripcion" TEXT,
    "Fecha" TIMESTAMP(3) NOT NULL,
    "ipUsuario" VARCHAR(50) NOT NULL,
    "Nivel" VARCHAR(50) NOT NULL,

    CONSTRAINT "Logs_Sistema_pkey" PRIMARY KEY ("idLog")
);

-- CreateTable
CREATE TABLE "Logs_Acciones" (
    "idLog" SERIAL NOT NULL,
    "idUsuario" INTEGER NOT NULL,
    "Tipo_Accion" VARCHAR(50) NOT NULL,
    "Tabla_Afectada" VARCHAR(100) NOT NULL,
    "Registro_Antiguo" JSONB,
    "Registro_Nuevo" JSONB,
    "Fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Logs_Acciones_pkey" PRIMARY KEY ("idLog")
);

-- CreateTable
CREATE TABLE "Logs_Eliminados" (
    "idLog" SERIAL NOT NULL,
    "idUsuario" INTEGER NOT NULL,
    "Tabla_Afectada" VARCHAR(100) NOT NULL,
    "Registro_Eliminado" JSONB NOT NULL,
    "Fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Motivo" INTEGER NOT NULL,
    "Rollback" BOOLEAN NOT NULL DEFAULT false,
    "Fecha_restauracion" TIMESTAMP(3),

    CONSTRAINT "Logs_Eliminados_pkey" PRIMARY KEY ("idLog")
);

-- CreateTable
CREATE TABLE "Logs_Permissions" (
    "idLog" SERIAL NOT NULL,
    "idAdministrador_mod" INTEGER NOT NULL,
    "idUsuario" INTEGER NOT NULL,
    "idModulo" INTEGER NOT NULL,
    "Permiso" VARCHAR(50) NOT NULL,
    "Estado" BOOLEAN NOT NULL,
    "Fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Logs_Permissions_pkey" PRIMARY KEY ("idLog")
);

-- CreateTable
CREATE TABLE "Logs_Passwords" (
    "idLog" SERIAL NOT NULL,
    "idUsuario" INTEGER NOT NULL,
    "Password_anterior_hash" VARCHAR(255) NOT NULL,
    "Fecha_cambio" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Motivo" VARCHAR(100) NOT NULL,

    CONSTRAINT "Logs_Passwords_pkey" PRIMARY KEY ("idLog")
);

-- CreateTable
CREATE TABLE "Historico_Passwords" (
    "idHistorico" SERIAL NOT NULL,
    "idUsuario" INTEGER NOT NULL,
    "Password_hash" VARCHAR(255) NOT NULL,
    "Fecha_cambio" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Motivo" VARCHAR(100) NOT NULL,

    CONSTRAINT "Historico_Passwords_pkey" PRIMARY KEY ("idHistorico")
);

-- CreateTable
CREATE TABLE "Logs_Intentos_Login" (
    "idIntento" SERIAL NOT NULL,
    "idUsuario" INTEGER NOT NULL,
    "ipUsuario" VARCHAR(50) NOT NULL,
    "Fecha_intento" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Exitoso" BOOLEAN NOT NULL,
    "Motivo_fallo" VARCHAR(255),
    "Numero_intento" INTEGER NOT NULL,

    CONSTRAINT "Logs_Intentos_Login_pkey" PRIMARY KEY ("idIntento")
);

-- CreateTable
CREATE TABLE "Logs_Acceso_Modulo" (
    "idLog" SERIAL NOT NULL,
    "idUsuario" INTEGER NOT NULL,
    "Modulo" VARCHAR(50) NOT NULL,
    "Accion" VARCHAR(50) NOT NULL,
    "Fecha_acceso" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Logs_Acceso_Modulo_pkey" PRIMARY KEY ("idLog")
);
