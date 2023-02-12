/*
* VEHICULOS
*/
function cargarVehiculos() {

  fetch('./backend/administrador/getVehiculosFull.php', {
    method: 'GET',
  }).then(function (response) {
    return response.text();
  }).then(function (return_data) {
    if (return_data == "no hay vehiculos") {

      Toastify({
        text: "No hay vehiculos",
        duration: 3000,
        className: "toast-error",
      }).showToast();

      return;
    }

    var data = JSON.parse(return_data);

    var columnNames = [
      "idvehiculos",
      "ano",
      "vin",
      "placas",
      "modelo",
      "marca",
      "cliente",
      "rfc",
      "telefono"
    ];

    var table = document.createElement('table');
    table.className = 'table';

    var thead = document.createElement('thead');
    // Titulos solamente
    var tr = document.createElement('tr');

    var th = document.createElement('th');
    var text = document.createTextNode('Id');
    th.appendChild(text);
    tr.appendChild(th);
    var th = document.createElement('th');
    var text = document.createTextNode('Ano');
    th.appendChild(text);
    tr.appendChild(th);
    var th = document.createElement('th');
    var text = document.createTextNode('VIN');
    th.appendChild(text);
    tr.appendChild(th);
    th = document.createElement('th');
    text = document.createTextNode('Placas');
    th.appendChild(text);
    tr.appendChild(th);
    th = document.createElement('th');
    text = document.createTextNode('Modelo');
    th.appendChild(text);
    tr.appendChild(th);
    th = document.createElement('th');
    text = document.createTextNode('Marca');
    th.appendChild(text);
    tr.appendChild(th);

    th = document.createElement('th');
    text = document.createTextNode('Cliente');
    th.appendChild(text);
    tr.appendChild(th);

    th = document.createElement('th');
    text = document.createTextNode('RFC');
    th.appendChild(text);
    tr.appendChild(th);

    th = document.createElement('th');
    text = document.createTextNode('Telefono');
    th.appendChild(text);
    tr.appendChild(th);
    /* th = document.createElement('th');
    text = document.createTextNode('Opciones');
    th.appendChild(text);
    tr.appendChild(th); */
    thead.appendChild(tr);
    table.appendChild(thead);

    var tbody = document.createElement('tbody');
    // Lenado de la tabla 
    for (var i = 0; i < data.length; i++) {
      var tr = document.createElement('tr');
      for (var j = 0; j < columnNames.length; j++) {
        var td = document.createElement('td');
        if (columnNames[j] === 'opciones') {

        } else {
          var text = document.createTextNode(data[i][columnNames[j]]);

          td.appendChild(text);
          tr.appendChild(td);
        }
        tbody.appendChild(tr);
      }
      table.appendChild(tbody);
    }


    document.getElementById("tabla_vehiculos").appendChild(table);

    var selectedRows = [];

    const dataTable = new simpleDatatables.DataTable("table", {
      paging: false,
      scrollY: "30vh",
      /* rowNavigation: true, */
      tabIndex: 1,
      labels: {
        placeholder: "Buscar...",
        searchTitle: "Buscar en tabla",
        perPage: "Entradas por página",
        noRows: "No se encontraron entradas",
        info: "Mostrando desde {start} hasta {end} de {rows} entradas",
        noResults: "No se encontraron resultados",
        searchTitle: "sdfasdgasgasdgasdg"
      },
      rowRender: (_row, tr, index) => {
        if (!selectedRows.includes(index)) { return }
        if (!tr.attributes) { tr.attributes = {} }
        if (!tr.attributes.class) { tr.attributes.class = "selected" }
        else { tr.attributes.class += " selected" }
        return tr
      },
      /* tableRender: (_data, table, type) => {
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
      } */

    });

    dataTable.on('datatable.selectrow', function (row, event) {
      event.preventDefault()

      selectedRows = [];
      selectedRows.push(row);

      dataTable.update()

      let rows = dataTable.rows;
      var id_vehiculo = rows.dt.data.data[row][0].text; // Id del vehiculo seleccionado
      var ano = rows.dt.data.data[row][1].text; // Año del vehiculo seleccionado
      var vin = rows.dt.data.data[row][2].text; // VIN del vehiculo seleccionado
      var placas = rows.dt.data.data[row][3].text; // Placas del vehiculo seleccionado
      var modelo = rows.dt.data.data[row][4].text; // Modelo del vehiculo seleccionado
      var marca = rows.dt.data.data[row][5].text; // Marca del vehiculo seleccionado
      var nombre_cliente = rows.dt.data.data[row][6].text; // Cliente del vehiculo seleccionado
      var rfc = rows.dt.data.data[row][7].text; // RFC del vehiculo seleccionado
      var telefono = rows.dt.data.data[row][8].text; // Telefono del vehiculo seleccionado

      console.log(nombre_cliente);

    });

  }).catch(function (err) {
    console.log(err);
  });
}

/*
* OPERACIONES
*/
function cargarOperaciones() {

  fetch('./backend/administrador/getOperaciones.php', {
    method: 'GET',
  }).then(function (response) {
    return response.text();
  }).then(function (return_data) {
    if (return_data == "no hay operaciones") {

      Toastify({
        text: "No hay operaciones",
        duration: 3000,
        className: "toast-error",
      }).showToast();

      return;
    }

    console.log(return_data)

    var data = JSON.parse(return_data);

    var columnNames = [
      "idoperaciones",
      "descripcion"
    ];

    var table = document.createElement('table');
    table.className = 'table';

    var thead = document.createElement('thead');
    // Titulos solamente
    var tr = document.createElement('tr');

    th = document.createElement('th');
    text = document.createTextNode('Id');
    th.appendChild(text);
    tr.appendChild(th);

    th = document.createElement('th');
    text = document.createTextNode('Descripcion');
    th.appendChild(text);
    tr.appendChild(th);

    thead.appendChild(tr);
    table.appendChild(thead);

    var tbody = document.createElement('tbody');
    // Lenado de la tabla 
    for (var i = 0; i < data.length; i++) {
      var tr = document.createElement('tr');
      for (var j = 0; j < columnNames.length; j++) {
        var td = document.createElement('td');
        var text = document.createTextNode(data[i][columnNames[j]]);

        td.appendChild(text);
        tr.appendChild(td);
        tbody.appendChild(tr);
      }
      table.appendChild(tbody);
    }


    document.getElementById("tabla_operaciones").appendChild(table);

    var selectedRows = [];

    const dataTableOperaciones = new simpleDatatables.DataTable("table", {
      paging: false,
      scrollY: "30vh",
      /* rowNavigation: true, */
      tabIndex: 1,
      labels: {
        placeholder: "Buscar...",
        searchTitle: "Buscar en tabla",
        perPage: "Entradas por página",
        noRows: "No se encontraron entradas",
        info: "Mostrando desde {start} hasta {end} de {rows} entradas",
        noResults: "No se encontraron resultados",
        searchTitle: "sdfasdgasgasdgasdg"
      },
      rowRender: (_row, tr, index) => {
        if (!selectedRows.includes(index)) { return }
        if (!tr.attributes) { tr.attributes = {} }
        if (!tr.attributes.class) { tr.attributes.class = "selected" }
        else { tr.attributes.class += " selected" }
        return tr
      }

    });

    dataTableOperaciones.on('datatable.selectrow', function (row, event) {
      event.preventDefault()

      selectedRows = [];
      selectedRows.push(row);

      dataTableOperaciones.update()

      let rows = dataTableOperaciones.rows;
      var id_operaciones = rows.dt.data.data[row][0].text;
      var descripcion = rows.dt.data.data[row][1].text;

      console.log(descripcion);

    });

  }).catch(function (err) {
    console.log(err);
  });
}


cargarVehiculos();
cargarOperaciones();