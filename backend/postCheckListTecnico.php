<?php
    include '../config/database_config.php'; 

    $return_data = array();

    $_post = json_decode(file_get_contents('php://input'),true);

    $orderNo = $_post['orderNo'];
    $data = $_post['data'];
    $data = htmlspecialchars_decode($data, ENT_COMPAT);

    $query = "UPDATE odendeservicio SET check_list_tecnico = '$data' WHERE idordenDeServicio = $orderNo";

    if ($con->query($query) === TRUE) {
        echo "Registro actualizado";
    } else {
        echo "Error: " . $query . "<br>" . $con->error;
    }

?>