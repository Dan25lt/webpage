<?php
include '../../config/database_config.php';

$return_data = array();

$idempleado = $_POST['idempleado'];
$usuario = $_POST['usuario'];
$contraseña = $_POST['contraseña'];
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$puest = $_POST['puest'];

$query = "INSERT INTO empleado  (
         idempleado, 
         usuario,
         contraseña, 
         nombre, 
         apellido, 
         puesto)
         values (null,
            '$idempleado',    
            '$usuario',   
            '$contraseña',    
            '$nombre',    
            '$apellido',    
            '$puesto' 
            NOW())";

if ($con->query($query) === TRUE) {
    echo "Registro actualizado";
} else {
    echo "Error: " . $query . "<br>" . $con->error;
}
