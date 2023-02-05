<?php
    include '../../config/database_config.php'; 

    $return_data = array();
   
    $_post = json_decode(file_get_contents('php://input'),true);
    $id = $_post['id'];

    $query = "SELECT * FROM sistema_web.modelo WHERE idmarca = '$id'"; 
    $result = $con->query($query);
    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {

            $rowObj = new stdClass();

            $rowObj->idmodelo = $row['idmodelo'];
            $rowObj->modelo = $row['modelo'];
            $rowObj->idmarca = $row['idmarca'];
            array_push($return_data, $rowObj);
        }
    } else {
        echo 'error no hay modelos'; 
    }

    echo json_encode($return_data);

?>