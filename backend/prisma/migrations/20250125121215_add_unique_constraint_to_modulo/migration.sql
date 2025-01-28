/*
  Warnings:

  - A unique constraint covering the columns `[Nombre]` on the table `Modulo` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Modulo_Nombre_key" ON "Modulo"("Nombre");
