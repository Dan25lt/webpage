<?php
    include '../config/database_config.php'; 

    require_once('recaptchalib.php');
    $privatekey = "516516541catonkeyboard351654";
    $resp = recaptcha_check_answer ($privatekey,
        $_SERVER["REMOTE_ADDR"],
        $_POST["recaptcha_challenge_field"],
        $_POST["recaptcha_response_field"]);

    if (!$resp->is_valid) {
        // What happens when the CAPTCHA was entered incorrectly
        die ("The reCAPTCHA wasn't entered correctly. Go back and try it again."."(reCAPTCHA said: " . $resp->error . ")");
    } else {
    // Your code here to handle a successful verification
    }

    $responseObj = new stdClass();

    $username = $_POST['username'];
    $password = $_POST['password']; 
    $query = "SELECT usuario, contraseña, puesto FROM empleado WHERE usuario = '".$username."'";

    $result = $con->query($query);

    $ip = $_SERVER['REMOTE_ADDR'];
    $capcha = $_POST['g-recaptcha-response'];
    $secretkey = "6LekeikkAAAAAB28tZ8TgropQrq2pRvAa84J51tD";

    $respuesta = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secretkey&response=$capcha&remoteip=$ip");

    $atributos = json_decode($respuesta, TRUE);

    if(!$atributos ['succes']){
       echo 'No se acepto capcha'; 
    }else{
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
    }

   

?>