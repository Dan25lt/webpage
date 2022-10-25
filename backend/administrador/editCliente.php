<?php
    include '../../config/database_config.php'; 

    $return_data = array();
    $idcliente = $_POST['idcliente'];
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $rfc = $_POST['rfc'];
    $iddireccion =  $_POST['iddireccion'];

    $query = "UPDATE cliente 
    SET nombre = '$nombre', apellido = '$apellido',rfc = '$rfc',iddireccion = '$iddireccion' 
    WHERE idcliente = $idcliente";

    if ($con->query($query) === TRUE) {
        echo "Registro actualizado";
    } else {
        echo "Error: " . $query . "<br>" . $con->error;
    }

?>