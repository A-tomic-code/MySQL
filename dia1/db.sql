-- MySQL dump 10.13  Distrib 8.0.30, for Linux (x86_64)
--
-- Host: localhost    Database: school
-- ------------------------------------------------------
-- Server version	8.0.30-0ubuntu0.22.04.1

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
-- Table structure for table `groups`
--

DROP TABLE IF EXISTS `groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `groups` (
  `id_` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `groups`
--

LOCK TABLES `groups` WRITE;
/*!40000 ALTER TABLE `groups` DISABLE KEYS */;
INSERT INTO `groups` VALUES (1,'presencial'),(2,'online'),(3,'part-time'),(4,'primavera 2022'),(5,'invierno 2021'),(6,'otoño 2021'),(7,'verano 2021'),(8,'primavera 2021'),(9,'invierno 2021'),(10,'otoño 2020');
/*!40000 ALTER TABLE `groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `marks`
--

DROP TABLE IF EXISTS `marks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `marks` (
  `id_` int NOT NULL AUTO_INCREMENT,
  `student_id` int DEFAULT NULL,
  `subject_id` int DEFAULT NULL,
  `date` date DEFAULT NULL,
  `mark` int DEFAULT NULL,
  PRIMARY KEY (`id_`),
  KEY `fk_marks_student_idx` (`student_id`),
  KEY `fk_marks_subject_idx` (`subject_id`),
  CONSTRAINT `fk_marks_student` FOREIGN KEY (`student_id`) REFERENCES `students` (`id_`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_marks_subject` FOREIGN KEY (`subject_id`) REFERENCES `subjects` (`id_`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `marks`
--

LOCK TABLES `marks` WRITE;
/*!40000 ALTER TABLE `marks` DISABLE KEYS */;
INSERT INTO `marks` VALUES (1,5,3,'2021-10-03',5),(2,2,4,'2022-12-05',5),(3,1,5,'2020-04-07',5),(4,8,6,'2020-06-09',5),(6,3,3,'2020-12-11',5),(7,6,6,'2021-02-20',5),(8,7,4,'2022-03-14',5),(9,5,3,'2020-08-09',5),(10,3,2,'2020-11-25',5);
/*!40000 ALTER TABLE `marks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `students`
--

DROP TABLE IF EXISTS `students`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `students` (
  `id_` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `group_id` int DEFAULT NULL,
  PRIMARY KEY (`id_`),
  KEY `fk_students_group_idx` (`group_id`),
  CONSTRAINT `fk_students_group` FOREIGN KEY (`group_id`) REFERENCES `groups` (`id_`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `students`
--

LOCK TABLES `students` WRITE;
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
INSERT INTO `students` VALUES (1,'daniel','vazquez',9),(2,'karen','uzkaitegui',5),(3,'diego','jimenez',9),(4,'mon','vazquez',6),(5,'pepito','perez',2),(6,'mr','potato',2),(7,'ariel','sirenita',2),(8,'bob','esponja',4),(9,'jack','destripador',2),(10,'bilbo','bolson',1);
/*!40000 ALTER TABLE `students` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subject_teacher`
--

DROP TABLE IF EXISTS `subject_teacher`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subject_teacher` (
  `id_` int NOT NULL AUTO_INCREMENT,
  `subject_id` int DEFAULT NULL,
  `teacher_id` int DEFAULT NULL,
  `group_id` int DEFAULT NULL,
  PRIMARY KEY (`id_`),
  KEY `fk_subject_teacher_teacher_idx` (`teacher_id`),
  KEY `fk_subject_teacher_group_idx` (`group_id`),
  KEY `fk_subject_teacher_subject` (`subject_id`),
  CONSTRAINT `fk_subject_teacher_group` FOREIGN KEY (`group_id`) REFERENCES `groups` (`id_`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_subject_teacher_subject` FOREIGN KEY (`subject_id`) REFERENCES `subjects` (`id_`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_subject_teacher_teacher` FOREIGN KEY (`teacher_id`) REFERENCES `teachers` (`id_`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subject_teacher`
--

LOCK TABLES `subject_teacher` WRITE;
/*!40000 ALTER TABLE `subject_teacher` DISABLE KEYS */;
INSERT INTO `subject_teacher` VALUES (2,9,1,5),(3,4,7,9),(4,4,6,1),(5,1,9,9),(6,9,1,5),(7,9,6,2),(8,8,5,2),(9,7,8,6),(10,9,1,2),(11,6,7,5);
/*!40000 ALTER TABLE `subject_teacher` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subjects`
--

DROP TABLE IF EXISTS `subjects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subjects` (
  `id_` int NOT NULL AUTO_INCREMENT,
  `title` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subjects`
--

LOCK TABLES `subjects` WRITE;
/*!40000 ALTER TABLE `subjects` DISABLE KEYS */;
INSERT INTO `subjects` VALUES (1,'fundamentos'),(2,'angular'),(3,'maquetacion'),(4,'node'),(5,'sql'),(6,'mongo'),(7,'repaso'),(8,'matematicas'),(9,'algoritmos'),(10,'bucles');
/*!40000 ALTER TABLE `subjects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teachers`
--

DROP TABLE IF EXISTS `teachers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teachers` (
  `id_` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teachers`
--

LOCK TABLES `teachers` WRITE;
/*!40000 ALTER TABLE `teachers` DISABLE KEYS */;
INSERT INTO `teachers` VALUES (1,'menchu','martin'),(2,'daniel','vera'),(3,'jose','herrera'),(4,'profe','de maquetacion'),(5,'teacher','angular'),(6,'angel','lopez'),(7,'sergio','sanchez'),(8,'roberto','estevez'),(9,'andres','estevez'),(10,'javier','apelli');
/*!40000 ALTER TABLE `teachers` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-08-16 22:57:36
