-- CreateTable
CREATE TABLE "Producto" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "description" TEXT,

    CONSTRAINT "Producto_pkey" PRIMARY KEY ("id")
);
