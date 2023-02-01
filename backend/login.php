<?php
define("CLAVE_SECRETA", "6LekeikkAAAAAB28tZ8TgropQrq2pRvAa84J51tD"); # Recaptcha secret

# Comprobamos si enviaron el dato
if (!isset($_POST["g-recaptcha-response"]) || empty($_POST["g-recaptcha-response"])) {
  exit("Debes completar el captcha");
}

# Antes de comprobar usuario y contraseña, vemos si resolvieron el captcha
$token = $_POST["g-recaptcha-response"];
$verificado = verificarToken($token, CLAVE_SECRETA);
# Si no ha pasado la prueba
if (!$verificado) {
  exit("Lo siento, parece que eres un robot");
} else {


  include '../config/database_config.php';

  $responseObj = new stdClass();

  $username = $_POST['username'];
  $password = $_POST['password'];
  $query = "SELECT usuario, contraseña, puesto FROM empleado WHERE usuario = '" . $username . "'";

  $result = $con->query($query);

  if ($result->num_rows > 0) {
    // output data of each row
    // este while no deberia de estar porque solo se regresa una fila, pero asi jala
    while ($row = $result->fetch_assoc()) {

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
    $responseObj->statusCode = 403;
    $responseObj->msj = 'No existe el usuario en la base de datos';
  }

  echo json_encode($responseObj);
}


## 
## Se encarga de verificar el recaptcha
##
function verificarToken($token, $claveSecreta)
{
  # La API en donde verificamos el token
  $url = "https://www.google.com/recaptcha/api/siteverify";
  # Los datos que enviamos a Google
  $datos = [
    "secret" => $claveSecreta,
    "response" => $token,
  ];
  // Crear opciones de la petición HTTP
  $opciones = array(
    "http" => array(
      "header" => "Content-type: application/x-www-form-urlencoded\r\n",
      "method" => "POST",
      "content" => http_build_query($datos),
      # Agregar el contenido definido antes
    ),
  );
  # Preparar petición
  $contexto = stream_context_create($opciones);
  # Hacerla
  $resultado = file_get_contents($url, false, $contexto);
  # Si hay problemas con la petición (por ejemplo, que no hay internet o algo así)
  # entonces se regresa false. Este NO es un problema con el captcha, sino con la conexión
  # al servidor de Google
  if ($resultado === false) {
    # Error haciendo petición
    return false;
  }

  # En caso de que no haya regresado false, decodificamos con JSON
  # https://parzibyte.me/blog/2018/12/26/codificar-decodificar-json-php/

  $resultado = json_decode($resultado);
  # La variable que nos interesa para saber si el usuario pasó o no la prueba
  # está en success
  $pruebaPasada = $resultado->success;
  # Regresamos ese valor, y listo (sí, ya sé que se podría regresar $resultado->success)
  return $pruebaPasada;
}

?>