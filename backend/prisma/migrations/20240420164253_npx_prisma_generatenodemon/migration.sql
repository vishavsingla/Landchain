/*
  Warnings:

  - The primary key for the `TransferLand` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `transferId` on the `TransferLand` table. All the data in the column will be lost.
  - The required column `id` was added to the `TransferLand` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "TransferLand" DROP CONSTRAINT "TransferLand_pkey",
DROP COLUMN "transferId",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "TransferLand_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "LandCase" (
    "id" TEXT NOT NULL,
    "caseStatus" TEXT NOT NULL,
    "caseDescription" TEXT NOT NULL,
    "caseDate" TIMESTAMP(3) NOT NULL,
    "transferLandId" TEXT NOT NULL,

    CONSTRAINT "LandCase_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "LandCase" ADD CONSTRAINT "LandCase_transferLandId_fkey" FOREIGN KEY ("transferLandId") REFERENCES "TransferLand"("id") ON DELETE CASCADE ON UPDATE CASCADE;
