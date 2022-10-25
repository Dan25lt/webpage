<?php
    include '../../config/database_config.php';

    $return_data = array();
    
    class rowObject
    {
        public $idordenDeServicio;
    }

    $query = "SELECT o.idcliente, 
                    o.nombre,
                    o.apellido,
                    o.rfc,
                    o.telefono,
                    o.email,
                    d.calle,
                    d.numeroint,
                    d.numeroext,
                    d.colonia,
                    d.idarea_postal
                FROM cliente o 
                LEFT JOIN direccion d 
                ON o.idcliente = d.iddireccion";

    $result = $con->query($query);

    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
            $rowObj = new rowObject();
            $rowObj->idcliente = $row['idcliente'];
            $rowObj->nombre = $row['nombre'];
            $rowObj->apellido = $row['apellido'];
            $rowObj->rfc = $row['rfc'];
            $rowObj->telefono = $row['telefono'];
            $rowObj->email = $row['email'];
            $rowObj->calle = $row['calle'];
            $rowObj->numeroint = $row['numeroint'];
            $rowObj->numeroext = $row['numeroext'];
            $rowObj->colonia = $row['colonia'];
            $rowObj->idarea_postal = $row['idarea_postal'];
            array_push($return_data, $rowObj);
        }

        echo json_encode($return_data);

    } else {
        echo 'no hay clientes'; 
    }

?>