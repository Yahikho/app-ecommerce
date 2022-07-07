-- CreateTable
CREATE TABLE `VerifyEmail` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `code_verify` INTEGER NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `token` VARCHAR(191) NOT NULL,
    `validated` BOOLEAN NOT NULL DEFAULT false,
    `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `VerifyEmail_code_verify_key`(`code_verify`),
    UNIQUE INDEX `VerifyEmail_email_key`(`email`),
    UNIQUE INDEX `VerifyEmail_token_key`(`token`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
