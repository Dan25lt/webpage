<?php
    include '../config/database_config.php'; 

    $return_data = array();

    $calle = $_POST['calle'];
    $numeroint = $_POST['numeroint'];
    $numeroext = $_POST['numeroext'];
    $idarea_postal = $_POST['idarea_postal'];

    $query = "INSERT INTO direccion  (
        iddireccion, 
        calle, 
        numeroint, 
        numeroext, 
        idarea_postal)
         values (null,
            '$calle',
            '$numeroint',
            '$numeroext',
            '$idarea_postal',
            NOW())";

    if ($con->query($query) === TRUE) {
        echo "Registro actualizado";
    } else {
        echo "Error: " . $query . "<br>" . $con->error;
    }

    $query = "SELECT * FROM direccion order by iddireccion desc limit 1";
    $result = $con->query($query);

    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {      
            $iddireccion = $row['iddireccion'];
        }

    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $rfc = $_POST['rfc'];
    $query = "INSERT INTO cliente  (
        idcliente, 
        nombre, 
        apellido, 
        rfc, 
        iddireccion,)
         values (null,
            '$nombre',
            '$apellido_paterno',
            '$apellido_materno',
            '$iddireccion',
            NOW())";

    if ($con->query($query) === TRUE) {
        echo "Registro actualizado";
    } else {
        echo "Error: " . $query . "<br>" . $con->error;
    }

?>