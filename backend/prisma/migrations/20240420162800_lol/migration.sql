-- AlterTable
ALTER TABLE "Land" ADD COLUMN     "boughtPrice" TEXT,
ADD COLUMN     "currentPrice" TEXT;

-- CreateTable
CREATE TABLE "TransferLand" (
    "transferId" TEXT NOT NULL,
    "prevOwnerId" TEXT NOT NULL,
    "currentOwnerId" TEXT NOT NULL,
    "landId" TEXT NOT NULL,
    "landStatus" TEXT NOT NULL,
    "transferDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "transferPrice" TEXT NOT NULL DEFAULT '0',

    CONSTRAINT "TransferLand_pkey" PRIMARY KEY ("transferId")
);

-- AddForeignKey
ALTER TABLE "Land" ADD CONSTRAINT "Land_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransferLand" ADD CONSTRAINT "TransferLand_prevOwnerId_fkey" FOREIGN KEY ("prevOwnerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransferLand" ADD CONSTRAINT "TransferLand_currentOwnerId_fkey" FOREIGN KEY ("currentOwnerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransferLand" ADD CONSTRAINT "TransferLand_landId_fkey" FOREIGN KEY ("landId") REFERENCES "Land"("id") ON DELETE CASCADE ON UPDATE CASCADE;
