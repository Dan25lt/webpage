<?php
include '../../config/database_config.php';

$return_data = array();

$query = "SELECT * FROM operaciones";

$result = $con->query($query);

if ($result->num_rows > 0) {
    // output data of each row
    while ($row = $result->fetch_assoc()) {
        $rowObj = new stdClass();
        $rowObj->idoperaciones = $row['idoperaciones'];
        $rowObj->descripcion = $row['descripcion'];
        array_push($return_data, $rowObj);
    }

    echo json_encode($return_data);
} else {
    echo 'no hay operaciones';
}
