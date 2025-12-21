/*
  Warnings:

  - You are about to drop the column `createdAt` on the `GiftCard` table. All the data in the column will be lost.
  - You are about to drop the column `sellerId` on the `GiftCard` table. All the data in the column will be lost.
  - You are about to drop the `Escrow` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Order` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Escrow" DROP CONSTRAINT "Escrow_orderId_fkey";

-- DropForeignKey
ALTER TABLE "GiftCard" DROP CONSTRAINT "GiftCard_sellerId_fkey";

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_buyerId_fkey";

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_giftCardId_fkey";

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_sellerId_fkey";

-- AlterTable
ALTER TABLE "GiftCard" DROP COLUMN "createdAt",
DROP COLUMN "sellerId";

-- DropTable
DROP TABLE "Escrow";

-- DropTable
DROP TABLE "Order";

-- DropTable
DROP TABLE "User";

-- DropEnum
DROP TYPE "EscrowStatus";

-- DropEnum
DROP TYPE "OrderStatus";
