<?php
    include '../../config/database_config.php'; 

    $return_data = array();

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