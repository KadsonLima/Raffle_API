/*
  Warnings:

  - You are about to alter the column `title` on the `Raffle` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `description` on the `Raffle` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - Added the required column `maxTicket` to the `Raffle` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Raffle" ADD COLUMN     "maxTicket" INTEGER NOT NULL,
ALTER COLUMN "title" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "description" SET DATA TYPE VARCHAR(255);

-- CreateTable
CREATE TABLE "TypeGame" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "TypeGame_pkey" PRIMARY KEY ("id")
);
