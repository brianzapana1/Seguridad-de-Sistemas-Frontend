/*
  Warnings:

  - A unique constraint covering the columns `[Nombre_usuario]` on the table `Usuario` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Usuario_Nombre_usuario_key" ON "Usuario"("Nombre_usuario");
