<?php

include '../config/database_config.php'; 

define('EL_CAMINO', dirname(__DIR__)."/img/uploads/");

function v4_UUID() {
   return sprintf('%04x%04x-%04x-%04x-%04x-%04x%04x%04x',
     // 32 bits for the time_low
     mt_rand(0, 0xffff), mt_rand(0, 0xffff),
     // 16 bits for the time_mid
     mt_rand(0, 0xffff),
     // 16 bits for the time_hi,
     mt_rand(0, 0x0fff) | 0x4000,

     // 8 bits and 16 bits for the clk_seq_hi_res,
     // 8 bits for the clk_seq_low,
     mt_rand(0, 0x3fff) | 0x8000,
     // 48 bits for the node
     mt_rand(0, 0xffff), mt_rand(0, 0xffff), mt_rand(0, 0xffff)
   );
 }

if(isset($_FILES['file']['name'])){
   // file name
   $filename = $_FILES['file']['name'];
   $orden_id = $_POST['orden_id'];

   // Location
   $location = $filename;

   // file extension
   $file_extension = pathinfo($location, PATHINFO_EXTENSION);
   $file_extension = strtolower($file_extension);

   // Valid extensions
   $valid_ext = array("pdf","doc","docx","jpg","png","jpeg");

   // Nombre al azar 
   $v4_uuid = v4_UUID();

   $response = 0;
   if(in_array($file_extension,$valid_ext)){
      // Upload file
      if(move_uploaded_file($_FILES['file']['tmp_name'], EL_CAMINO.$v4_uuid.".jpg")){
         $response = $v4_uuid.".jpg";
      } 
   }

   $query = "UPDATE odendeservicio SET img_url1 = '".$v4_uuid.".jpg"."' WHERE idordenDeServicio = $orden_id";

    if ($con->query($query) === TRUE) {
    } else {
      $response = 0;
    }

   echo $response;
   exit;
}

?>