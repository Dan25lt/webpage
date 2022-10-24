<?php
    include '../config/database_config.php'; 

    $return_data = array();
    $_post = json_decode(file_get_contents('php://input'),true);
    $orderNo = $_post['orden_id'];

    $operaciones;

    $query = "SELECT operaciones FROM odendeservicio WHERE idordenDeServicio = $orderNo";

    $result = $con->query($query);

    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
            $operaciones = $row['operaciones'];
        }
    }

    echo implode(', ', $operaciones);

    /* $query = "SELECT * FROM operaciones WHERE id in()";

    $result = $con->query($query);

    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
            $rowObj = new rowObject();
            $rowObj->idordenDeServicio = $row['idordenDeServicio'];
            $rowObj->vin = $row['vin'];
            $rowObj->modelo = $row['modelo'];
            $rowObj->placas = $row['placas'];
            $rowObj->ano = $row['año'];
            $rowObj->fechaEntrada = $row['fechaEntrada'];
            $rowObj->fechaSalida = $row['fechaSalida'];
            $rowObj->estatus = $row['estatus'];
            $rowObj->alertas = $row['alertas'];
            $rowObj->telefono = $row['telefono'];
            $rowObj->rfc = $row['rfc'];
            $rowObj->nombre = $row['nombre'];

            array_push($return_data, $rowObj);
        }

        echo json_encode($return_data);

    } else {
        echo 'no hay ordenes de servicio'; 
    }
 */
?>