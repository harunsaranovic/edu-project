CREATE DATABASE  IF NOT EXISTS `edu_project` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_swedish_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `edu_project`;
-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: localhost    Database: edu_project
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `answer`
--

DROP TABLE IF EXISTS `answer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `answer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `text` varchar(300) COLLATE utf8_swedish_ci DEFAULT NULL,
  `question_id` int DEFAULT NULL,
  `correct` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8 COLLATE=utf8_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `answer`
--

LOCK TABLES `answer` WRITE;
/*!40000 ALTER TABLE `answer` DISABLE KEYS */;
INSERT INTO `answer` VALUES (1,'Answer A',1,1),(2,'Answer B',1,0),(3,'Answer C',1,0),(4,'Answer D',1,0),(5,'Answer A',2,1),(6,'Answer B',2,0),(7,'Answer C',2,0),(8,'Answer D',2,0),(9,'Answer A',3,1),(10,'Answer B',3,0),(11,'Answer C',3,0),(12,'Answer D',3,0),(13,'Answer A',4,1),(14,'Answer B',4,0),(15,'Answer C',4,0),(16,'Answer D',4,0),(17,'Answer A',5,1),(18,'Answer B',5,0),(19,'Answer C',5,0),(20,'Answer D',5,0),(21,'Answer A',6,1),(22,'Answer B',6,0),(23,'Answer C',6,0),(24,'Answer D',6,0),(25,'Answer A',7,1),(26,'Answer B',7,0),(27,'Answer C',7,0),(28,'Answer D',7,0),(29,'Answer A',8,1),(30,'Answer B',8,0),(31,'Answer C',8,0),(32,'Answer D',8,0);
/*!40000 ALTER TABLE `answer` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-10-19 14:18:55
