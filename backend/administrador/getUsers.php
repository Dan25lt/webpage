<?php
include '../../config/database_config.php';

$return_data = array();

class rowObject
{
    public $idempleado;
}
$query = "SELECT * FROM empleado";

$result = $con->query($query);

if ($result->num_rows > 0) {
    // output data of each row
    while ($row = $result->fetch_assoc()) {
        $rowObj = new rowObject();
        $rowObj->idempleado = $row['idempleado'];
        $rowObj->usuario = $row['usuario'];
        $rowObj->contrasena = $row['contraseña'];
        $rowObj->nombre = $row['nombre'];
        $rowObj->apellido = $row['apellido'];
        $rowObj->puesto = $row['puesto'];
        array_push($return_data, $rowObj);
    }

    echo json_encode($return_data);
     
} else {
    echo 'no hay usuarios';
}
?>