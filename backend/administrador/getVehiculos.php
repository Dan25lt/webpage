<?php
include '../../config/database_config.php';

$return_data = array();

class rowObject
{
    public $idordenDeServicio;
}

$query = "SELECT v.idvehiculos, 
    v.año,
    v.vin,
    v.placas,
    m.modelo,
    ma.marca
    FROM vehiculos v 
    JOIN modelo m ON v.idmodelo = m.idmodelo
    JOIN marca ma ON m.idmarca =  ma.idmarca";

$result = $con->query($query);

if ($result->num_rows > 0) {
    // output data of each row
    while ($row = $result->fetch_assoc()) {
        $rowObj = new rowObject();
        $rowObj->idvehiculos = $row['idvehiculos'];
        $rowObj->ano = $row['año'];
        $rowObj->vin = $row['vin'];
        $rowObj->placas = $row['placas'];
        $rowObj->modelo = $row['modelo'];
        $rowObj->marca = $row['marca'];
        array_push($return_data, $rowObj);
    }

    echo json_encode($return_data);
} else {
    echo 'no hay clientes';
}
