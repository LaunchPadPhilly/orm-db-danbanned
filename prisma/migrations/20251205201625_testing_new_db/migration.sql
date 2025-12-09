/*
  Warnings:

  - You are about to drop the column `animation` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `featured` on the `Project` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "animation",
DROP COLUMN "featured",
ALTER COLUMN "imageUrl" SET DATA TYPE TEXT,
ALTER COLUMN "projectUrl" SET DATA TYPE TEXT,
ALTER COLUMN "githubUrl" SET DATA TYPE TEXT;
