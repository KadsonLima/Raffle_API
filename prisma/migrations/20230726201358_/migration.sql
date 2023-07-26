/*
  Warnings:

  - You are about to drop the column `managerId` on the `Raffle` table. All the data in the column will be lost.
  - You are about to drop the `Manager` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userId` to the `Raffle` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Raffle" DROP CONSTRAINT "Raffle_managerId_fkey";

-- AlterTable
ALTER TABLE "Raffle" DROP COLUMN "managerId",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "email" TEXT NOT NULL DEFAULT E'',
ADD COLUMN     "manager" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "password" TEXT NOT NULL DEFAULT E'';

-- DropTable
DROP TABLE "Manager";

-- AddForeignKey
ALTER TABLE "Raffle" ADD CONSTRAINT "Raffle_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
