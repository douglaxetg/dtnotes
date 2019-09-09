-- MySQL dump 10.16  Distrib 10.1.38-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: dtnotes
-- ------------------------------------------------------
-- Server version	10.1.38-MariaDB-0+deb9u1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `notes`
--

DROP TABLE IF EXISTS `notes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `notes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(160) NOT NULL,
  `content` mediumtext NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notes`
--

LOCK TABLES `notes` WRITE;
/*!40000 ALTER TABLE `notes` DISABLE KEYS */;
INSERT INTO `notes` VALUES (1,'bluetooth comunication','#apt-get install python-bluetooth\n#!/usr/bin/python\nimport bluetooth\ndevices_list = bluetooth.discover_devices(lookup_names = True)\nprint (\"Device List\")\nfor addr, name in devices_list:\n	print (\"%s - %s\" % (addr, name)','2019-09-05 20:06:54'),(2,'connect with mysql database','const mysql = require(\"mysql\");\nlet connection = mysql.createConnection({\n  host: \"myhost\",\n  user: \"username\",\n  password: \"pass\",\n  database: \"databasename\"\n});\n\nconnection.connect(function(err) {\n  if (err) throw err;\n});\n\nmodule.exports = connection;','2019-09-05 20:06:54'),(3,'installation','npx create-react-app projectname','2019-09-05 20:06:54'),(4,'html color code page','https://www.rapidtables.com/web/color/html-color-codes.html','2019-09-05 20:06:54'),(5,'wifi relay with ESP8266','visit http://soloelectronicos.com/2016/11/03/rele-de-wifi-con-esp8266/','2019-09-05 20:06:54'),(6,'metallic gradients with gimp','https://gimpchat.com/viewtopic.php?f=23&t=4097','2019-09-05 20:06:54'),(7,'file upload with Multer in Node.js and Expres','https://code.tutsplus.com/tutorials/file-upload-with-multer-in-node--cms-32088','2019-09-05 20:06:54'),(8,'file with in Node.js and Express','https://code.tutsplus.com/tutorials/file-upload-with-multer-in-node--cms-32088','2019-09-05 20:15:01');
/*!40000 ALTER TABLE `notes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-09-07 15:02:41
