<?php
    include '../../config/database_config.php'; 

    $return_data = array();

    $marca = $_POST['marca'];

    $query = "INSERT INTO marca  (
        idmarca, 
        marca)
         values (null,
            '$marca'
            NOW())";

    if ($con->query($query) === TRUE) {

    } else {
        echo "Error: " . $query . "<br>" . $con->error;
    }

    $modelo = $_POST['modelo'];

    $query = "INSERT INTO marca  (
        idmodelo, 
        modelo)
         values (null,
            '$modelo'
            NOW())";

    if ($con->query($query) === TRUE) {

    } else {
        echo "Error: " . $query . "<br>" . $con->error;
    }

    $año = $_POST['año'];
    $vin = $_POST['vin'];
    $placas = $_POST['placas'];
    $idmodelo = $_POST['idmodelo'];
    $idcliente = $_POST['idcliente'];

    $query = "INSERT INTO vehiculos  (
        idvehiculos, 
        año, 
        vin, 
        placas, 
        idmodelo,
        idcliente)
         values (null,
            '$idvehiculos',
            '$año',
            '$vin',
            '$idmodelo',
            '$idcliente'
            NOW())";

    if ($con->query($query) === TRUE) {
        echo "Registro actualizado";
    } else {
        echo "Error: " . $query . "<br>" . $con->error;
    }

    

?>