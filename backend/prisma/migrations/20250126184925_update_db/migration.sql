/*
  Warnings:

  - You are about to drop the `Historico_Passwords` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Logs_Acceso_Modulo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Logs_Acciones` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Logs_Eliminados` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Logs_Intentos_Login` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Logs_Passwords` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Logs_Permissions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Logs_Sistema` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Historico_Passwords";

-- DropTable
DROP TABLE "Logs_Acceso_Modulo";

-- DropTable
DROP TABLE "Logs_Acciones";

-- DropTable
DROP TABLE "Logs_Eliminados";

-- DropTable
DROP TABLE "Logs_Intentos_Login";

-- DropTable
DROP TABLE "Logs_Passwords";

-- DropTable
DROP TABLE "Logs_Permissions";

-- DropTable
DROP TABLE "Logs_Sistema";

-- CreateTable
CREATE TABLE "Usuario" (
    "idUsuario" SERIAL NOT NULL,
    "idPersona" INTEGER NOT NULL,
    "Nombre_usuario" TEXT NOT NULL,
    "Contrasenia" TEXT NOT NULL,
    "Bloqueado" BOOLEAN NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("idUsuario")
);

-- CreateTable
CREATE TABLE "Persona" (
    "idPersona" SERIAL NOT NULL,
    "Nombre" TEXT NOT NULL,
    "Tercer_Nombre" TEXT,
    "Apellido_Paterno" TEXT NOT NULL,
    "Apellido_Materno" TEXT NOT NULL,
    "Correo" TEXT NOT NULL,
    "Telefono" TEXT,
    "Direccion" TEXT,
    "idCarrera" INTEGER,
    "Seg_Nombre" TEXT,

    CONSTRAINT "Persona_pkey" PRIMARY KEY ("idPersona")
);

-- CreateTable
CREATE TABLE "Noticias" (
    "idNoticia" SERIAL NOT NULL,
    "Titulo" TEXT NOT NULL,
    "Contenido" TEXT NOT NULL,
    "Fecha_publicacion" TIMESTAMP(3) NOT NULL,
    "Categoria" TEXT NOT NULL,
    "Autor" TEXT NOT NULL,
    "Imagen" TEXT,
    "idUsuario" INTEGER NOT NULL,

    CONSTRAINT "Noticias_pkey" PRIMARY KEY ("idNoticia")
);

-- CreateTable
CREATE TABLE "Blog" (
    "idBlog" SERIAL NOT NULL,
    "Titulo" TEXT NOT NULL,
    "Contenido" TEXT NOT NULL,
    "Fecha_publicacion" TIMESTAMP(3) NOT NULL,
    "Categoria" TEXT NOT NULL,
    "idUsuario" INTEGER NOT NULL,

    CONSTRAINT "Blog_pkey" PRIMARY KEY ("idBlog")
);

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
CREATE TABLE "Eventos" (
    "idEvento" SERIAL NOT NULL,
    "Titulo" TEXT NOT NULL,
    "Descripcion" TEXT NOT NULL,
    "Categoria" TEXT NOT NULL,
    "FechaFin" TIMESTAMP(3) NOT NULL,
    "FechaInicio" TIMESTAMP(3) NOT NULL,
    "idUsuario" INTEGER NOT NULL,

    CONSTRAINT "Eventos_pkey" PRIMARY KEY ("idEvento")
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
CREATE TABLE "Reservas" (
    "idReserva" SERIAL NOT NULL,
    "idRecurso" INTEGER NOT NULL,
    "Fecha_reserva" TIMESTAMP(3) NOT NULL,
    "idUsuarioRes" INTEGER NOT NULL,

    CONSTRAINT "Reservas_pkey" PRIMARY KEY ("idReserva")
);

-- CreateTable
CREATE TABLE "Actividades" (
    "idActividad" SERIAL NOT NULL,
    "Titulo" TEXT NOT NULL,
    "Descripcion" TEXT NOT NULL,
    "Fecha_inicio" TIMESTAMP(3) NOT NULL,
    "Fecha_fin" TIMESTAMP(3) NOT NULL,
    "Tipo" TEXT NOT NULL,
    "idUsuario" INTEGER NOT NULL,

    CONSTRAINT "Actividades_pkey" PRIMARY KEY ("idActividad")
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
CREATE UNIQUE INDEX "Usuario_idPersona_key" ON "Usuario"("idPersona");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_Nombre_usuario_key" ON "Usuario"("Nombre_usuario");

-- CreateIndex
CREATE UNIQUE INDEX "Persona_Correo_key" ON "Persona"("Correo");

-- CreateIndex
CREATE UNIQUE INDEX "Roles_Nombre_key" ON "Roles"("Nombre");

-- CreateIndex
CREATE UNIQUE INDEX "Modulo_Nombre_key" ON "Modulo"("Nombre");

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_idPersona_fkey" FOREIGN KEY ("idPersona") REFERENCES "Persona"("idPersona") ON DELETE RESTRICT ON UPDATE CASCADE;

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
ALTER TABLE "Reservas" ADD CONSTRAINT "Reservas_idRecurso_fkey" FOREIGN KEY ("idRecurso") REFERENCES "RecursosAcademicos"("idRecurso") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservas" ADD CONSTRAINT "Reservas_idUsuarioRes_fkey" FOREIGN KEY ("idUsuarioRes") REFERENCES "Usuario"("idUsuario") ON DELETE RESTRICT ON UPDATE CASCADE;

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
