/*
  Warnings:

  - You are about to alter the column `imageUrl` on the `Project` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `projectUrl` on the `Project` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `githubUrl` on the `Project` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.

*/
-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "animation" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "featured" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "imageUrl" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "projectUrl" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "githubUrl" SET DATA TYPE VARCHAR(255);
