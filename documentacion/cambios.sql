
ALTER TABLE `sistema_web`.`odendeservicio` 
ADD COLUMN `check_list_tecnico` VARCHAR(2000) NULL;


UPDATE `sistema_web`.`odendeservicio` SET `check_list_tecnico` = '{\"pastillas_freno_traseras_der\":\"Bueno\",\"pastillas_freno_traseras_izq\":\"Bueno\",\"limpiador_medallon_trasero\":\"Bueno\",\"luces_traseras\":\"Bueno\",\"amortiguador_delantero_der\":\"Bueno\",\"amortiguador_delantero_izq\":\"Bueno\",\"amortiguador_trasero_der\":\"Bueno\",\"amortiguador_trasero_izq\":\"Bueno\",\"direccion\":\"Bueno\",\"reset_indicador_cambio_aceite\":\"Bueno\",\"filtro_aire_motor\":\"Bueno\",\"filtro_cabina\":\"Bueno\",\"pastillas_freno_delanteras_der\":\"Bueno\",\"pastillas_freno_delanteras_izq\":\"Bueno\",\"limpiaparabrisas_derecho\":\"Bueno\",\"limpiaparabrisas_izquierdo\":\"Bueno\",\"faro_derecho_luces\":\"Bueno\",\"faro_izquiero_luces\":\"Bueno\",\"anticongelante\":\"Bueno\",\"liquido_direccion_hidraulica\":\"Bueno\",\"banda_accesorios\":\"Bueno\",\"revision_bateria\":\"Bueno\"}' WHERE (`idordenDeServicio` = '\"Bueno\"') and (`idvehiculos` = '\"Bueno\"') and (`idempleado` = '\"Bueno\"');
