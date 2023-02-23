function cargarOrdenes() {
  fetch('./backend/gerente/getOrders.php', {
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
      // "opciones"
    ];

    var table = document.createElement('table');
    table.className = "table";
    var thead = document.createElement('thead');

    var tr = document.createElement('tr');
    var th = document.createElement('th');
    var text = document.createTextNode('#');
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
    text = document.createTextNode('Estatus');
    th.appendChild(text);
    tr.appendChild(th);


    /* th = document.createElement('th');
    text = document.createTextNode('Opciones');
    th.appendChild(text);
    tr.appendChild(th); */

    thead.appendChild(tr);
    table.appendChild(thead);

    var tbody = document.createElement('tbody');
    for (var i = 0; i < data.length; i++) {
      var tr = document.createElement('tr');
      for (var j = 0; j < columnNames.length; j++) {
        var td = document.createElement('td');
        if (columnNames[j] === 'opciones') {

          /* var btn = document.createElement('input');
          btn.type = "button";
          btn.className = "button-table-secondary btnVer";

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

          btn.addEventListener('click', mostrarOrdenServicioEspecifica, false); */

        } else {
          var text = document.createTextNode(data[i][columnNames[j]]);
        }
        td.appendChild(text);
        tr.appendChild(td);
      }
      tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    document.getElementById("tabla").appendChild(table);

    const dataTable = new simpleDatatables.DataTable("table", {
      perPageSelect: [5, 10, 15, ["Todos", -1]],
      searchable: true,
      perPage: 5,
      labels: {
        placeholder: "Buscar...",
        searchTitle: "Buscar en tabla",
        perPage: "Entradas por página",
        noRows: "No se encontraron entradas",
        info: "Mostrando desde {start} hasta {end} de {rows} entradas",
        noResults: "No se encontraron resultados",
      },
      tableRender: (_data, table, type) => {
        if (type === "print") {
          return table
        }
        const tHead = table.childNodes[0]
        const filterHeaders = {
          nodeName: "TR",
          childNodes: tHead.childNodes[0].childNodes.map(
            (_th, index) => ({
              nodeName: "TD",
              childNodes: [
                {
                  nodeName: "INPUT",
                  attributes: {
                    class: "datatable-input search-margin-fix",
                    type: "search",
                    placeholder: "Buscar...",
                    "data-columns": `[${index}]`
                  }
                }
              ]
            })
          )
        }
        tHead.childNodes.push(filterHeaders)
        return table
      }
    });

  }).catch(function (err) {
    console.log(err);
  });
}

var mostrarOrdenServicioEspecifica = function () {
  /* var orden_id = this.getAttribute("order_id");
  document.getElementById('orden_servicio_contenido').style.display = 'block';

  document.getElementById('orden_servicio_contenido').setAttribute("orden_actual", orden_id);

  getComentariosAsesor(orden_id);
  getComentariosCalidad(orden_id);
  getComentariosLavado(orden_id);
  getComentariosTecnicos(orden_id);
  cargarCheckListTecnico(orden_id);
  cargarCheckListCalidad(orden_id);

  document.getElementById("order_info_folio").innerHTML = this.getAttribute("order_id");
  document.getElementById("order_info_vehiculo").innerHTML = this.getAttribute("vehiculo");
  document.getElementById("order_info_placas").innerHTML = this.getAttribute("placas");
  document.getElementById("order_info_vin").innerHTML = this.getAttribute("vin");

  document.getElementById("cliente_nombre").innerHTML = this.getAttribute("nombre_cliente");
  document.getElementById("cliente_telefono").innerHTML = this.getAttribute("telefono");
  document.getElementById("cliente_rfc").innerHTML = this.getAttribute("rfc");

  document.getElementById("estatus_combobox").value = this.getAttribute("estatus");

  mostrarImagenesChiquitas(this);

  getOperacionesList(orden_id); */
};


function resumenMensual() {
  fetch('./backend/gerente/getResumenMensual.php', {
    method: 'POST',
    body: { info: '' }
  }).then(function (response) {
    return response.text();
  }).then(function (return_data) {

    if (return_data == "Sin operaciones") {

      Toastify({
        text: "Sin operaciones",
        duration: 3000,
        className: "toast-error",
      }).showToast();

      return;
    }

    var losDatos = JSON.parse(return_data);
    var cantidadArr = [];

    // Juego de fors para poder tener meses en 0 si no hay operaciones en ese mes, lo tenemos que hacer aqui porque en la DB no es posible o esta mas complicado.
    // for de 12 posiciones, 1 para cada mes
    for (let mesIndex = 0; mesIndex < 12; mesIndex++) {
      cantidadArr[mesIndex] = 0; // asignamos 0 ordenes al mes que estamos evaluando
      
      // recorremos todos los datos recibidos en busqueda del mes que estamos evaluando
      for (let i = 0; i < losDatos.length; i++) {
        const element = losDatos[i];

        if (mesIndex + 1 == element.mes) // identifica si coinciden los meses
        cantidadArr[mesIndex] = parseInt(element.cantidad) // Hay un match, encontramos operaciones en el mes evaluado
      }

    }

    console.log(cantidadArr);

    

    const ctx = document.getElementById('resumenMensual');

    const data = {
      labels: ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'],
      datasets: [
        {
          label: 'Ordenes atendidas',
          data: cantidadArr, // al final tenemos un arreglo de la siguiente manera [0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] que corresponde un registro por mes. 
          borderColor: '#FF6384',
          backgroundColor: '#FFB1C1',
          pointStyle: 'circle',
          pointRadius: 10,
          pointHoverRadius: 15
        }
      ]
    };

    new Chart(ctx, {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: (ctx) => 'Resumen mensual',
          }
        }
      }
    });

  }).catch(function (err) {
    console.log(err);
  });
};

cargarOrdenes();
resumenMensual();
