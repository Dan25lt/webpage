<?php
    include '../../config/database_config.php';

    $return_data = array();
    $_post = json_decode(file_get_contents('php://input'),true);
    $id_operacion = $_post['id_operacion'];
    
    $query = "SELECT idoperaciones, descripcion 
    FROM operaciones WHERE idoperaciones = $id_operacion";

    $result = $con->query($query);

    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
            $rowObj = new stdClass();
            $rowObj->idoperaciones = $row['idoperaciones'];
            $rowObj->descripcion = $row['descripcion'];

            array_push($return_data, $rowObj);
        }

        echo json_encode($return_data);

    } else {
        echo 'No existe una operacion con ese id'; 
    }

?>