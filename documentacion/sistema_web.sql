--
-- Table structure for table `area_postal`
--

CREATE TABLE `area_postal` (
  `idarea_postal` int NOT NULL AUTO_INCREMENT,
  `ciudad` varchar(45) DEFAULT NULL,
  `estado` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idarea_postal`)
) ENGINE=InnoDB;

--
-- Dumping data for table `area_postal`
--

LOCK TABLES `area_postal` WRITE;

INSERT INTO `area_postal` VALUES (31050,'Chihuahua','Chihuahua');

UNLOCK TABLES;

--
-- Table structure for table `direccion`
--

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
) ENGINE=InnoDB;

--
-- Dumping data for table `direccion`
--

LOCK TABLES `direccion` WRITE;
INSERT INTO `direccion` VALUES (1,'Ochoa','1','4214','Dale',31050),(2,'Octava',NULL,'4809','Santa Rosa',31050);
UNLOCK TABLES;


--
-- Table structure for table `cliente`
--

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
) ENGINE=InnoDB;

--
-- Dumping data for table `cliente`
--

LOCK TABLES `cliente` WRITE;
INSERT INTO `cliente` VALUES (1,'Juan','Granados','juas885566sdf','6145623595','juang@gmail.com',1),(2,'karla','sepulveda','seka235689lkj','6145697812','ka@gmail.com',1),(3,'Carlos','Luna','piar124578ghj','6148235689','lucar@gmail.com',2);
UNLOCK TABLES;


--
-- Table structure for table `empleado`
--

CREATE TABLE `empleado` (
  `idempleado` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(45) DEFAULT NULL,
  `contraseña` varchar(45) DEFAULT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `apellido` varchar(45) DEFAULT NULL,
  `puesto` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idempleado`)
) ENGINE=InnoDB;

--
-- Dumping data for table `empleado`
--

LOCK TABLES `empleado` WRITE;
INSERT INTO `empleado` VALUES (1,'Administrador','1357LOCK','Daniel','Piñon','Administrador');
UNLOCK TABLES;

--
-- Table structure for table `marca`
--

CREATE TABLE `marca` (
  `idmarca` int NOT NULL AUTO_INCREMENT,
  `marca` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idmarca`)
) ENGINE=InnoDB;


--
-- Dumping data for table `marca`
--

LOCK TABLES `marca` WRITE;
INSERT INTO `marca` VALUES (1,'Dodge'),(2,'Chrysler'),(3,'Fiat');
UNLOCK TABLES;

--
-- Table structure for table `modelo`
--

CREATE TABLE `modelo` (
  `idmodelo` int NOT NULL AUTO_INCREMENT,
  `modelo` varchar(45) DEFAULT NULL,
  `idmarca` int NOT NULL,
  PRIMARY KEY (`idmodelo`,`idmarca`),
  KEY `idmarca_idx` (`idmarca`),
  CONSTRAINT `idmarca` FOREIGN KEY (`idmarca`) REFERENCES `marca` (`idmarca`)
) ENGINE=InnoDB;

--
-- Dumping data for table `modelo`
--

LOCK TABLES `modelo` WRITE;
INSERT INTO `modelo` VALUES (1,'Charger',1),(2,'200C',2),(3,'Pulse',3);
UNLOCK TABLES;

--
-- Table structure for table `vehiculos`
--

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
) ENGINE=InnoDB;

--
-- Dumping data for table `vehiculos`
--

LOCK TABLES `vehiculos` WRITE;
INSERT INTO `vehiculos` VALUES (1,2005,'3cdertyuy12348974','EFK3700',1,1),(2,2015,'1dfdfdfdf31513132','Emg8569',2,2),(3,2020,'wedadasd6412314','EZ85654',3,1),(4,2022,'erdfsfsdf13132313','Aj15987',1,3);
UNLOCK TABLES;


--
-- Table structure for table `operaciones`
--

CREATE TABLE `operaciones` (
  `idoperaciones` int NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idoperaciones`)
) ENGINE=InnoDB;

--
-- Dumping data for table `operaciones`
--

LOCK TABLES `operaciones` WRITE;
INSERT INTO `operaciones` VALUES (1,'Cambio de aceite'),(2,'Rotacion'),(3,'Balanceo'),(4,'Alineacion'),(5,'Limpieza de inyectores');
UNLOCK TABLES;


--
-- Table structure for table `odendeservicio`
--

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
) ENGINE=InnoDB;


-- Dump completed on 2022-10-25 15:49:26
