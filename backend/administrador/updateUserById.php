<?php

    include '../../config/database_config.php';

    $return_data = array();

    $idempleado = $_POST['idempleado'];
    $usuario = $_POST['usuario'];
    $contrasena = $_POST['contrasena'];
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $puesto = $_POST['puesto'];


    $query = "UPDATE empleado 
        SET usuario = '$usuario', contraseña = '$contrasena', nombre = '$nombre', apellido = '$apellido', puesto = '$puesto' 
        WHERE idempleado = '$idempleado'";

    if ($con->query($query) === TRUE) {
        echo "Registro actualizado";
    } else {
        echo "Error: " . $query . "<br>" . $con->error;
    }
    
?>