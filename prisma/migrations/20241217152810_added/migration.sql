-- CreateEnum
CREATE TYPE "Completed" AS ENUM ('NO', 'YES');

-- AlterTable
ALTER TABLE "Tasks" ADD COLUMN     "completed" "Completed" NOT NULL DEFAULT 'NO';
