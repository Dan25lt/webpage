<?php
    include '../config/database_config.php'; 

    $return_data = array();

    $_post = json_decode(file_get_contents('php://input'),true);

    $orderNo = $_post['orderNo'];
    $imgId = $_post['imgId'];

    if ($imgId == 1) {
        $columna_a_editar = 'img_url1';
    } else if ($imgId == 2) {
        $columna_a_editar = 'img_url2';
    } else if ($imgId == 3) {
        $columna_a_editar = 'img_url3';
    } else if ($imgId == 4) {
        $columna_a_editar = 'img_url4';
    }

    $query = "UPDATE odendeservicio SET $columna_a_editar = '' WHERE idordenDeServicio = $orderNo";

    if ($con->query($query) === TRUE) {
        echo "Registro actualizado";
    } else {
        echo "Error: " . $query . "<br>" . $con->error;
    }

?>