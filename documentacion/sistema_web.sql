-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: sistema_web
-- ------------------------------------------------------
-- Server version	8.0.29

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
-- Table structure for table `area_postal`
--

DROP TABLE IF EXISTS `area_postal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `area_postal` (
  `idarea_postal` int NOT NULL AUTO_INCREMENT,
  `ciudad` varchar(45) DEFAULT NULL,
  `estado` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idarea_postal`)
) ENGINE=InnoDB AUTO_INCREMENT=31051 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `area_postal`
--

LOCK TABLES `area_postal` WRITE;
/*!40000 ALTER TABLE `area_postal` DISABLE KEYS */;
INSERT INTO `area_postal` VALUES (31050,'Chihuahua','Chihuahua');
/*!40000 ALTER TABLE `area_postal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cliente`
--

DROP TABLE IF EXISTS `cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cliente` (
  `idcliente` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `apellido` varchar(45) DEFAULT NULL,
  `rfc` varchar(45) DEFAULT NULL,
  `telefono` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `iddireccion` int NOT NULL,
  PRIMARY KEY (`idcliente`,`iddireccion`),
  KEY `iddireccion_idx` (`iddireccion`),
  CONSTRAINT `iddireccion` FOREIGN KEY (`iddireccion`) REFERENCES `direccion` (`iddireccion`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cliente`
--

LOCK TABLES `cliente` WRITE;
/*!40000 ALTER TABLE `cliente` DISABLE KEYS */;
INSERT INTO `cliente` VALUES (1,'Juan','Granados','juas885566sdf','6145623595','juang@gmail.com',1),(2,'karla','sepulveda','seka235689lkj','6145697812','ka@gmail.com',1),(3,'Carlos','Luna','piar124578ghj','6148235689','lucar@gmail.com',2);
/*!40000 ALTER TABLE `cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `direccion`
--

DROP TABLE IF EXISTS `direccion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `direccion` (
  `iddireccion` int NOT NULL AUTO_INCREMENT,
  `calle` varchar(45) DEFAULT NULL,
  `numeroint` varchar(45) DEFAULT NULL,
  `numeroext` varchar(45) DEFAULT NULL,
  `colonia` varchar(45) DEFAULT NULL,
  `idarea_postal` int NOT NULL,
  PRIMARY KEY (`iddireccion`,`idarea_postal`),
  KEY `idarea_postal_idx` (`idarea_postal`),
  CONSTRAINT `idarea_postal` FOREIGN KEY (`idarea_postal`) REFERENCES `area_postal` (`idarea_postal`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `direccion`
--

LOCK TABLES `direccion` WRITE;
/*!40000 ALTER TABLE `direccion` DISABLE KEYS */;
INSERT INTO `direccion` VALUES (1,'Ochoa','1','4214','Dale',31050),(2,'Octava',NULL,'4809','Santa Rosa',31050);
/*!40000 ALTER TABLE `direccion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `empleado`
--

DROP TABLE IF EXISTS `empleado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `empleado` (
  `idempleado` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(45) DEFAULT NULL,
  `contraseña` varchar(45) DEFAULT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `apellido` varchar(45) DEFAULT NULL,
  `puesto` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idempleado`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empleado`
--

LOCK TABLES `empleado` WRITE;
/*!40000 ALTER TABLE `empleado` DISABLE KEYS */;
INSERT INTO `empleado` VALUES (1,'Administrador','1357LOCK','Daniel','Piñon','Administrador');
/*!40000 ALTER TABLE `empleado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `marca`
--

DROP TABLE IF EXISTS `marca`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `marca` (
  `idmarca` int NOT NULL AUTO_INCREMENT,
  `marca` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idmarca`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `marca`
--

LOCK TABLES `marca` WRITE;
/*!40000 ALTER TABLE `marca` DISABLE KEYS */;
INSERT INTO `marca` VALUES (1,'Dodge'),(2,'Chrysler'),(3,'Fiat');
/*!40000 ALTER TABLE `marca` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `modelo`
--

DROP TABLE IF EXISTS `modelo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `modelo` (
  `idmodelo` int NOT NULL AUTO_INCREMENT,
  `modelo` varchar(45) DEFAULT NULL,
  `idmarca` int NOT NULL,
  PRIMARY KEY (`idmodelo`,`idmarca`),
  KEY `idmarca_idx` (`idmarca`),
  CONSTRAINT `idmarca` FOREIGN KEY (`idmarca`) REFERENCES `marca` (`idmarca`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `modelo`
--

LOCK TABLES `modelo` WRITE;
/*!40000 ALTER TABLE `modelo` DISABLE KEYS */;
INSERT INTO `modelo` VALUES (1,'Charger',1),(2,'200C',2),(3,'Pulse',3);
/*!40000 ALTER TABLE `modelo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `odendeservicio`
--

DROP TABLE IF EXISTS `odendeservicio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `odendeservicio` (
  `idordenDeServicio` int NOT NULL AUTO_INCREMENT,
  `fechaEntrada` datetime DEFAULT NULL,
  `fechaSalida` datetime DEFAULT NULL,
  `idvehiculos` int NOT NULL,
  `idempleado` int NOT NULL,
  `estatus` varchar(45) DEFAULT NULL,
  `alertas` varchar(45) DEFAULT NULL,
  `notas` varchar(300) DEFAULT NULL,
  `check_list_tecnico` varchar(2000) DEFAULT NULL,
  `check_list_calidad` varchar(2000) DEFAULT NULL,
  `comentarios_tecnicos` varchar(2000) DEFAULT NULL,
  `comentarios_lavado` varchar(2000) DEFAULT NULL,
  `comentarios_calidad` varchar(2000) DEFAULT NULL,
  `operaciones` varchar(2000) DEFAULT NULL,
  `img_url1` varchar(45) DEFAULT NULL,
  `img_url2` varchar(45) DEFAULT NULL,
  `img_url3` varchar(45) DEFAULT NULL,
  `img_url4` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idordenDeServicio`,`idvehiculos`,`idempleado`),
  KEY `idvehiculos_idx` (`idvehiculos`),
  KEY `idempleado_idx` (`idempleado`),
  CONSTRAINT `idempleado` FOREIGN KEY (`idempleado`) REFERENCES `empleado` (`idempleado`),
  CONSTRAINT `idvehiculos` FOREIGN KEY (`idvehiculos`) REFERENCES `vehiculos` (`idvehiculos`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `odendeservicio`
--

LOCK TABLES `odendeservicio` WRITE;
/*!40000 ALTER TABLE `odendeservicio` DISABLE KEYS */;
INSERT INTO `odendeservicio` VALUES (1,'2022-09-22 00:00:00','2022-10-22 00:00:00',1,1,'en espera',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'1,2,3,4',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `odendeservicio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `operaciones`
--

DROP TABLE IF EXISTS `operaciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `operaciones` (
  `idoperaciones` int NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idoperaciones`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `operaciones`
--

LOCK TABLES `operaciones` WRITE;
/*!40000 ALTER TABLE `operaciones` DISABLE KEYS */;
INSERT INTO `operaciones` VALUES (1,'Cambio de aceite'),(2,'Rotacion'),(3,'Balanceo'),(4,'Alineacion'),(5,'Limpieza de inyectores');
/*!40000 ALTER TABLE `operaciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vehiculos`
--

DROP TABLE IF EXISTS `vehiculos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vehiculos` (
  `idvehiculos` int NOT NULL AUTO_INCREMENT,
  `año` int DEFAULT NULL,
  `vin` varchar(45) DEFAULT NULL,
  `placas` varchar(45) DEFAULT NULL,
  `idmodelo` int NOT NULL,
  `idcliente` int NOT NULL,
  PRIMARY KEY (`idvehiculos`,`idmodelo`,`idcliente`),
  KEY `idmodelo_idx` (`idmodelo`),
  KEY `idcliiente_idx` (`idcliente`),
  CONSTRAINT `idcliiente` FOREIGN KEY (`idcliente`) REFERENCES `cliente` (`idcliente`),
  CONSTRAINT `idmodelo` FOREIGN KEY (`idmodelo`) REFERENCES `modelo` (`idmodelo`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehiculos`
--

LOCK TABLES `vehiculos` WRITE;
/*!40000 ALTER TABLE `vehiculos` DISABLE KEYS */;
INSERT INTO `vehiculos` VALUES (1,2005,'3cdertyuy12348974','EFK3700',1,1),(2,2015,'1dfdfdfdf31513132','Emg8569',2,2),(3,2020,'wedadasd6412314','EZ85654',3,1),(4,2022,'erdfsfsdf13132313','Aj15987',1,3);
/*!40000 ALTER TABLE `vehiculos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-25 15:49:26
