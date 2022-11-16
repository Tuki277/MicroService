-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: db:3306
-- Thời gian đã tạo: Th10 03, 2022 lúc 03:56 AM
-- Phiên bản máy phục vụ: 8.0.30
-- Phiên bản PHP: 8.0.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `Shop`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `Category`
--

CREATE TABLE `Category` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `Category`
--

INSERT INTO `Category` (`id`, `name`) VALUES
(3, 'category 1 update'),
(4, 'category 1'),
(5, 'category 1'),
(6, 'category 1');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `Code`
--

CREATE TABLE `Code` (
  `id` int NOT NULL,
  `code` varchar(255) NOT NULL,
  `discount` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `FeedBack`
--

CREATE TABLE `FeedBack` (
  `id` int NOT NULL,
  `firstname` varchar(30) DEFAULT NULL,
  `lastname` varchar(30) DEFAULT NULL,
  `email` varchar(250) DEFAULT NULL,
  `phone_number` varchar(20) DEFAULT NULL,
  `subject_name` varchar(350) DEFAULT NULL,
  `note` varchar(1000) DEFAULT NULL,
  `status` int DEFAULT '0',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `Gallery`
--

CREATE TABLE `Gallery` (
  `id` int NOT NULL,
  `productIdId` int DEFAULT NULL,
  `thumbnail` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `Orders`
--

CREATE TABLE `Orders` (
  `id` int NOT NULL,
  `user_id` int DEFAULT NULL,
  `fullname` varchar(50) DEFAULT NULL,
  `email` varchar(150) DEFAULT NULL,
  `phone_number` varchar(20) DEFAULT NULL,
  `address` varchar(200) DEFAULT NULL,
  `note` varchar(1000) DEFAULT NULL,
  `order_date` datetime DEFAULT NULL,
  `status` int DEFAULT NULL,
  `total_money` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `Order_Details`
--

CREATE TABLE `Order_Details` (
  `id` int NOT NULL,
  `order_id` int DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  `price` int DEFAULT NULL,
  `num` int DEFAULT NULL,
  `total_money` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `Product`
--

CREATE TABLE `Product` (
  `id` int NOT NULL,
  `price` int NOT NULL,
  `discount` int NOT NULL,
  `categoryIdId` int DEFAULT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `Product`
--

INSERT INTO `Product` (`id`, `price`, `discount`, `categoryIdId`, `title`, `description`, `created_at`, `updated_at`) VALUES
(9, 1000, 0, 3, 'product 1', 'des 1', '2022-10-25 07:52:23.603830', '2022-10-25 07:52:23.603830');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `Role`
--

CREATE TABLE `Role` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `Role`
--

INSERT INTO `Role` (`id`, `name`) VALUES
(1, 'admin'),
(2, 'user'),
(3, 'manager');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `Tokens`
--

CREATE TABLE `Tokens` (
  `id` int NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `user_id` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `User`
--

CREATE TABLE `User` (
  `id` int NOT NULL,
  `roleIdId` int DEFAULT NULL,
  `fullname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone_number` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `Category`
--
ALTER TABLE `Category`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `Code`
--
ALTER TABLE `Code`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `FeedBack`
--
ALTER TABLE `FeedBack`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `Gallery`
--
ALTER TABLE `Gallery`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_4862e766e84aef1dab540b7f373` (`productIdId`);

--
-- Chỉ mục cho bảng `Orders`
--
ALTER TABLE `Orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Chỉ mục cho bảng `Order_Details`
--
ALTER TABLE `Order_Details`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `order_id` (`order_id`);

--
-- Chỉ mục cho bảng `Product`
--
ALTER TABLE `Product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_225fe410605e918104446f2daf8` (`categoryIdId`);

--
-- Chỉ mục cho bảng `Role`
--
ALTER TABLE `Role`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `Tokens`
--
ALTER TABLE `Tokens`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_6f0fe120ad42e40aa6a51a6e0a8` (`roleIdId`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `Category`
--
ALTER TABLE `Category`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `Code`
--
ALTER TABLE `Code`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `FeedBack`
--
ALTER TABLE `FeedBack`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `Gallery`
--
ALTER TABLE `Gallery`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `Orders`
--
ALTER TABLE `Orders`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `Order_Details`
--
ALTER TABLE `Order_Details`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `Product`
--
ALTER TABLE `Product`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT cho bảng `Role`
--
ALTER TABLE `Role`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `Tokens`
--
ALTER TABLE `Tokens`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `User`
--
ALTER TABLE `User`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `Gallery`
--
ALTER TABLE `Gallery`
  ADD CONSTRAINT `FK_4862e766e84aef1dab540b7f373` FOREIGN KEY (`productIdId`) REFERENCES `Product` (`id`);

--
-- Các ràng buộc cho bảng `Orders`
--
ALTER TABLE `Orders`
  ADD CONSTRAINT `Orders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `User` (`id`);

--
-- Các ràng buộc cho bảng `Order_Details`
--
ALTER TABLE `Order_Details`
  ADD CONSTRAINT `Order_Details_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `Product` (`id`),
  ADD CONSTRAINT `Order_Details_ibfk_2` FOREIGN KEY (`order_id`) REFERENCES `Orders` (`id`);

--
-- Các ràng buộc cho bảng `Product`
--
ALTER TABLE `Product`
  ADD CONSTRAINT `FK_225fe410605e918104446f2daf8` FOREIGN KEY (`categoryIdId`) REFERENCES `Category` (`id`);

--
-- Các ràng buộc cho bảng `User`
--
ALTER TABLE `User`
  ADD CONSTRAINT `FK_6f0fe120ad42e40aa6a51a6e0a8` FOREIGN KEY (`roleIdId`) REFERENCES `Role` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
