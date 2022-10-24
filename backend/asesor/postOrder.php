<?php
    include '../../config/database_config.php';

    $return_data = array();
    $_post = json_decode(file_get_contents('php://input'),true);
    
    $idvehiculos = $_post['idvehiculos']; 
    $lista_operaciones = $_post['lista_operaciones'];
    $checkListTecnico = '{"pastillas_freno_traseras_der":"Bueno","pastillas_freno_traseras_izq":"Bueno","limpiador_medallon_trasero":"Bueno","luces_traseras":"Bueno","amortiguador_delantero_der":"Bueno","amortiguador_delantero_izq":"Bueno","amortiguador_trasero_der":"Bueno","amortiguador_trasero_izq":"Bueno","direccion":"Bueno","reset_indicador_cambio_aceite":"Bueno","filtro_aire_motor":"Bueno","filtro_cabina":"Bueno","pastillas_freno_delanteras_der":"Bueno","pastillas_freno_delanteras_izq":"Bueno","limpiaparabrisas_derecho":"Bueno","limpiaparabrisas_izquierdo":"Bueno","faro_derecho_luces":"Bueno","faro_izquiero_luces":"Bueno","anticongelante":"Bueno","liquido_direccion_hidraulica":"Bueno","banda_accesorios":"Bueno","revision_bateria":"Bueno"}';
    $checkListCalidad = '{"bayoneta":"Bueno","aceite_motor":"Bueno","filtro_aceite":"Bueno","tapon_carter":"Bueno","filtro_aire_nuevo":"Bueno","filtro_combustible":"Bueno","conexion_filtro_combustible":"Bueno","diagnostico_bateria":"Bueno","borne_bateria":"Bueno","aceite_transmision":"Bueno","nivel_anticongelante":"Bueno","nivel_direccion":"Bueno","diagnostico_banda":"Bueno","diagnostico_mangeras":"Bueno","diagnostico_arneses":"Bueno","inspeccion_neumaticos":"Bueno","presion_neumaticos":"Bueno","presion_extra":"Bueno","torque_birlos":"Bueno","luces":"Bueno","operacion_limpiabrisas":"Bueno","vida_util_frenos":"Bueno","configuracion_fabrica":"Bueno","correceria_limpia":"Bueno","dano_carroceria":"Bueno","vestiduras_limpias":"Bueno","volante_limpio":"Bueno","palanca_limpia":"Bueno","tablero_limpio":"Bueno","alfombra_limpia":"Bueno","retrovisores_ajustados":"Bueno","motor_limpio":"Bueno","bastidor_limpio":"Bueno","rines_limpios":"Bueno","a_tiempo":"Bueno","protecciones":"Bueno","piezas":"Bueno","hoja_inspeccion":"Bueno","tiempo_programado":"Bueno","objetos_personales":"Bueno","vip_vehiculo":"Bueno","campanas_reportadas":"Bueno","torque_caliper":"Bueno","liquido_frenos":"Bueno","asentamiento_balatas":"Bueno","prueba_camino":"Bueno","vibra_pedal":"Bueno","viaje_pedal":"Bueno","pedal_esponjoso":"Bueno","pedal_duro":"Bueno","operacion_frenado":"Bueno","frenos_ruidosos":"Bueno","ajuste_correcto_freno":"Bueno"}';
        
    $query = "INSERT INTO odendeservicio (idempleado, fechaEntrada, fechaSalida, idvehiculos, estatus, check_list_tecnico, check_list_calidad, operaciones) 
        VALUES (1, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), $idvehiculos, 'en espera', '$checkListTecnico', '$checkListCalidad', '$lista_operaciones')";

    if ($con->query($query) === TRUE) {
        echo "Registro insertado";
    } else {
        echo "Error: " . $query . "<br>" . $con->error;
    }
?>