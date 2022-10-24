<?php
    include '../config/database_config.php'; 

    $return_data = array();
    $_post = json_decode(file_get_contents('php://input'),true);
    $orderNo = $_post['orden_id'];

    $operaciones;

    // buscar el id de las operaciones de esa orden de servicio
    $query = "SELECT operaciones FROM odendeservicio WHERE idordenDeServicio = $orderNo";

    $result = $con->query($query);

    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
            $operaciones = $row['operaciones'];
        }
    }

    // buscar el nombre de cada operacion en la tabla operaciones
    $query = "SELECT * FROM operaciones WHERE idoperaciones in ($operaciones)";

    $result = $con->query($query);

    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
            $rowObj = new stdClass();
            $rowObj->descripcion = $row['descripcion'];

            array_push($return_data, $rowObj);
        }

        echo json_encode($return_data);

    } else {
        echo 'la orden de servicio no tiene operaciones'; 
    }
?>