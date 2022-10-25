<?php
    include '../config/database_config.php'; 

    $return_data = array();
    
    class rowObject
    {
        public $idordenDeServicio;
        public $fechaEntrada;
        public $fechaSalida;
    }

    $query = "SELECT o.idordenDeServicio,
          v.vin,
          m.modelo,
          v.placas,
          v.año,
          o.fechaEntrada,
          o.fechaSalida,
          o.estatus,
          o.alertas,
          c.telefono,
          c.rfc,
          c.nombre,
          c.apellido,
          o.img_url1,
          o.img_url2,
          o.img_url3,
          o.img_url4
      FROM odendeservicio o
      LEFT JOIN vehiculos v
      ON o.idvehiculos = v.idvehiculos
      LEFT JOIN modelo m
      ON v.idmodelo = m.idmodelo
      LEFT JOIN cliente c
      ON v.idcliente = c.idcliente
      WHERE o.idordenDeServicio";

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
            $rowObj->apellido = $row['apellido'];

            $rowObj->img_url1 = $row['img_url1'];
            $rowObj->img_url2 = $row['img_url2'];
            $rowObj->img_url3 = $row['img_url3'];
            $rowObj->img_url4 = $row['img_url4'];

            array_push($return_data, $rowObj);
        }

        echo json_encode($return_data);

    } else {
        echo 'no hay ordenes de servicio'; 
    }

?>