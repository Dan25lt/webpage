<?php
    include '../config/database_config.php'; 

    $return_data = array();

    $_post = json_decode(file_get_contents('php://input'),true);

    $orderNo = $_post['orderNo'];
    $comentarios = "";

    $query = "SELECT notas
        FROM odendeservicio o 
        WHERE idordenDeServicio = $orderNo";

    $result = $con->query($query);

    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
            $comentarios = $row['notas'];
        }

        echo $comentarios;

    } else {
        echo 'la orden de servicio ' + $orderNo + ' no tiene filas'; 
    }

?>