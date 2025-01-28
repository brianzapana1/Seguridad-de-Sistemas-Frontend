/*
  Warnings:

  - Added the required column `Imagen` to the `Noticias` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Noticias" ADD COLUMN     "Autor" VARCHAR(100),
ADD COLUMN     "Imagen" TEXT NOT NULL;
