/*
  Warnings:

  - You are about to drop the column `Role` on the `User` table. All the data in the column will be lost.
  - Added the required column `Branch` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Location` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "Branch" TEXT NOT NULL,
ADD COLUMN     "Location" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "Role",
ADD COLUMN     "isAccepted" BOOLEAN NOT NULL DEFAULT false;
