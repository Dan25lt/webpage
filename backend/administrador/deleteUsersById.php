<?php
    include '../../config/database_config.php'; 

    $return_data = array();

    $_post = json_decode(file_get_contents('php://input'),true);

    $id = $_post['id'];


    $query = "DELETE from empleado WHERE idempleado = $id";

    if ($con->query($query) === TRUE) {
        echo "Registro eliminado";
    } else {
        echo "Error: " . $query . "<br>" . $con->error;
    }

?>