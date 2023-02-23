<?php
    include '../../config/database_config.php'; 

    $return_data = array();
    
    $queryTest = "SELECT (CASE 
	WHEN MONTH(fechaEntrada) = '1' THEN 'ENE'
	WHEN MONTH(fechaEntrada) = '2' THEN 'FEB'
	WHEN MONTH(fechaEntrada) = '3' THEN 'MAR'
	WHEN MONTH(fechaEntrada) = '4' THEN 'ABR'
    WHEN MONTH(fechaEntrada) = '5' THEN 'MAY'
    WHEN MONTH(fechaEntrada) = '6' THEN 'JUN'
    WHEN MONTH(fechaEntrada) = '7' THEN 'JUL'
    WHEN MONTH(fechaEntrada) = '8' THEN 'AGO'
    WHEN MONTH(fechaEntrada) = '9' THEN 'SEP'
    WHEN MONTH(fechaEntrada) = '10' THEN 'OCT'
    WHEN MONTH(fechaEntrada) = '11' THEN 'NOV'
    WHEN MONTH(fechaEntrada) = '12' THEN 'DIC'
	ELSE 'ERR'
END) AS mes,
count(*) AS cantidad
FROM odendeservicio
WHERE YEAR(fechaEntrada) = '2023'
GROUP BY MONTH(fechaEntrada)	
ORDER BY mes ASC";

$query = "SELECT MONTH(fechaEntrada) AS mes,
count(*) AS cantidad
FROM odendeservicio
WHERE YEAR(fechaEntrada) = '2023'
GROUP BY MONTH(fechaEntrada)	
ORDER BY mes ASC";

    $result = $con->query($query);

    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
            $rowObj = new stdClass();
            $rowObj->mes = $row['mes'];
            $rowObj->cantidad = $row['cantidad'];

            array_push($return_data, $rowObj);
        }

        echo json_encode($return_data);

    } else {
        echo 'Sin operaciones'; 
    }

?>