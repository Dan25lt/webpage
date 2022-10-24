<?php
    include '../config/database_config.php'; 

    $return_data = array();

    $_post = json_decode(file_get_contents('php://input'),true);

    $orderNo = $_post['orderNo'];


    $query = "SELECT o.idordenDeServicio,
        v.vin,
        m.modelo,
        v.placas,
        o.fechaEntrada,
        o.fechaSalida,
        o.estatus,
        o.alertas,
        c.telefono,
        c.rfc,
        c.nombre
    FROM odendeservicio o
    LEFT JOIN vehiculos v
    ON o.idvehiculos = v.idvehiculos
    LEFT JOIN modelo m
    ON v.idmodelo = m.idmodelo
    LEFT JOIN cliente c
    ON v.idcliente = c.idcliente
    WHERE o.idordenDeServicio = $orderNo";

    $result = $con->query($query);

    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
            $rowObj = new rowObject();
            $rowObj->idordenDeServicio = $row['idordenDeServicio'];
            $rowObj->vin = $row['vin'];
            $rowObj->modelo = $row['modelo'];
            $rowObj->placas = $row['placas'];
            $rowObj->fechaEntrada = $row['fechaEntrada'];
            $rowObj->fechaSalida = $row['fechaSalida'];
            $rowObj->estatus = $row['estatus'];
            $rowObj->alertas = $row['alertas'];

            array_push($return_data, $rowObj);
        }

        echo json_encode($return_data);

    } else {
        echo 'no hay ordenes de servicio'; 
    }

?>