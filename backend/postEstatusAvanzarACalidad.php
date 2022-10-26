<?php
    include '../config/database_config.php'; 

    $return_data = array();

    $_post = json_decode(file_get_contents('php://input'),true);

    $orderNo = $_post['orderNo'];

    $query = "UPDATE odendeservicio SET estatus = 'En inspeccion de calidad' WHERE idordenDeServicio = $orderNo";

    if ($con->query($query) === TRUE) {
        echo "Registro actualizado";
    } else {
        echo "Error: " . $query . "<br>" . $con->error;
    }

?>