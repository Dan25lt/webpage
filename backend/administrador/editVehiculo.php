<?php
    include '../../config/database_config.php'; 

    $return_data = array();
    $idvehiculos = $_POST['idvehiculos'];
    $año = $_POST['año'];
    $vin = $_POST['vin'];
    $placas = $_POST['placas'];
    $idmodelo = $_POST['idmodelo'];
    $idcliente = $_POST['idcliente'];;

    $query = "UPDATE vehiculos 
    SET año = '$año', vin = '$vin',placas = '$placas',idmodelo = '$idmodelo',idcliente = '$idcliente' 
    WHERE idvehiculos = $idvehiculos";

    if ($con->query($query) === TRUE) {
        echo "Registro actualizado";
    } else {
        echo "Error: " . $query . "<br>" . $con->error;
    }

?>