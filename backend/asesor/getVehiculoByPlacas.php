<?php
    include '../../config/database_config.php';

    $return_data = array();
    $_post = json_decode(file_get_contents('php://input'),true);
    $placas = $_post['placas'];
    
    $query = "SELECT v.idvehiculos, v.año, v.vin, v.placas, m.idmodelo, m.modelo, ma.marca, c.idcliente, c.nombre, c.apellido, c.rfc, c.telefono, c.email, d.iddireccion, d.calle, d.numeroint, d.numeroext, d.idarea_postal
    FROM vehiculos v
    JOIN cliente c ON v.idcliente = c.idcliente
    JOIN direccion d ON c.iddireccion = d.iddireccion
    JOIN modelo m ON v.idmodelo = m.idmodelo
    JOIN marca ma ON m.idmarca = ma.idmarca
    WHERE v.placas = '$placas'";

    $result = $con->query($query);

    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
            $rowObj = new stdClass();
            $rowObj->idvehiculos = $row['idvehiculos'];
            $rowObj->ano = $row['año'];
            $rowObj->vin = $row['vin'];
            $rowObj->placas = $row['placas'];
            $rowObj->idmodelo = $row['idmodelo'];
            $rowObj->modelo = $row['modelo'];
            $rowObj->marca = $row['marca'];
            $rowObj->idcliente = $row['idcliente'];
            $rowObj->nombre = $row['nombre'];
            $rowObj->apellido = $row['apellido'];
            $rowObj->rfc = $row['rfc'];
            $rowObj->telefono = $row['telefono'];
            $rowObj->email = $row['email'];
            $rowObj->iddireccion = $row['iddireccion'];
            $rowObj->calle = $row['calle'];
            $rowObj->numeroint = $row['numeroint'];
            $rowObj->numeroext = $row['numeroext'];
            $rowObj->idarea_postal = $row['idarea_postal'];

            array_push($return_data, $rowObj);
        }

        echo json_encode($return_data);

    } else {
        echo 'No existe un vehiculo con esas placas'; 
    }

?>