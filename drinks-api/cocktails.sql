-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Apr 01, 2024 at 02:19 AM
-- Server version: 5.7.39
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cocktail`
--

-- --------------------------------------------------------

--
-- Table structure for table `cocktails`
--

CREATE TABLE `cocktails` (
  `id` int(15) NOT NULL,
  `name` varchar(150) NOT NULL,
  `time` int(15) NOT NULL,
  `ingredients` varchar(1500) NOT NULL,
  `garnish` varchar(150) DEFAULT NULL,
  `instruction` varchar(1500) NOT NULL,
  `glassType` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cocktails`
--

INSERT INTO `cocktails` (`id`, `name`, `time`, `ingredients`, `garnish`, `instruction`, `glassType`) VALUES
(1, 'Margarita', 10, 'Tequila, Triple sec, Lime juice', 'Salt', 'Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.', 'Cocktail glass'),
(2, 'Espresso martini', 10, 'Vodka, Vodka, Sugar syrup', 'Coffee liqueur', 'Pour ingredients into shaker filled with ice, shake vigorously, and strain into chilled martini glass.', 'Cocktail glass'),
(3, 'Mojito', 5, 'Light rum, Lime, Sugar, Soda water', 'Mint', 'Muddle mint leaves with sugar and lime juice. Add a splash of soda water and fill the glass with cracked ice. Pour the rum and top with soda water. Garnish and serve with straw.', 'Highball glass'),
(4, 'Piña colada', 5, 'Light rum, Coconut milk', 'Pineapple', 'Mix with crushed ice in blender until smooth. Pour into chilled glass, garnish and serve.', 'Collins glass'),
(5, 'Sex on the beach', 5, 'Vodka, Peach schnapps, Cranberry juice, Orange juice', 'Cherries and orange slices', 'Combine vodka with peach schnapps and cranberry juice to make a classic sex on the beach cocktail. Garnish with cocktail cherries and orange slices.', 'Highball glass'),
(6, 'Passion fruit martini', 5, 'Vodka, Sugar syrup, Passion fruit juice', 'Passion fruit piece', 'This easy passion fruit cocktail is bursting with zingy flavours and is perfect for celebrating with friends. Top with prosecco for a special drink.', 'Cocktail glass'),
(7, 'Old fashioned', 5, 'Bourbon, Angostura bitters, Sugar, Water', 'Orange twist and a cocktail cherry', 'Place sugar cube in old fashioned glass and saturate with bitters, add a dash of plain water. Muddle until dissolved. Fill the glass with ice cubes and add whiskey. Garnish with orange twist, and a cocktail cherry.', 'Old-fashioned glass'),
(8, 'Cosmopolitan', 5, 'Vodka, Cointreau, Cranberry juice', 'lime wheel', 'Add all ingredients into cocktail shaker filled with ice. Shake well and double strain into large cocktail glass. Garnish with lime wheel.', 'Cocktail glass'),
(9, 'Negroni', 5, 'Gin, Campari, Sweet Vermouth', 'Orange slice', 'To make the perfect classic negroni cocktail all you need is balance: use equal parts gin, vermouth and Campari, and choose the best products you have in reach.', 'Old-fashioned glass'),
(10, 'Strawberry daiquiri', 10, 'Strawberry schnapps, Lgiht rum, Lime juice, Powdered sugar', 'Strawberries', 'This slushy cocktail is best made when strawberries are in season. With just four ingredients you can whip up this frozen strawberry daiquiri in 10 minutes.', 'Cocktail glass');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cocktails`
--
ALTER TABLE `cocktails`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cocktails`
--
ALTER TABLE `cocktails`
  MODIFY `id` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
