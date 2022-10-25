<?php
    include '../../config/database_config.php'; 

    $return_data = array();
   
    $idvehiculos = $_POST['idvehiculos'];   
    $ano = $_POST['ano'];
    $vin  = $_POST['vin'];
    $placas  = $_POST['placas'];
    $modelo  = $_POST['modelo'];
    $marca  = $_POST['marca'];
    $idmodelo  = $_POST['idmodelo'];
    $idmarca  = $_POST['idmarca'];
    


    $query = "UPDATE vehiculos 
    SET año = '$ano', vin = '$vin', placas = '$placas'
    WHERE idvehiculos = '$idvehiculos'";
    
    if ($con->query($query) === TRUE) {
    } else {
        echo "Error: " . $query . "<br>" . $con->error;
    }

    $query = "UPDATE modelo 
    SET modelo = '$modelo' 
    WHERE idmodelo = '$idmodelo'";


    if ($con->query($query) === TRUE) {
    } else {
        echo "Error: " . $query . "<br>" . $con->error;
    }

 $query = "UPDATE marca 
    SET marca = '$marca'
    WHERE idmarca = '$idmarca'";
    

    if ($con->query($query) === TRUE) {
        echo "Registro actualizado";
    } else {
        echo "Error: " . $query . "<br>" . $con->error;
    }
?>