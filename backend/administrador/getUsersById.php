<?php
include '../../config/database_config.php';
$_post = json_decode(file_get_contents('php://input'), true);
$id = $_post['id'];


$return_data = array();

$query = "SELECT * FROM empleado
    WHERE idempleado = $id";

$result = $con->query($query);

if ($result->num_rows > 0) {
    // output data of each row
    
    while ($row = $result->fetch_assoc()) {

        $rowObj = new stdClass();
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