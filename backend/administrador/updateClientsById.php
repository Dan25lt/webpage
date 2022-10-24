<?php
    include '../../config/database_config.php'; 

    $return_data = array();
   
    $idcliente = $_POST['idcliente'];   
    $nombre = $_POST['nombre'];
    $apellido  = $_POST['apellido'];
    $rfc  = $_POST['rfc'];
    $telefono  = $_POST['telefono'];
    $email  = $_POST['email'];
    $calle  = $_POST['calle'];
    $numeroint  = $_POST['numeroint'];  
    $numeroext  = $_POST['numeroext'];
    $colonia = $_POST['colonia'];
    $idarea_postal  = $_POST['idarea_postal'];


    $query = "UPDATE alumnos 
    SET nombre = '$nombre', apellido_paterno = '$apellido_paterno', apellido_materno = '$apellido_materno', fecha_nacimiento = '$fecha_nacimiento', curp = '$curp', estado = '$estado', grado = '$grado', telefono = '$telefono', email = '$email'
    WHERE idalumnos = '$idalumnos'";

    if ($con->query($query) === TRUE) {
        echo "Registro actualizado";
    } else {
        echo "Error: " . $query . "<br>" . $con->error;
    }

?>