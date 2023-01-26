

CREATE TABLE `area_postal` (
  `idarea_postal` int NOT NULL AUTO_INCREMENT,
  `ciudad` varchar(45) DEFAULT NULL,
  `estado` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idarea_postal`)
) ENGINE=InnoDB;



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



CREATE TABLE `empleado` (
  `idempleado` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(45) DEFAULT NULL,
  `contraseña` varchar(45) DEFAULT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `apellido` varchar(45) DEFAULT NULL,
  `puesto` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idempleado`)
) ENGINE=InnoDB;



CREATE TABLE `marca` (
  `idmarca` int NOT NULL AUTO_INCREMENT,
  `marca` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idmarca`)
) ENGINE=InnoDB;




CREATE TABLE `modelo` (
  `idmodelo` int NOT NULL AUTO_INCREMENT,
  `modelo` varchar(45) DEFAULT NULL,
  `idmarca` int NOT NULL,
  PRIMARY KEY (`idmodelo`,`idmarca`),
  KEY `idmarca_idx` (`idmarca`),
  CONSTRAINT `idmarca` FOREIGN KEY (`idmarca`) REFERENCES `marca` (`idmarca`)
) ENGINE=InnoDB;



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



CREATE TABLE `operaciones` (
  `idoperaciones` int NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idoperaciones`)
) ENGINE=InnoDB;





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


