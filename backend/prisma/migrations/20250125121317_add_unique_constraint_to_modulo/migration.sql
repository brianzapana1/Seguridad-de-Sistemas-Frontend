/*
  Warnings:

  - You are about to drop the column `Sep_Nombre` on the `Persona` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Persona" DROP COLUMN "Sep_Nombre",
ADD COLUMN     "Seg_Nombre" TEXT;
