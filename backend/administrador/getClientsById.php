<?php
    include '../../config/database_config.php'; 

    $_post = json_decode(file_get_contents('php://input'),true);
    $id = $_post['id'];


    $return_data = array();
    
    $query = "SELECT clie.idcliente, clie.nombre, clie.apellido, clie.rfc, clie.telefono, clie.email, 
    clie.iddireccion, dir.calle, dir.numeroext, dir.numeroint, dir.colonia, dir.idarea_postal 
    FROM cliente clie JOIN direccion dir ON clie.iddireccion = dir.iddireccion
    WHERE idcliente = $id";

    $result = $con->query($query);

    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {

            $rowObj = new stdClass();

            $rowObj->idcliente = $row['idcliente'];
            $rowObj->nombre = $row['nombre'];
            $rowObj->apellido = $row['apellido'];
            $rowObj->rfc = $row['rfc'];
            $rowObj->telefono = $row['telefono'];
            $rowObj->email = $row['email'];

            $rowObj->iddireccion = $row['iddireccion'];
            $rowObj->calle = $row['calle'];
            $rowObj->numeroext = $row['numeroext'];
            $rowObj->numeroint = $row['numeroint'];
            $rowObj->colonia = $row['colonia'];
            $rowObj->idarea_postal = $row['idarea_postal'];

            array_push($return_data, $rowObj);
        }

        echo json_encode($return_data);

    } else {
        echo 'no hay clientes'; 
    }

?>