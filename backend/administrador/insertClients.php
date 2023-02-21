<?php
include '../../config/database_config.php';

$return_data = array();


$idcliente = $_POST['add_iddireccion'];
$nombre = $_POST['add_nombre'];
$apellido = $_POST['add_apellido'];
$rfc = $_POST['add_rfc'];
$telefono = $_POST['add_telefono'];
$email = $_POST['add_email'];
$calle = $_POST['add_calle'];
$numeroint = $_POST['add_numeroint'];
$numeroext = $_POST['add_numeroext'];
$colonia = $_POST['add_colonia'];
$idarea_postal = $_POST['add_idarea_postal'];

$query = "SELECT * FROM cliente WHERE rfc = '$rfc' ";

$result = $con->query($query);

if ($result->num_rows > 0) {
    exit("Ya existe un cliente con ese RFC");
}


$query = "INSERT INTO direccion (iddireccion, calle, numeroint, numeroext, colonia, idarea_postal) 
    VALUES (null, '$calle', '$numeroint', '$numeroext', '$colonia', $idarea_postal)";

if ($con->query($query) === TRUE) {
    $last_id = $con->insert_id;
} else {
    echo "Error: " . $query . "<br>" . $con->error;
}

$query = "INSERT INTO cliente (idcliente, nombre, apellido, rfc, telefono, email, iddireccion)
    VALUES (null, '$nombre', '$apellido', '$rfc', '$telefono', '$email', $last_id)";

if ($con->query($query) === TRUE) {
    echo "Registro insertado";
} else {
    echo "Error: " . $query . "<br>" . $con->error;
}
?>