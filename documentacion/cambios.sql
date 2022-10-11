
ALTER TABLE `sistema_web`.`odendeservicio` 
ADD COLUMN `check_list_tecnico` VARCHAR(2000) NULL;


UPDATE `sistema_web`.`odendeservicio` SET `check_list_tecnico` = '{\"pastillas_freno_traseras_der\":1,\"pastillas_freno_traseras_izq\":1,\"limpiador_medallon_trasero\":1,\"luces_traseras\":1,\"amortiguador_delantero_der\":1,\"amortiguador_delantero_izq\":1,\"amortiguador_trasero_der\":1,\"amortiguador_trasero_izq\":1,\"direccion\":1,\"reset_indicador_cambio_aceite\":1,\"filtro_aire_motor\":1,\"filtro_cabina\":1,\"pastillas_freno_delanteras_der\":1,\"pastillas_freno_delanteras_izq\":1,\"limpiaparabrisas_derecho\":1,\"limpiaparabrisas_izquierdo\":1,\"faro_derecho_luces\":1,\"faro_izquiero_luces\":1,\"anticongelante\":1,\"liquido_direccion_hidraulica\":1,\"banda_accesorios\":1,\"revision_bateria\":1}' WHERE (`idordenDeServicio` = '1') and (`idvehiculos` = '1') and (`idempleado` = '1');
