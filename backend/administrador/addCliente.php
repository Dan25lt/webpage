<?php
    include '../../config/database_config.php'; 

    $return_data = array();

    $calle = $_POST['calle'];
    $numeroint = $_POST['numeroint'];
    $numeroext = $_POST['numeroext'];
    $colonia = $_POST['colonia'];
    $idarea_postal = $_POST['idarea_postal'];

    $query = "INSERT INTO direccion  (
        iddireccion, 
        calle, 
        numeroint, 
        numeroext, 
        colonia,
        idarea_postal)
         values (null,
            '$calle',
            '$numeroint',
            '$numeroext',
            '$colonia',
            '$idarea_postal'
            NOW())";

    if ($con->query($query) === TRUE) {
        echo "Registro actualizado";
    } else {
        echo "Error: " . $query . "<br>" . $con->error;
    }

    $query = "SELECT * FROM direccion order by iddireccion desc limit 1";
    $result = $con->query($query);

    if ($result->num_rows > 0) {
        
        while($row = $result->fetch_assoc()) {      
            $iddireccion = $row['iddireccion'];
        }

    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $rfc = $_POST['rfc'];
    $telefono = $_POST['telefono'];
    $query = "INSERT INTO cliente  (
        idcliente, 
        nombre, 
        apellido, 
        rfc, 
        telefono,
        iddireccion,)
         values (null,
            '$nombre',
            '$apellido',
            '$rfc',
            '$telefono',
            '$iddireccion'
            NOW())";

    if ($con->query($query) === TRUE) {
        echo "Registro actualizado";
    } else {
        echo "Error: " . $query . "<br>" . $con->error;
    }

?>