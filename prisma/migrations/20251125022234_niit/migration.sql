/*
  Warnings:

  - You are about to drop the column `first_name` on the `Author` table. All the data in the column will be lost.
  - You are about to drop the column `last_name` on the `Author` table. All the data in the column will be lost.
  - You are about to drop the `_BookGenres` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `full_name` to the `Author` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_BookGenres` DROP FOREIGN KEY `_BookGenres_A_fkey`;

-- DropForeignKey
ALTER TABLE `_BookGenres` DROP FOREIGN KEY `_BookGenres_B_fkey`;

-- AlterTable
ALTER TABLE `Author` DROP COLUMN `first_name`,
    DROP COLUMN `last_name`,
    ADD COLUMN `full_name` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `_BookGenres`;

-- CreateTable
CREATE TABLE `GenreOnBook` (
    `bookId` INTEGER NOT NULL,
    `genreId` INTEGER NOT NULL,

    PRIMARY KEY (`bookId`, `genreId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `GenreOnBook` ADD CONSTRAINT `GenreOnBook_bookId_fkey` FOREIGN KEY (`bookId`) REFERENCES `Book`(`book_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GenreOnBook` ADD CONSTRAINT `GenreOnBook_genreId_fkey` FOREIGN KEY (`genreId`) REFERENCES `Genre`(`Genre_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
