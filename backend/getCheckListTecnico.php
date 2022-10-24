<?php
    include '../config/database_config.php'; 

    $return_data = array();

    $_post = json_decode(file_get_contents('php://input'),true);

    $orderNo = $_post['orderNo'];

    $query = "SELECT check_list_tecnico
        FROM odendeservicio o 
        WHERE idordenDeServicio = $orderNo";

    $result = $con->query($query);

    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
            $rowObj = new stdClass();
            $rowObj->check_list_tecnico = $row['check_list_tecnico'];

            array_push($return_data, $rowObj);
        }

        echo json_encode($return_data);

    } else {
        echo 'la orden de servicio no tiene filas'; 
    }

?>