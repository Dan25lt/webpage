<?php
// Se declaran las constantes
const DB_HOST = "pdb58.awardspace.net";
const DB_USERNAME = "4196598_autocamiones";
const DB_PASSWORD = "1357LOCK";
const DB_DATABASE_NAME = "4196598_autocamiones";

$con = mysqli_connect(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE_NAME);

if (mysqli_connect_errno()){
	echo "Failed to connect to MySQL: " . mysqli_connect_error();
	die();
}

?>