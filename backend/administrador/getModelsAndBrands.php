<?php
    include '../../config/database_config.php';

    $marcasArr = array();
    $modelosArr = array();

    // Get Marcas
    $query = "SELECT * FROM marca";
    $result = $con->query($query);
    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {

            $rowObj = new stdClass();

            $rowObj->idmarca = $row['idmarca'];
            $rowObj->marca = $row['marca'];
            array_push($marcasArr, $rowObj);
        }
    } else {
        echo 'error no hay marcas'; 
    }

    // Get Modelos
    $query = "SELECT * FROM modelo";
    $result = $con->query($query);
    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {

            $rowObj = new stdClass();

            $rowObj->idmodelo = $row['idmodelo'];
            $rowObj->modelo = $row['modelo'];
            $rowObj->idmarca = $row['idmarca'];
            array_push($modelosArr, $rowObj);
        }
    } else {
        echo 'error no hay modelos'; 
    }

    $return_data_obj = new stdClass();
    $return_data_obj->marcas = $marcasArr;
    $return_data_obj->modelos = $modelosArr;

    echo json_encode($return_data_obj);
?>