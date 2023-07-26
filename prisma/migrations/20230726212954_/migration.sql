/*
  Warnings:

  - You are about to drop the `TypeGame` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "Raffle" ADD COLUMN     "open" BOOLEAN NOT NULL DEFAULT true,
ALTER COLUMN "type" SET DATA TYPE TEXT;

-- DropTable
DROP TABLE "TypeGame";
