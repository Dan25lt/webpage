<?php
    include '../../config/database_config.php'; 

    $return_data = array();
   

    $ano = $_POST['add_ano'];   
    $vin = $_POST['add_vin'];
    $placas  = $_POST['add_placas'];
    $id_modelo  = $_POST['add_id_modelo'];
    $id_cliente  = $_POST['add_id_cliente'];


    $query = "INSERT INTO vehiculos (idvehiculos, año, vin, placas, idmodelo, idcliente) 
    VALUES (null, '$ano', '$vin', '$placas', '$id_modelo', $id_cliente)";

    if ($con->query($query) === TRUE) {
        echo "Registro insertado";
    } else {
        echo "Error: " . $query . "<br>" . $con->error;
    }

?>