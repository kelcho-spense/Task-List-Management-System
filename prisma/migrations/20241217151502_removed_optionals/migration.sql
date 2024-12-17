/*
  Warnings:

  - Made the column `category_id` on table `Lists` required. This step will fail if there are existing NULL values in that column.
  - Made the column `category_id` on table `Tasks` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Lists" DROP CONSTRAINT "Lists_category_id_fkey";

-- DropForeignKey
ALTER TABLE "Tasks" DROP CONSTRAINT "Tasks_category_id_fkey";

-- AlterTable
ALTER TABLE "Lists" ALTER COLUMN "category_id" SET NOT NULL;

-- AlterTable
ALTER TABLE "Tasks" ALTER COLUMN "category_id" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Lists" ADD CONSTRAINT "Lists_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tasks" ADD CONSTRAINT "Tasks_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
