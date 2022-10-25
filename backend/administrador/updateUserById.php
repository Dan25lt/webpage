<?php
include '../../config/database_config.php';

$return_data = array();

$rowObj->idempleado = $row['idempleado'];
$rowObj->usuario = $row['usuario'];
$rowObj->contraseña = $row['contraseña'];
$rowObj->nombre = $row['nombre'];
$rowObj->apellido = $row['apellido'];
$rowObj->puesto = $row['puesto'];


$query = "UPDATE empleado 
    SET usuario = '$usuario', contraseña = '$contraseña', nombre = '$nombre', apellido = '$apellido', puesto = '$puesto' 
    WHERE idempleado = '$idempleado'";

if ($con->query($query) === TRUE) {
    echo "Registro actualizado";
} else {
    echo "Error: " . $query . "<br>" . $con->error;
}
?>