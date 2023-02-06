function guardarCheckListCalidad() {
  event.preventDefault(); // Previene el evento submit (el que recarga la pagina);

  // Obtiene todos los datos de la forma
  let checkListCalidadForm = new FormData(document.getElementById("checkListCalidadForm"));

  // Convierte todos los datos del formulario a formato json
  let formDataObj = {};
  checkListCalidadForm.forEach((value, key) => (formDataObj[key] = value));
  
  // console.log("==== POST check_list_calidad ====");
  // console.log(JSON.stringify(formDataObj));

  // Manda los datos al backend para ser guardados ahi 
  fetch('./backend/postCheckListCalidad.php', {
    method: 'POST',
    body: JSON.stringify({
      orderNo: document.getElementById('orden_servicio_contenido').getAttribute("orden_actual"),
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



function cargarCheckListCalidad(orderNo) {
  fetch('./backend/getCheckListCalidad.php', {
    method: 'POST',
    body: JSON.stringify({ orderNo: orderNo }),
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
      var check_list_calidad = JSON.parse(todas_las_filas[0].check_list_calidad);

      // console.log("==== GET check_list_calidad ====");
      // console.log(check_list_calidad);

      // bayoneta

      if (check_list_calidad.bayoneta === "Bueno") {
        document.getElementById('bayoneta_bueno').checked = true;
      } else if (check_list_calidad.bayoneta === "Malo") {
        document.getElementById('bayoneta_malo').checked = true;
      }

      // aceite_motor

      if (check_list_calidad.aceite_motor === "Bueno") {
        document.getElementById('aceite_motor_bueno').checked = true;
      } else if (check_list_calidad.aceite_motor === "Malo") {
        document.getElementById('aceite_motor_malo').checked = true;
      }

      // filtro_aceite

      if (check_list_calidad.filtro_aceite === "Bueno") {
        document.getElementById('filtro_aceite_bueno').checked = true;
      } else if (check_list_calidad.filtro_aceite === "Malo") {
        document.getElementById('filtro_aceite_malo').checked = true;
      }

      // tapon_carter

      if (check_list_calidad.tapon_carter === "Bueno") {
        document.getElementById('tapon_carter_bueno').checked = true;
      } else if (check_list_calidad.tapon_carter === "Malo") {
        document.getElementById('tapon_carter_malo').checked = true;
      }

      // filtro_aire_nuevo

      if (check_list_calidad.filtro_aire_nuevo === "Bueno") {
        document.getElementById('filtro_aire_nuevo_bueno').checked = true;
      } else if (check_list_calidad.filtro_aire_nuevo === "Malo") {
        document.getElementById('filtro_aire_nuevo_malo').checked = true;
      }

      // filtro_combustible

      if (check_list_calidad.filtro_combustible === "Bueno") {
        document.getElementById('filtro_combustible_bueno').checked = true;
      } else if (check_list_calidad.filtro_combustible === "Malo") {
        document.getElementById('filtro_combustible_malo').checked = true;
      }

      // conexion_filtro_combustible

      if (check_list_calidad.conexion_filtro_combustible === "Bueno") {
        document.getElementById('conexion_filtro_combustible_bueno').checked = true;
      } else if (check_list_calidad.conexion_filtro_combustible === "Malo") {
        document.getElementById('conexion_filtro_combustible_malo').checked = true;
      }

      // diagnostico_bateria

      if (check_list_calidad.diagnostico_bateria === "Bueno") {
        document.getElementById('diagnostico_bateria_bueno').checked = true;
      } else if (check_list_calidad.diagnostico_bateria === "Malo") {
        document.getElementById('diagnostico_bateria_malo').checked = true;
      }

      // borne_bateria

      if (check_list_calidad.borne_bateria === "Bueno") {
        document.getElementById('borne_bateria_bueno').checked = true;
      } else if (check_list_calidad.borne_bateria === "Malo") {
        document.getElementById('borne_bateria_malo').checked = true;
      }

      // aceite_transmision

      if (check_list_calidad.aceite_transmision === "Bueno") {
        document.getElementById('aceite_transmision_bueno').checked = true;
      } else if (check_list_calidad.aceite_transmision === "Malo") {
        document.getElementById('aceite_transmision_malo').checked = true;
      }

      // nivel_anticongelante

      if (check_list_calidad.nivel_anticongelante === "Bueno") {
        document.getElementById('nivel_anticongelante_bueno').checked = true;
      } else if (check_list_calidad.nivel_anticongelante === "Malo") {
        document.getElementById('nivel_anticongelante_malo').checked = true;
      }

      // nivel_direccion

      if (check_list_calidad.nivel_direccion === "Bueno") {
        document.getElementById('nivel_direccion_bueno').checked = true;
      } else if (check_list_calidad.nivel_direccion === "Malo") {
        document.getElementById('nivel_direccion_malo').checked = true;
      }

      // diagnostico_banda

      if (check_list_calidad.diagnostico_banda === "Bueno") {
        document.getElementById('diagnostico_banda_bueno').checked = true;
      } else if (check_list_calidad.diagnostico_banda === "Malo") {
        document.getElementById('diagnostico_banda_malo').checked = true;
      }

      // diagnostico_mangeras

      if (check_list_calidad.diagnostico_mangeras === "Bueno") {
        document.getElementById('diagnostico_mangeras_bueno').checked = true;
      } else if (check_list_calidad.diagnostico_mangeras === "Malo") {
        document.getElementById('diagnostico_mangeras_malo').checked = true;
      }

      // diagnostico_arneses

      if (check_list_calidad.diagnostico_arneses === "Bueno") {
        document.getElementById('diagnostico_arneses_bueno').checked = true;
      } else if (check_list_calidad.diagnostico_arneses === "Malo") {
        document.getElementById('diagnostico_arneses_malo').checked = true;
      }

      // inspeccion_neumaticos

      if (check_list_calidad.inspeccion_neumaticos === "Bueno") {
        document.getElementById('inspeccion_neumaticos_bueno').checked = true;
      } else if (check_list_calidad.inspeccion_neumaticos === "Malo") {
        document.getElementById('inspeccion_neumaticos_malo').checked = true;
      }

      // presion_neumaticos

      if (check_list_calidad.presion_neumaticos === "Bueno") {
        document.getElementById('presion_neumaticos_bueno').checked = true;
      } else if (check_list_calidad.presion_neumaticos === "Malo") {
        document.getElementById('presion_neumaticos_malo').checked = true;
      }

      // presion_extra

      if (check_list_calidad.presion_extra === "Bueno") {
        document.getElementById('presion_extra_bueno').checked = true;
      } else if (check_list_calidad.presion_extra === "Malo") {
        document.getElementById('presion_extra_malo').checked = true;
      }

      // torque_birlos

      if (check_list_calidad.torque_birlos === "Bueno") {
        document.getElementById('torque_birlos_bueno').checked = true;
      } else if (check_list_calidad.torque_birlos === "Malo") {
        document.getElementById('torque_birlos_malo').checked = true;
      }

      // luces

      if (check_list_calidad.luces === "Bueno") {
        document.getElementById('luces_bueno').checked = true;
      } else if (check_list_calidad.luces === "Malo") {
        document.getElementById('luces_malo').checked = true;
      }

      // operacion_limpiabrisas

      if (check_list_calidad.operacion_limpiabrisas === "Bueno") {
        document.getElementById('operacion_limpiabrisas_bueno').checked = true;
      } else if (check_list_calidad.operacion_limpiabrisas === "Malo") {
        document.getElementById('operacion_limpiabrisas_malo').checked = true;
      }

      // vida_util_frenos

      if (check_list_calidad.vida_util_frenos === "Bueno") {
        document.getElementById('vida_util_frenos_bueno').checked = true;
      } else if (check_list_calidad.vida_util_frenos === "Malo") {
        document.getElementById('vida_util_frenos_malo').checked = true;
      }

      // configuracion_fabrica

      if (check_list_calidad.configuracion_fabrica === "Bueno") {
        document.getElementById('configuracion_fabrica_bueno').checked = true;
      } else if (check_list_calidad.configuracion_fabrica === "Malo") {
        document.getElementById('configuracion_fabrica_malo').checked = true;
      }

      // correceria_limpia

      if (check_list_calidad.correceria_limpia === "Bueno") {
        document.getElementById('correceria_limpia_bueno').checked = true;
      } else if (check_list_calidad.correceria_limpia === "Malo") {
        document.getElementById('correceria_limpia_malo').checked = true;
      }

      // dano_carroceria

      if (check_list_calidad.dano_carroceria === "Bueno") {
        document.getElementById('dano_carroceria_bueno').checked = true;
      } else if (check_list_calidad.dano_carroceria === "Malo") {
        document.getElementById('dano_carroceria_malo').checked = true;
      }

      // vestiduras_limpias

      if (check_list_calidad.vestiduras_limpias === "Bueno") {
        document.getElementById('vestiduras_limpias_bueno').checked = true;
      } else if (check_list_calidad.vestiduras_limpias === "Malo") {
        document.getElementById('vestiduras_limpias_malo').checked = true;
      }

      // volante_limpio

      if (check_list_calidad.volante_limpio === "Bueno") {
        document.getElementById('volante_limpio_bueno').checked = true;
      } else if (check_list_calidad.volante_limpio === "Malo") {
        document.getElementById('volante_limpio_malo').checked = true;
      }

      // palanca_limpia

      if (check_list_calidad.palanca_limpia === "Bueno") {
        document.getElementById('palanca_limpia_bueno').checked = true;
      } else if (check_list_calidad.palanca_limpia === "Malo") {
        document.getElementById('palanca_limpia_malo').checked = true;
      }

      // tablero_limpio

      if (check_list_calidad.tablero_limpio === "Bueno") {
        document.getElementById('tablero_limpio_bueno').checked = true;
      } else if (check_list_calidad.tablero_limpio === "Malo") {
        document.getElementById('tablero_limpio_malo').checked = true;
      }

      // alfombra_limpia

      if (check_list_calidad.alfombra_limpia === "Bueno") {
        document.getElementById('alfombra_limpia_bueno').checked = true;
      } else if (check_list_calidad.alfombra_limpia === "Malo") {
        document.getElementById('alfombra_limpia_malo').checked = true;
      }

      // retrovisores_ajustados

      if (check_list_calidad.retrovisores_ajustados === "Bueno") {
        document.getElementById('retrovisores_ajustados_bueno').checked = true;
      } else if (check_list_calidad.retrovisores_ajustados === "Malo") {
        document.getElementById('retrovisores_ajustados_malo').checked = true;
      }

      // motor_limpio

      if (check_list_calidad.motor_limpio === "Bueno") {
        document.getElementById('motor_limpio_bueno').checked = true;
      } else if (check_list_calidad.motor_limpio === "Malo") {
        document.getElementById('motor_limpio_malo').checked = true;
      }

      // bastidor_limpio

      if (check_list_calidad.bastidor_limpio === "Bueno") {
        document.getElementById('bastidor_limpio_bueno').checked = true;
      } else if (check_list_calidad.bastidor_limpio === "Malo") {
        document.getElementById('bastidor_limpio_malo').checked = true;
      }

      // rines_limpios

      if (check_list_calidad.rines_limpios === "Bueno") {
        document.getElementById('rines_limpios_bueno').checked = true;
      } else if (check_list_calidad.rines_limpios === "Malo") {
        document.getElementById('rines_limpios_malo').checked = true;
      }

      // a_tiempo

      if (check_list_calidad.a_tiempo === "Bueno") {
        document.getElementById('a_tiempo_bueno').checked = true;
      } else if (check_list_calidad.a_tiempo === "Malo") {
        document.getElementById('a_tiempo_malo').checked = true;
      }

      // protecciones

      if (check_list_calidad.protecciones === "Bueno") {
        document.getElementById('protecciones_bueno').checked = true;
      } else if (check_list_calidad.protecciones === "Malo") {
        document.getElementById('protecciones_malo').checked = true;
      }

      // piezas

      if (check_list_calidad.piezas === "Bueno") {
        document.getElementById('piezas_bueno').checked = true;
      } else if (check_list_calidad.piezas === "Malo") {
        document.getElementById('piezas_malo').checked = true;
      }

      // hoja_inspeccion

      if (check_list_calidad.hoja_inspeccion === "Bueno") {
        document.getElementById('hoja_inspeccion_bueno').checked = true;
      } else if (check_list_calidad.hoja_inspeccion === "Malo") {
        document.getElementById('hoja_inspeccion_malo').checked = true;
      }

      // tiempo_programado

      if (check_list_calidad.tiempo_programado === "Bueno") {
        document.getElementById('tiempo_programado_bueno').checked = true;
      } else if (check_list_calidad.tiempo_programado === "Malo") {
        document.getElementById('tiempo_programado_malo').checked = true;
      }

      // objetos_personales

      if (check_list_calidad.objetos_personales === "Bueno") {
        document.getElementById('objetos_personales_bueno').checked = true;
      } else if (check_list_calidad.objetos_personales === "Malo") {
        document.getElementById('objetos_personales_malo').checked = true;
      }

      // vip_vehiculo

      if (check_list_calidad.vip_vehiculo === "Bueno") {
        document.getElementById('vip_vehiculo_bueno').checked = true;
      } else if (check_list_calidad.vip_vehiculo === "Malo") {
        document.getElementById('vip_vehiculo_malo').checked = true;
      }

      // campanas_reportadas

      if (check_list_calidad.campanas_reportadas === "Bueno") {
        document.getElementById('campanas_reportadas_bueno').checked = true;
      } else if (check_list_calidad.campanas_reportadas === "Malo") {
        document.getElementById('campanas_reportadas_malo').checked = true;
      }

      // torque_caliper

      if (check_list_calidad.torque_caliper === "Bueno") {
        document.getElementById('torque_caliper_bueno').checked = true;
      } else if (check_list_calidad.torque_caliper === "Malo") {
        document.getElementById('torque_caliper_malo').checked = true;
      }

      // liquido_frenos

      if (check_list_calidad.liquido_frenos === "Bueno") {
        document.getElementById('liquido_frenos_bueno').checked = true;
      } else if (check_list_calidad.liquido_frenos === "Malo") {
        document.getElementById('liquido_frenos_malo').checked = true;
      }

      // asentamiento_balatas

      if (check_list_calidad.asentamiento_balatas === "Bueno") {
        document.getElementById('asentamiento_balatas_bueno').checked = true;
      } else if (check_list_calidad.asentamiento_balatas === "Malo") {
        document.getElementById('asentamiento_balatas_malo').checked = true;
      }

      // prueba_camino

      if (check_list_calidad.prueba_camino === "Bueno") {
        document.getElementById('prueba_camino_bueno').checked = true;
      } else if (check_list_calidad.prueba_camino === "Malo") {
        document.getElementById('prueba_camino_malo').checked = true;
      }

      // vibra_pedal

      if (check_list_calidad.vibra_pedal === "Bueno") {
        document.getElementById('vibra_pedal_bueno').checked = true;
      } else if (check_list_calidad.vibra_pedal === "Malo") {
        document.getElementById('vibra_pedal_malo').checked = true;
      }

      // viaje_pedal

      if (check_list_calidad.viaje_pedal === "Bueno") {
        document.getElementById('viaje_pedal_bueno').checked = true;
      } else if (check_list_calidad.viaje_pedal === "Malo") {
        document.getElementById('viaje_pedal_malo').checked = true;
      }

      // pedal_esponjoso

      if (check_list_calidad.pedal_esponjoso === "Bueno") {
        document.getElementById('pedal_esponjoso_bueno').checked = true;
      } else if (check_list_calidad.pedal_esponjoso === "Malo") {
        document.getElementById('pedal_esponjoso_malo').checked = true;
      }

      // pedal_duro

      if (check_list_calidad.pedal_duro === "Bueno") {
        document.getElementById('pedal_duro_bueno').checked = true;
      } else if (check_list_calidad.pedal_duro === "Malo") {
        document.getElementById('pedal_duro_malo').checked = true;
      }

      // operacion_frenado

      if (check_list_calidad.operacion_frenado === "Bueno") {
        document.getElementById('operacion_frenado_bueno').checked = true;
      } else if (check_list_calidad.operacion_frenado === "Malo") {
        document.getElementById('operacion_frenado_malo').checked = true;
      }

      // frenos_ruidosos

      if (check_list_calidad.frenos_ruidosos === "Bueno") {
        document.getElementById('frenos_ruidosos_bueno').checked = true;
      } else if (check_list_calidad.frenos_ruidosos === "Malo") {
        document.getElementById('frenos_ruidosos_malo').checked = true;
      }

      // ajuste_correcto_freno

      if (check_list_calidad.ajuste_correcto_freno === "Bueno") {
        document.getElementById('ajuste_correcto_freno_bueno').checked = true;
      } else if (check_list_calidad.ajuste_correcto_freno === "Malo") {
        document.getElementById('ajuste_correcto_freno_malo').checked = true;
      }

    })
    .catch(function (err) {
      console.log(err);
    });
}
