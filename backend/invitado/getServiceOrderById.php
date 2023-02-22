<?php
include '../../config/database_config.php';

$responseObj = array();

$orderId = $_POST['orderId'];

$query = "SELECT o.idordenDeServicio,
v.vin,
ma.marca,
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
LEFT JOIN marca ma
ON m.idmarca = ma.idmarca
LEFT JOIN cliente c
ON v.idcliente = c.idcliente
WHERE o.idordenDeServicio = $orderId";

$result = $con->query($query);

if ($result->num_rows > 0) {
  // output data of each row
  // este while no deberia de estar porque solo se regresa una fila, pero asi jala
  while ($row = $result->fetch_assoc()) {

    $rowObj = new stdClass();
    $rowObj->idordenDeServicio = $row['idordenDeServicio'];
    $rowObj->vin = $row['vin'];
    $rowObj->marca = $row['marca'];
    $rowObj->modelo = $row['modelo'];
    $rowObj->placas = $row['placas'];
    $rowObj->fechaEntrada = $row['fechaEntrada'];
    $rowObj->fechaSalida = $row['fechaSalida'];
    $rowObj->estatus = $row['estatus'];
    $rowObj->alertas = $row['alertas'];

    array_push($responseObj, $rowObj);
  }

  echo json_encode($responseObj);
} else {
  echo "No existe el numero de orden";
}

?>