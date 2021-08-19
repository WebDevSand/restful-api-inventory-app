-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 06 Sep 2019 pada 11.33
-- Versi server: 10.1.32-MariaDB
-- Versi PHP: 7.2.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_inventory`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `category`
--

CREATE TABLE `category` (
  `idCategory` int(11) NOT NULL,
  `category` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `category`
--

INSERT INTO `category` (`idCategory`, `category`) VALUES
(1, 'daily needs'),
(2, 'Elektronic'),
(3, 'Food & Drink'),
(4, 'automotive');

-- --------------------------------------------------------

--
-- Struktur dari tabel `product`
--

CREATE TABLE `product` (
  `pId` int(11) NOT NULL,
  `pName` varchar(50) NOT NULL,
  `pDesc` text NOT NULL,
  `pImage` varchar(200) NOT NULL,
  `idCategory` int(11) NOT NULL,
  `pQty` varchar(50) NOT NULL,
  `pDateAdded` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `pDateUpdated` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `product`
--

INSERT INTO `product` (`pId`, `pName`, `pDesc`, `pImage`, `idCategory`, `pQty`, `pDateAdded`, `pDateUpdated`) VALUES
(9, 'Casual shirt', 'Wear by all of human in the world', 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Blue_Tshirt.jpg/220px-Blue_Tshirt.jpg', 1, '400', '2019-09-04 07:13:56', '2019-09-04'),
(10, 'Shoes', 'Wear in foot', 'https://scene7.zumiez.com/is/image/zumiez/pdp_hero/Champion-Men-s-Rally-Pro-Black-%26-White-Shoes-_298256.jpg', 1, '750', '2019-09-06 03:08:18', '2019-08-26'),
(11, 'Asus ROG', 'Laptop Gaming 2019', 'https://img-us1.asus.com/A/show/AW000706/2019/0126/AM0000008/201901AM260000008_15487127373610820002557.jpg!t500x500', 2, '100', '2019-09-03 02:53:06', '2019-08-27'),
(12, 'Handphone', 'A gadget for everyone use', 'https://id-test-11.slatic.net/p/bb75b5aa1b95ea16c10b6adc4b35ace2.jpg', 2, '100', '2019-09-02 14:50:33', '0000-00-00'),
(13, 'DVD', 'A tool for play film, music, and other', 'https://azcd.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/d/v/dv350.jpg', 2, '100', '2019-09-02 14:52:42', '0000-00-00'),
(14, 'Car', 'This is Comfortable transportation', 'https://amp.businessinsider.com/images/592f4169b74af41b008b5977-750-563.jpg', 4, '100', '2019-09-02 14:53:40', '0000-00-00'),
(15, 'Motorcycle', 'A fast and eficient transportation', 'https://cdn.shopify.com/s/files/1/2050/2855/products/IMG_8125.JPG?v=1531889262', 4, '100', '2019-09-02 14:54:06', '0000-00-00'),
(16, 'Fried Chicken', 'A delicious food made by chicken animal', 'https://cdn3.tmbi.com/toh/GoogleImages/Southern-Fried-Chicken-with-Gravy_exps33285_THRAA2874593C01_23_1b_RMS.jpg', 3, '100', '2019-09-02 14:54:46', '0000-00-00'),
(17, 'Pizza', 'Pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and various other ingredients baked at a high temperature, traditionally in a wood-fired oven.', 'https://www.kingarthurflour.com/sites/default/files/recipe_legacy/20-3-large.jpg', 3, '100', '2019-09-03 06:50:28', '0000-00-00'),
(18, 'Pizza', 'Pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and various', 'https://www.kingarthurflour.com/sites/default/files/recipe_legacy/20-3-large.jpg', 3, '100', '2019-09-02 14:56:17', '0000-00-00'),
(19, 'Pizza', 'Pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and various', 'https://www.kingarthurflour.com/sites/default/files/recipe_legacy/20-3-large.jpg', 3, '100', '2019-09-02 14:56:21', '0000-00-00'),
(25, 'raka', 'jaja', 'https://img.freepik.com/free-vector/abstract-blue-geometric-shapes-background_1017-15490.jpg?size=626&ext=jpg', 3, '4', '2019-09-03 18:43:18', '2019-09-04'),
(30, 'General Dynamics F-16 Fighting Falcon', 'The General Dynamics F-16 Fighting Falcon is a single-engine supersonic multirole fighter aircraft originally developed by General Dynamics for the United States Air Force. Designed as an air superiority day fighter, it evolved into a successful all-weather multirole aircraft.', 'https://www.lockheedmartin.com/content/dam/lockheed-martin/aero/photo/f16/Masthead2.jpg.pc-adaptive.full.medium.jpeg', 4, '3', '2019-09-04 04:40:34', '2019-09-04'),
(32, 'WSD 42 111K', 'Aframax Tanker for Crude Oil and Dark Petroleum Products', 'https://cdn.wartsila.com/images/default-source/products/ship-design/merchant/tankers/wsd-42-111k.tmb-thumb425.png?sfvrsn=1d5f145_4', 4, '500', '2019-09-04 07:15:59', '2019-09-04'),
(34, 'Bus SHD', 'A big transportation', 'https://cdn2.tstatic.net/tribunnews/foto/bank/images/bus-scania-shd-skyview-coach_20170818_055100.jpg', 4, '760', '2019-09-05 07:27:32', '2019-09-05');

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `idUser` int(11) NOT NULL,
  `fullName` varchar(50) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `dateCreated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `dateUpdated` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`idUser`, `fullName`, `username`, `email`, `password`, `dateCreated`, `dateUpdated`) VALUES
(8, 'Reza Raka Nugraha', 'raka9', 'reza@gmail.com', '7110eda4d09e062aa5e4a390b0a572ac0d2c0220', '2019-08-29 10:19:15', '2019-08-29 03:11:11'),
(9, 'raka', 'rakaaja', 'raka@gmail.com', '7110eda4d09e062aa5e4a390b0a572ac0d2c0220', '2019-08-30 07:11:53', '2019-08-30 07:11:53'),
(10, 'Raka Nugraha', 'rezaraka99', 'raka@gmail.com', 'd5f12e53a182c062b6bf30c1445153faff12269a', '2019-09-04 16:45:08', '2019-09-04 16:45:08'),
(20, 'jaja', 'jajaja', 'jaja@gmail.com', '7110eda4d09e062aa5e4a390b0a572ac0d2c0220', '2019-09-06 02:57:57', '2019-09-06 02:57:57'),
(21, 'raka', 'reza', 'raka@gmail.com', '7110eda4d09e062aa5e4a390b0a572ac0d2c0220', '2019-09-06 04:05:16', '2019-09-06 04:05:16');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`idCategory`);

--
-- Indeks untuk tabel `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`pId`),
  ADD KEY `idCategory` (`idCategory`);

--
-- Indeks untuk tabel `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`idUser`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `product`
--
ALTER TABLE `product`
  MODIFY `pId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT untuk tabel `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `idUser` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
