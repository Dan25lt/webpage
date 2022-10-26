<?php
    include '../../config/database_config.php'; 

    $return_data = array();
   
    $idcliente = $_POST['idcliente'];   
    $nombre = $_POST['nombre'];
    $apellido  = $_POST['apellido'];
    $rfc  = $_POST['rfc'];
    $telefono  = $_POST['telefono'];
    $email  = $_POST['email'];
    $calle  = $_POST['calle'];
    $numeroint  = $_POST['numeroint'];  
    $numeroext  = $_POST['numeroext'];
    $colonia = $_POST['colonia'];
    $idarea_postal  = $_POST['idarea_postal'];
    $iddireccion = $_POST['iddireccion'];

    $query = "UPDATE cliente 
    SET nombre = '$nombre', apellido = '$apellido', rfc = '$rfc', telefono = '$telefono', email = '$email' 
    WHERE idcliente = '$idcliente'";

    if ($con->query($query) === TRUE) {
    } else {
        echo "Error: " . $query . "<br>" . $con->error;
    }

 $query = "UPDATE direccion 
    SET calle = '$calle', numeroint = '$numeroint', numeroext = '$numeroext', colonia = '$colonia', idarea_postal = '$idarea_postal' 
    WHERE iddireccion = '$iddireccion'";

    if ($con->query($query) === TRUE) {
        echo "Registro actualizado";
    } else {
        echo "Error: " . $query . "<br>" . $con->error;
    }
?>