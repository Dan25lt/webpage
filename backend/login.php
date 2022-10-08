<?php
    include '../config/database_config.php'; 

    $responseObj = new stdClass();

    $username = $_POST['username'];
    $password = $_POST['password']; 
    $query = "SELECT usuario, contraseña, puesto FROM empleado WHERE usuario = '".$username."'";

    $result = $con->query($query);


    if ($result->num_rows > 0) {
        // output data of each row
        // este while no deberia de estar porque solo se regresa una fila, pero asi jala
        while($row = $result->fetch_assoc()) {

            if ($password == $row['contraseña']) {
                $responseObj->statusCode = 200;
                $responseObj->msj = 'successfully logged in';
                $responseObj->puesto = $row['puesto']; // Ojo, aqui le agregamos el rol de usuario desde la DB

                /*
                * El usuario se autentico correctamente, ahi que guardar esa info en una cookie para evaluarla despues.
                */
                $loguedIn = true;
                $username = $row['usuario'];
                $puesto = $row['puesto'];

                setcookie("loguedIn", $loguedIn, time() + (86400 * 30), "/"); // 86400 = 1 day
                setcookie("username", $username, time() + (86400 * 30), "/"); // 86400 = 1 day
                setcookie("puesto", $puesto, time() + (86400 * 30), "/"); // 86400 = 1 day

            } else {
                $responseObj->statusCode = 403;
                $responseObj->msj = 'Usuario y/o contraseña incorrectos';
            }
        }
    } else {
        $responseObj -> statusCode = 403;
        $responseObj -> msj = 'No existe el usuario en la base de datos';
    }

    echo json_encode($responseObj);

?>