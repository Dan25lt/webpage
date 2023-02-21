<?php
include '../../config/database_config.php';

$return_data = array();

$usuario = $_POST['add_usuario'];
$contraseña = $_POST['add_contrasena'];
$nombre = $_POST['add_nombre'];
$apellido = $_POST['add_apellido'];
$puesto = $_POST['add_puesto'];

$query = "SELECT * FROM empleado WHERE usuario = '$usuario' ";

$result = $con->query($query);

if ($result->num_rows > 0) {
    exit("El nombre de usuario usuario ya existe");
}

$query = "INSERT INTO empleado  (
         idempleado, 
         usuario,
         contraseña, 
         nombre, 
         apellido, 
         puesto)
         values (null,    
            '$usuario',   
            '$contraseña',    
            '$nombre',    
            '$apellido',    
            '$puesto')";

if ($con->query($query) === TRUE) {
    echo "Registro insertado";
} else {
    echo "Error: " . $query . "<br>" . $con->error;
}