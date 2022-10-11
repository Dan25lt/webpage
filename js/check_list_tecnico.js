function cargarCheckListTecnico() {
    fetch('./backend/getOrderDetailsById.php', {
        method: 'POST',
        body: JSON.stringify({ orderNo: 1 }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(function (response) {
            return response.text();
        })
        .then(function (return_data) {

            var todas_las_filas = JSON.parse(return_data);
            var check_list_tecnico = JSON.parse(todas_las_filas[0].check_list_tecnico);

            console.log(check_list_tecnico);

            // pastillas_freno_traseras_der_bueno

            if (check_list_tecnico.pastillas_freno_traseras_der === 1) {
                document.getElementById('pastillas_freno_traseras_der_bueno').checked = true;
            } else if (check_list_tecnico.pastillas_freno_traseras_der === 2) {
                document.getElementById('pastillas_freno_traseras_der_medio').checked = true;
            } else if (check_list_tecnico.pastillas_freno_traseras_der === 3) {
                document.getElementById('pastillas_freno_traseras_der_malo').checked = true;
            }

            // pastillas_freno_traseras_izq

            if (check_list_tecnico.pastillas_freno_traseras_izq === 1) {
                document.getElementById('pastillas_freno_traseras_izq_bueno').checked = true;
            } else if (check_list_tecnico.pastillas_freno_traseras_izq === 2) {
                document.getElementById('pastillas_freno_traseras_izq_medio').checked = true;
            } else if (check_list_tecnico.pastillas_freno_traseras_izq === 3) {
                document.getElementById('pastillas_freno_traseras_izq_malo').checked = true;
            }

            // limpiador_medallon_trasero

            if (check_list_tecnico.limpiador_medallon_trasero === 1) {
                document.getElementById('limpiador_medallon_trasero_bueno').checked = true;
            } else if (check_list_tecnico.limpiador_medallon_trasero === 2) {
                document.getElementById('limpiador_medallon_trasero_medio').checked = true;
            } else if (check_list_tecnico.limpiador_medallon_trasero === 3) {
                document.getElementById('limpiador_medallon_trasero_malo').checked = true;
            }

            // luces_traseras

            if (check_list_tecnico.luces_traseras === 1) {
                document.getElementById('luces_traseras_bueno').checked = true;
            } else if (check_list_tecnico.luces_traseras === 2) {
                document.getElementById('luces_traseras_medio').checked = true;
            } else if (check_list_tecnico.luces_traseras === 3) {
                document.getElementById('luces_traseras_malo').checked = true;
            }

            // amortiguador_delantero_der

            if (check_list_tecnico.amortiguador_delantero_der === 1) {
                document.getElementById('amortiguador_delantero_der_bueno').checked = true;
            } else if (check_list_tecnico.amortiguador_delantero_der === 2) {
                document.getElementById('amortiguador_delantero_der_medio').checked = true;
            } else if (check_list_tecnico.amortiguador_delantero_der === 3) {
                document.getElementById('amortiguador_delantero_der_malo').checked = true;
            }

            // amortiguador_delantero_izq

            if (check_list_tecnico.amortiguador_delantero_izq === 1) {
                document.getElementById('amortiguador_delantero_izq_bueno').checked = true;
            } else if (check_list_tecnico.amortiguador_delantero_izq === 2) {
                document.getElementById('amortiguador_delantero_izq_medio').checked = true;
            } else if (check_list_tecnico.amortiguador_delantero_izq === 3) {
                document.getElementById('amortiguador_delantero_izq_malo').checked = true;
            }

            // amortiguador_trasero_der

            if (check_list_tecnico.amortiguador_trasero_der === 1) {
                document.getElementById('amortiguador_trasero_der_bueno').checked = true;
            } else if (check_list_tecnico.amortiguador_trasero_der === 2) {
                document.getElementById('amortiguador_trasero_der_medio').checked = true;
            } else if (check_list_tecnico.amortiguador_trasero_der === 3) {
                document.getElementById('amortiguador_trasero_der_malo').checked = true;
            }

            // amortiguador_trasero_izq

            if (check_list_tecnico.amortiguador_trasero_izq === 1) {
                document.getElementById('amortiguador_trasero_izq_bueno').checked = true;
            } else if (check_list_tecnico.amortiguador_trasero_izq === 2) {
                document.getElementById('amortiguador_trasero_izq_medio').checked = true;
            } else if (check_list_tecnico.amortiguador_trasero_izq === 3) {
                document.getElementById('amortiguador_trasero_izq_malo').checked = true;
            }

            // direccion

            if (check_list_tecnico.direccion === 1) {
                document.getElementById('direccion_bueno').checked = true;
            } else if (check_list_tecnico.direccion === 2) {
                document.getElementById('direccion_medio').checked = true;
            } else if (check_list_tecnico.direccion === 3) {
                document.getElementById('direccion_malo').checked = true;
            }

            // reset_indicador_cambio_aceite

            if (check_list_tecnico.reset_indicador_cambio_aceite === 1) {
                document.getElementById('reset_indicador_cambio_aceite_bueno').checked = true;
            } else if (check_list_tecnico.reset_indicador_cambio_aceite === 2) {
                document.getElementById('reset_indicador_cambio_aceite_medio').checked = true;
            } else if (check_list_tecnico.reset_indicador_cambio_aceite === 3) {
                document.getElementById('reset_indicador_cambio_aceite_malo').checked = true;
            } else if (check_list_tecnico.reset_indicador_cambio_aceite === 4) {
                document.getElementById('reset_indicador_cambio_aceite_na').checked = true;
            }

            // filtro_aire_motor

            if (check_list_tecnico.filtro_aire_motor === 1) {
                document.getElementById('filtro_aire_motor_bueno').checked = true;
            } else if (check_list_tecnico.filtro_aire_motor === 2) {
                document.getElementById('filtro_aire_motor_medio').checked = true;
            } else if (check_list_tecnico.filtro_aire_motor === 3) {
                document.getElementById('filtro_aire_motor_malo').checked = true;
            }

            // filtro_cabina

            if (check_list_tecnico.filtro_cabina === 1) {
                document.getElementById('filtro_cabina_bueno').checked = true;
            } else if (check_list_tecnico.filtro_cabina === 2) {
                document.getElementById('filtro_cabina_medio').checked = true;
            } else if (check_list_tecnico.filtro_cabina === 3) {
                document.getElementById('filtro_cabina_malo').checked = true;
            }

            // pastillas_freno_delanteras_der

            if (check_list_tecnico.pastillas_freno_delanteras_der === 1) {
                document.getElementById('pastillas_freno_delanteras_der_bueno').checked = true;
            } else if (check_list_tecnico.pastillas_freno_delanteras_der === 2) {
                document.getElementById('pastillas_freno_delanteras_der_medio').checked = true;
            } else if (check_list_tecnico.pastillas_freno_delanteras_der === 3) {
                document.getElementById('pastillas_freno_delanteras_der_malo').checked = true;
            }

            // pastillas_freno_delanteras_izq

            if (check_list_tecnico.pastillas_freno_delanteras_izq === 1) {
                document.getElementById('pastillas_freno_delanteras_izq_bueno').checked = true;
            } else if (check_list_tecnico.pastillas_freno_delanteras_izq === 2) {
                document.getElementById('pastillas_freno_delanteras_izq_medio').checked = true;
            } else if (check_list_tecnico.pastillas_freno_delanteras_izq === 3) {
                document.getElementById('pastillas_freno_delanteras_izq_malo').checked = true;
            }

            // limpiaparabrisas_derecho

            if (check_list_tecnico.limpiaparabrisas_derecho === 1) {
                document.getElementById('limpiaparabrisas_derecho_bueno').checked = true;
            } else if (check_list_tecnico.limpiaparabrisas_derecho === 2) {
                document.getElementById('limpiaparabrisas_derecho_medio').checked = true;
            } else if (check_list_tecnico.limpiaparabrisas_derecho === 3) {
                document.getElementById('limpiaparabrisas_derecho_malo').checked = true;
            }

            // limpiaparabrisas_izquierdo

            if (check_list_tecnico.limpiaparabrisas_izquierdo === 1) {
                document.getElementById('limpiaparabrisas_izquierdo_bueno').checked = true;
            } else if (check_list_tecnico.limpiaparabrisas_izquierdo === 2) {
                document.getElementById('limpiaparabrisas_izquierdo_medio').checked = true;
            } else if (check_list_tecnico.limpiaparabrisas_izquierdo === 3) {
                document.getElementById('limpiaparabrisas_izquierdo_malo').checked = true;
            }

            // faro_derecho_luces

            if (check_list_tecnico.faro_derecho_luces === 1) {
                document.getElementById('faro_derecho_luces_bueno').checked = true;
            } else if (check_list_tecnico.faro_derecho_luces === 2) {
                document.getElementById('faro_derecho_luces_medio').checked = true;
            } else if (check_list_tecnico.faro_derecho_luces === 3) {
                document.getElementById('faro_derecho_luces_malo').checked = true;
            }

            // faro_izquiero_luces

            if (check_list_tecnico.faro_izquiero_luces === 1) {
                document.getElementById('faro_izquiero_luces_bueno').checked = true;
            } else if (check_list_tecnico.faro_izquiero_luces === 2) {
                document.getElementById('faro_izquiero_luces_medio').checked = true;
            } else if (check_list_tecnico.faro_izquiero_luces === 3) {
                document.getElementById('faro_izquiero_luces_malo').checked = true;
            }

            // anticongelante

            if (check_list_tecnico.anticongelante === 1) {
                document.getElementById('anticongelante_bueno').checked = true;
            } else if (check_list_tecnico.anticongelante === 2) {
                document.getElementById('anticongelante_medio').checked = true;
            } else if (check_list_tecnico.anticongelante === 3) {
                document.getElementById('anticongelante_malo').checked = true;
            }

            // liquido_direccion_hidraulica

            if (check_list_tecnico.liquido_direccion_hidraulica === 1) {
                document.getElementById('liquido_direccion_hidraulica_bueno').checked = true;
            } else if (check_list_tecnico.liquido_direccion_hidraulica === 2) {
                document.getElementById('liquido_direccion_hidraulica_medio').checked = true;
            } else if (check_list_tecnico.liquido_direccion_hidraulica === 3) {
                document.getElementById('liquido_direccion_hidraulica_malo').checked = true;
            } else if (check_list_tecnico.liquido_direccion_hidraulica === 4) {
                document.getElementById('liquido_direccion_hidraulica_na').checked = true;
            }

            // banda_accesorios

            if (check_list_tecnico.banda_accesorios === 1) {
                document.getElementById('banda_accesorios_bueno').checked = true;
            } else if (check_list_tecnico.banda_accesorios === 2) {
                document.getElementById('banda_accesorios_medio').checked = true;
            } else if (check_list_tecnico.banda_accesorios === 3) {
                document.getElementById('banda_accesorios_malo').checked = true;
            }

            // revision_bateria

            if (check_list_tecnico.revision_bateria === 1) {
                document.getElementById('revision_bateria_bueno').checked = true;
            } else if (check_list_tecnico.revision_bateria === 2) {
                document.getElementById('revision_bateria_medio').checked = true;
            } else if (check_list_tecnico.revision_bateria === 3) {
                document.getElementById('revision_bateria_malo').checked = true;
            }
        })
        .catch(function (err) {
            console.log(err);
        });
}

// Aqui se manda a llamar toda la funcion anterior.
cargarCheckListTecnico();