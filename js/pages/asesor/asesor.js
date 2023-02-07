function cargarOrdenes() {
  fetch('./backend/getOrders.php', {
    method: 'POST',
    body: { info: '' }
  }).then(function (response) {
    return response.text();
  }).then(function (return_data) {

    if (return_data == "no hay ordenes de servicio") {

      Toastify({
        text: "No hay ordenes de servicio",
        duration: 3000,
        className: "toast-error",
      }).showToast();

      return;
    }

    document.getElementById("tabla").innerHTML = "";

    var data = JSON.parse(return_data);

    var columnNames = [
      "idordenDeServicio",
      "vin",
      "modelo",
      "placas",
      "fechaEntrada",
      "fechaSalida",
      "estatus",
      // "alertas",
      "opciones"
    ];

    var table = document.createElement('table');
    var thead = document.createElement('thead');

    var tr = document.createElement('tr');
    var th = document.createElement('th');
    var text = document.createTextNode('Orden De Servicio');
    th.appendChild(text);
    tr.appendChild(th);
    th = document.createElement('th');
    text = document.createTextNode('Vin');
    th.appendChild(text);
    tr.appendChild(th);
    th = document.createElement('th');
    text = document.createTextNode('Tipo de vehiculo');
    th.appendChild(text);
    tr.appendChild(th);
    th = document.createElement('th');
    text = document.createTextNode('Placas');
    th.appendChild(text);
    tr.appendChild(th);
    th = document.createElement('th');
    text = document.createTextNode('Fecha entrada');
    th.appendChild(text);
    tr.appendChild(th);
    th = document.createElement('th');
    text = document.createTextNode('Fecha salida');
    th.appendChild(text);
    tr.appendChild(th);
    /* th = document.createElement('th');
    text = document.createTextNode('Estatus');
    th.appendChild(text);
    tr.appendChild(th);
    th.style.cssText=" background-color: #222;  color: whitesmoke; padding: 15px;   font-size: 120%; text-align: center;"; */
    th = document.createElement('th');
    text = document.createTextNode('Atencion');
    th.appendChild(text);
    tr.appendChild(th);
    th = document.createElement('th');
    text = document.createTextNode('Opciones');
    th.appendChild(text);
    tr.appendChild(th);

    thead.appendChild(tr);

    table.appendChild(thead);


    for (var i = 0; i < data.length; i++) {
      var tr = document.createElement('tr');
      for (var j = 0; j < columnNames.length; j++) {
        var td = document.createElement('td');
        if (columnNames[j] === 'opciones') {

          var btn = document.createElement('input');
          btn.type = "button";
          btn.className = "button-table-secondary btnVer";

          /*
          * Detalles de cada orden, la guardamos en el boton para no tener que hacer otro GET
          */
          btn.setAttribute("order_id", data[i]['idordenDeServicio']);
          btn.setAttribute("vehiculo", data[i]['modelo'] + " " + data[i]['ano']);
          btn.setAttribute("placas", data[i]['placas']);
          btn.setAttribute("vin", data[i]['vin']);
          btn.setAttribute("nombre_cliente", data[i]['nombre'] + " " + data[i]['apellido']);
          btn.setAttribute("telefono", data[i]['telefono'] || "NA");
          btn.setAttribute("rfc", data[i]['rfc'] || "NA");
          btn.setAttribute("estatus", data[i]['estatus'] || "NA");

          btn.setAttribute("img_url1", data[i]['img_url1'] || "NA");
          btn.setAttribute("img_url2", data[i]['img_url2'] || "NA");
          btn.setAttribute("img_url3", data[i]['img_url3'] || "NA");
          btn.setAttribute("img_url4", data[i]['img_url4'] || "NA");

          btn.value = "     Ver     ";
          var text = btn; // text va a tener adentro un boton

          btn.addEventListener('click', mostrarOrdenServicioEspecifica, false);

        } else {
          var text = document.createTextNode(data[i][columnNames[j]]);
        }
        td.appendChild(text);
        tr.appendChild(td);
      }
      table.appendChild(tr);
    }
    document.getElementById("tabla").appendChild(table);

  }).catch(function (err) {
    console.log(err);
  });
}

/*
* Todo lo referente a la UI
* Se mete todo en una sola funcion y se corre
*/
function userInterfaseInit() {
  // Oculata todo el menu hasta que seleccionemos una orden de servicio que ver.
  document.getElementById('orden_servicio_contenido').style.display = 'none';
}

var mostrarOrdenServicioEspecifica = function () {
  var orden_id = this.getAttribute("order_id");
  document.getElementById('orden_servicio_contenido').style.display = 'block';

  document.getElementById('orden_servicio_contenido').setAttribute("orden_actual", orden_id);

  getComentariosAsesor(orden_id);
  getComentariosCalidad(orden_id);
  getComentariosLavado(orden_id);
  getComentariosTecnicos(orden_id);
  cargarCheckListTecnico(orden_id);
  cargarCheckListCalidad(orden_id);

  /*
  * Mostrar datos de la orden
  */
  document.getElementById("order_info_folio").innerHTML = this.getAttribute("order_id");
  document.getElementById("order_info_vehiculo").innerHTML = this.getAttribute("vehiculo");
  document.getElementById("order_info_placas").innerHTML = this.getAttribute("placas");
  document.getElementById("order_info_vin").innerHTML = this.getAttribute("vin");

  document.getElementById("cliente_nombre").innerHTML = this.getAttribute("nombre_cliente");
  document.getElementById("cliente_telefono").innerHTML = this.getAttribute("telefono");
  document.getElementById("cliente_rfc").innerHTML = this.getAttribute("rfc");

  document.getElementById("estatus_combobox").value = this.getAttribute("estatus");

  mostrarImagenesChiquitas(this);

  getOperacionesList(orden_id);
};

function getOperacionesList(orden_id) {
  fetch('./backend/getOperaciones.php', {
    method: 'POST',
    body: JSON.stringify({ orden_id: orden_id })
  })
    .then(function (response) {
      return response.text();
    })
    .then(function (return_data) {

      // console.log(return_data);

      if (return_data === "la orden de servicio no tiene operaciones") {

        Toastify({
          text: "Error la orden de servicio no tiene operaciones",
          duration: 3000,
          className: "toast-error",
        }).showToast();

        return;
      }

      document.getElementById('operaciones').innerHTML = "";

      let data = JSON.parse(return_data);
      var div = document.createElement('div');

      for (let i = 0; i < data.length; i++) {
        const operacion = data[i];
        var span = document.createElement('span');
        var text = document.createTextNode("-" + operacion['descripcion']);
        span.appendChild(text);
        div.appendChild(span);
        var br = document.createElement('br');
        div.appendChild(br);
      }
      div.setAttribute("style", "background-color:#F2F2F2 ;");
      document.getElementById('operaciones').appendChild(div);

    })
    .catch(function (err) {
      console.log(err);
    });
}

function guardarEstatus() {
  event.preventDefault(); // Previene el evento submit (el que recarga la pagina);

  // Obtiene todos los datos de la forma
  let selected_status = document.getElementById("estatus_combobox").value;

  // Manda los datos al backend para ser guardados ahi 
  fetch('./backend/postEstatus.php', {
    method: 'POST',
    body: JSON.stringify({
      orderNo: document.getElementById('orden_servicio_contenido').getAttribute("orden_actual"),
      data: selected_status
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
        
        Toastify({
          text: "Registro actualizado",
          duration: 3000,
          className: "toast-success",
        }).showToast();
  
        setTimeout(function () {
          // document.location.reload();
        }, 3000);

      } else {
        console.log(return_data);

        Toastify({
          text: "Error no se pudo guardar la informacion.",
          duration: 3000,
          className: "toast-error",
        }).showToast();

      }
    })
    .catch(function (err) {
      console.log(err);
    });
}

// Inicializar las funciones aqui despues del codigo
cargarOrdenes();
userInterfaseInit();
