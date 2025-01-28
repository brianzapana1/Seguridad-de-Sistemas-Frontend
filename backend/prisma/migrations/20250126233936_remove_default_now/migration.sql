-- AlterTable
ALTER TABLE "Historico_Passwords" ALTER COLUMN "Fecha_cambio" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Logs_Acceso_Modulo" ALTER COLUMN "Fecha_acceso" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Logs_Acciones" ALTER COLUMN "Fecha" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Logs_Eliminados" ALTER COLUMN "Fecha" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Logs_Intentos_Login" ALTER COLUMN "Fecha_intento" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Logs_Passwords" ALTER COLUMN "Fecha_cambio" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Logs_Permissions" ALTER COLUMN "Fecha" DROP DEFAULT;
