function guardarCheckListTecnico() {
    event.preventDefault(); // Previene el evento submit (el que recarga la pagina);

    // Obtiene todos los datos de la forma
    let checkListTecnicoForm = new FormData(document.getElementById("checkListTecnicoForm"));

    // Convierte todos los datos del formulario a formato json
    let formDataObj = {};
    checkListTecnicoForm.forEach((value, key) => (formDataObj[key] = value));
    
    // console.log("==== POST check_list_tecnico ====");
    // console.log(JSON.stringify(formDataObj));

    // Manda los datos al backend para ser guardados ahi 
    fetch('./backend/postCheckListTecnico.php', {
        method: 'POST',
        body: JSON.stringify({
            orderNo: 1,
            data: JSON.stringify(formDataObj)
        }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(function (response) {
            return response.text();
        })
        .then(function (return_data) {

            if (return_data === "Registro actualizado") {
                alert("Registro actualizado.");
            } else {
                console.log(return_data);
                alert("Error no se pudo guardar la informacion.");
            }
        })
        .catch(function (err) {
            console.log(err);
        });
}



function cargarCheckListTecnico() {
    fetch('./backend/getCheckListTecnico.php', {
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

            // console.log("==== GET check_list_tecnico ====");
            // console.log(check_list_tecnico);

            // pastillas_freno_traseras_der_bueno

            if (check_list_tecnico.pastillas_freno_traseras_der === "Bueno") {
                document.getElementById('pastillas_freno_traseras_der_bueno').checked = true;
            } else if (check_list_tecnico.pastillas_freno_traseras_der === "Medio") {
                document.getElementById('pastillas_freno_traseras_der_medio').checked = true;
            } else if (check_list_tecnico.pastillas_freno_traseras_der === "Malo") {
                document.getElementById('pastillas_freno_traseras_der_malo').checked = true;
            }

            // pastillas_freno_traseras_izq

            if (check_list_tecnico.pastillas_freno_traseras_izq === "Bueno") {
                document.getElementById('pastillas_freno_traseras_izq_bueno').checked = true;
            } else if (check_list_tecnico.pastillas_freno_traseras_izq === "Medio") {
                document.getElementById('pastillas_freno_traseras_izq_medio').checked = true;
            } else if (check_list_tecnico.pastillas_freno_traseras_izq === "Malo") {
                document.getElementById('pastillas_freno_traseras_izq_malo').checked = true;
            }

            // limpiador_medallon_trasero

            if (check_list_tecnico.limpiador_medallon_trasero === "Bueno") {
                document.getElementById('limpiador_medallon_trasero_bueno').checked = true;
            } else if (check_list_tecnico.limpiador_medallon_trasero === "Medio") {
                document.getElementById('limpiador_medallon_trasero_medio').checked = true;
            } else if (check_list_tecnico.limpiador_medallon_trasero === "Malo") {
                document.getElementById('limpiador_medallon_trasero_malo').checked = true;
            } else if (check_list_tecnico.limpiador_medallon_trasero === "NA") {
                document.getElementById('limpiador_medallon_trasero_na').checked = true;
            }

            // luces_traseras

            if (check_list_tecnico.luces_traseras === "Bueno") {
                document.getElementById('luces_traseras_bueno').checked = true;
            } else if (check_list_tecnico.luces_traseras === "Medio") {
                document.getElementById('luces_traseras_medio').checked = true;
            } else if (check_list_tecnico.luces_traseras === "Malo") {
                document.getElementById('luces_traseras_malo').checked = true;
            }

            // amortiguador_delantero_der

            if (check_list_tecnico.amortiguador_delantero_der === "Bueno") {
                document.getElementById('amortiguador_delantero_der_bueno').checked = true;
            } else if (check_list_tecnico.amortiguador_delantero_der === "Medio") {
                document.getElementById('amortiguador_delantero_der_medio').checked = true;
            } else if (check_list_tecnico.amortiguador_delantero_der === "Malo") {
                document.getElementById('amortiguador_delantero_der_malo').checked = true;
            }

            // amortiguador_delantero_izq

            if (check_list_tecnico.amortiguador_delantero_izq === "Bueno") {
                document.getElementById('amortiguador_delantero_izq_bueno').checked = true;
            } else if (check_list_tecnico.amortiguador_delantero_izq === "Medio") {
                document.getElementById('amortiguador_delantero_izq_medio').checked = true;
            } else if (check_list_tecnico.amortiguador_delantero_izq === "Malo") {
                document.getElementById('amortiguador_delantero_izq_malo').checked = true;
            }

            // amortiguador_trasero_der

            if (check_list_tecnico.amortiguador_trasero_der === "Bueno") {
                document.getElementById('amortiguador_trasero_der_bueno').checked = true;
            } else if (check_list_tecnico.amortiguador_trasero_der === "Medio") {
                document.getElementById('amortiguador_trasero_der_medio').checked = true;
            } else if (check_list_tecnico.amortiguador_trasero_der === "Malo") {
                document.getElementById('amortiguador_trasero_der_malo').checked = true;
            }

            // amortiguador_trasero_izq

            if (check_list_tecnico.amortiguador_trasero_izq === "Bueno") {
                document.getElementById('amortiguador_trasero_izq_bueno').checked = true;
            } else if (check_list_tecnico.amortiguador_trasero_izq === "Medio") {
                document.getElementById('amortiguador_trasero_izq_medio').checked = true;
            } else if (check_list_tecnico.amortiguador_trasero_izq === "Malo") {
                document.getElementById('amortiguador_trasero_izq_malo').checked = true;
            }

            // direccion

            if (check_list_tecnico.direccion === "Bueno") {
                document.getElementById('direccion_bueno').checked = true;
            } else if (check_list_tecnico.direccion === "Medio") {
                document.getElementById('direccion_medio').checked = true;
            } else if (check_list_tecnico.direccion === "Malo") {
                document.getElementById('direccion_malo').checked = true;
            }

            // reset_indicador_cambio_aceite

            if (check_list_tecnico.reset_indicador_cambio_aceite === "Bueno") {
                document.getElementById('reset_indicador_cambio_aceite_bueno').checked = true;
            } else if (check_list_tecnico.reset_indicador_cambio_aceite === "Medio") {
                document.getElementById('reset_indicador_cambio_aceite_medio').checked = true;
            } else if (check_list_tecnico.reset_indicador_cambio_aceite === "Malo") {
                document.getElementById('reset_indicador_cambio_aceite_malo').checked = true;
            } else if (check_list_tecnico.reset_indicador_cambio_aceite === "NA") {
                document.getElementById('reset_indicador_cambio_aceite_na').checked = true;
            }

            // filtro_aire_motor

            if (check_list_tecnico.filtro_aire_motor === "Bueno") {
                document.getElementById('filtro_aire_motor_bueno').checked = true;
            } else if (check_list_tecnico.filtro_aire_motor === "Medio") {
                document.getElementById('filtro_aire_motor_medio').checked = true;
            } else if (check_list_tecnico.filtro_aire_motor === "Malo") {
                document.getElementById('filtro_aire_motor_malo').checked = true;
            }

            // filtro_cabina

            if (check_list_tecnico.filtro_cabina === "Bueno") {
                document.getElementById('filtro_cabina_bueno').checked = true;
            } else if (check_list_tecnico.filtro_cabina === "Medio") {
                document.getElementById('filtro_cabina_medio').checked = true;
            } else if (check_list_tecnico.filtro_cabina === "Malo") {
                document.getElementById('filtro_cabina_malo').checked = true;
            } else if (check_list_tecnico.filtro_cabina === "NA") {
                document.getElementById('filtro_cabina_na').checked = true;
            }

            // pastillas_freno_delanteras_der

            if (check_list_tecnico.pastillas_freno_delanteras_der === "Bueno") {
                document.getElementById('pastillas_freno_delanteras_der_bueno').checked = true;
            } else if (check_list_tecnico.pastillas_freno_delanteras_der === "Medio") {
                document.getElementById('pastillas_freno_delanteras_der_medio').checked = true;
            } else if (check_list_tecnico.pastillas_freno_delanteras_der === "Malo") {
                document.getElementById('pastillas_freno_delanteras_der_malo').checked = true;
            }

            // pastillas_freno_delanteras_izq

            if (check_list_tecnico.pastillas_freno_delanteras_izq === "Bueno") {
                document.getElementById('pastillas_freno_delanteras_izq_bueno').checked = true;
            } else if (check_list_tecnico.pastillas_freno_delanteras_izq === "Medio") {
                document.getElementById('pastillas_freno_delanteras_izq_medio').checked = true;
            } else if (check_list_tecnico.pastillas_freno_delanteras_izq === "Malo") {
                document.getElementById('pastillas_freno_delanteras_izq_malo').checked = true;
            }

            // limpiaparabrisas_derecho

            if (check_list_tecnico.limpiaparabrisas_derecho === "Bueno") {
                document.getElementById('limpiaparabrisas_derecho_bueno').checked = true;
            } else if (check_list_tecnico.limpiaparabrisas_derecho === "Medio") {
                document.getElementById('limpiaparabrisas_derecho_medio').checked = true;
            } else if (check_list_tecnico.limpiaparabrisas_derecho === "Malo") {
                document.getElementById('limpiaparabrisas_derecho_malo').checked = true;
            }

            // limpiaparabrisas_izquierdo

            if (check_list_tecnico.limpiaparabrisas_izquierdo === "Bueno") {
                document.getElementById('limpiaparabrisas_izquierdo_bueno').checked = true;
            } else if (check_list_tecnico.limpiaparabrisas_izquierdo === "Medio") {
                document.getElementById('limpiaparabrisas_izquierdo_medio').checked = true;
            } else if (check_list_tecnico.limpiaparabrisas_izquierdo === "Malo") {
                document.getElementById('limpiaparabrisas_izquierdo_malo').checked = true;
            }

            // faro_derecho_luces

            if (check_list_tecnico.faro_derecho_luces === "Bueno") {
                document.getElementById('faro_derecho_luces_bueno').checked = true;
            } else if (check_list_tecnico.faro_derecho_luces === "Medio") {
                document.getElementById('faro_derecho_luces_medio').checked = true;
            } else if (check_list_tecnico.faro_derecho_luces === "Malo") {
                document.getElementById('faro_derecho_luces_malo').checked = true;
            }

            // faro_izquiero_luces

            if (check_list_tecnico.faro_izquiero_luces === "Bueno") {
                document.getElementById('faro_izquiero_luces_bueno').checked = true;
            } else if (check_list_tecnico.faro_izquiero_luces === "Medio") {
                document.getElementById('faro_izquiero_luces_medio').checked = true;
            } else if (check_list_tecnico.faro_izquiero_luces === "Malo") {
                document.getElementById('faro_izquiero_luces_malo').checked = true;
            }

            // anticongelante

            if (check_list_tecnico.anticongelante === "Bueno") {
                document.getElementById('anticongelante_bueno').checked = true;
            } else if (check_list_tecnico.anticongelante === "Medio") {
                document.getElementById('anticongelante_medio').checked = true;
            } else if (check_list_tecnico.anticongelante === "Malo") {
                document.getElementById('anticongelante_malo').checked = true;
            }

            // liquido_direccion_hidraulica

            if (check_list_tecnico.liquido_direccion_hidraulica === "Bueno") {
                document.getElementById('liquido_direccion_hidraulica_bueno').checked = true;
            } else if (check_list_tecnico.liquido_direccion_hidraulica === "Medio") {
                document.getElementById('liquido_direccion_hidraulica_medio').checked = true;
            } else if (check_list_tecnico.liquido_direccion_hidraulica === "Malo") {
                document.getElementById('liquido_direccion_hidraulica_malo').checked = true;
            } else if (check_list_tecnico.liquido_direccion_hidraulica === "NA") {
                document.getElementById('liquido_direccion_hidraulica_na').checked = true;
            }

            // banda_accesorios

            if (check_list_tecnico.banda_accesorios === "Bueno") {
                document.getElementById('banda_accesorios_bueno').checked = true;
            } else if (check_list_tecnico.banda_accesorios === "Medio") {
                document.getElementById('banda_accesorios_medio').checked = true;
            } else if (check_list_tecnico.banda_accesorios === "Malo") {
                document.getElementById('banda_accesorios_malo').checked = true;
            }

            // revision_bateria

            if (check_list_tecnico.revision_bateria === "Bueno") {
                document.getElementById('revision_bateria_bueno').checked = true;
            } else if (check_list_tecnico.revision_bateria === "Medio") {
                document.getElementById('revision_bateria_medio').checked = true;
            } else if (check_list_tecnico.revision_bateria === "Malo") {
                document.getElementById('revision_bateria_malo').checked = true;
            }
        })
        .catch(function (err) {
            console.log(err);
        });
}

// Aqui se manda a llamar toda la funcion anterior.
cargarCheckListTecnico();