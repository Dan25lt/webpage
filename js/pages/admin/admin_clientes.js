document.getElementById('telefono').oninput = function () {
  if (this.value.length > 10) { this.value = this.value.slice(0, 10); }
}

document.getElementById('numeroint').oninput = function () {
  if (this.value.length > 6) { this.value = this.value.slice(0, 6); }
}

document.getElementById('numeroext').oninput = function () {
  if (this.value.length > 6) { this.value = this.value.slice(0, 6); }
}

document.getElementById('idarea_postal').oninput = function () {
  if (this.value.length > 5) { this.value = this.value.slice(0, 5); }
}

document.getElementById('add_telefono').oninput = function () {
  if (this.value.length > 10) { this.value = this.value.slice(0, 10); }

}
document.getElementById('add_numeroint').oninput = function () {
  if (this.value.length > 6) { this.value = this.value.slice(0, 6); }
}

document.getElementById('add_numeroext').oninput = function () {
  if (this.value.length > 6) { this.value = this.value.slice(0, 6); }
}

document.getElementById('add_idarea_postal').oninput = function () {
  if (this.value.length > 5) { this.value = this.value.slice(0, 5); }
}

function cargarTodos() {

  fetch('./backend/administrador/getclientes.php', {
    method: 'GET',
  })
    .then(function (response) {
      return response.text();
    })
    .then(function (return_data) {
      if (return_data == "no hay clientes") {

        Toastify({
          text: "Error no hay clientes.",
          duration: 3000,
          className: "toast-error",
        }).showToast();

        return;
      }

      var data = JSON.parse(return_data);

      var columnNames = [
        "idcliente",
        "nombre",
        "apellido",
        "rfc",
        "telefono",
        "email",
        "calle",
        "numeroint",
        "numeroext",
        "colonia",
        "idarea_postal",
        "opciones"
      ];

      var table = document.createElement('table');
      table.className = "table";

      // Titulos.
      var thead = document.createElement('thead');
      var tr = document.createElement('tr');

      var th = document.createElement('th');
      var text = document.createTextNode('Id');
      th.appendChild(text);
      tr.appendChild(th);
      var th = document.createElement('th');
      var text = document.createTextNode('Nombre');
      th.appendChild(text);
      tr.appendChild(th);
      var th = document.createElement('th');
      var text = document.createTextNode('Apellido');
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
      th = document.createElement('th');
      text = document.createTextNode('Email');
      th.appendChild(text);
      tr.appendChild(th);
      th = document.createElement('th');
      text = document.createTextNode('Calle');
      th.appendChild(text);
      tr.appendChild(th);
      th = document.createElement('th');
      text = document.createTextNode('Numero Interior');
      th.appendChild(text);
      tr.appendChild(th);
      var th = document.createElement('th');
      var text = document.createTextNode('Numero Exterior');
      th.appendChild(text);
      tr.appendChild(th);
      var th = document.createElement('th');
      var text = document.createTextNode('Colonia');
      th.appendChild(text);
      tr.appendChild(th);
      var th = document.createElement('th');
      var text = document.createTextNode('Codigo postal');
      th.appendChild(text);
      tr.appendChild(th);
      th = document.createElement('th');
      text = document.createTextNode('Opciones');
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
          if (columnNames[j] === 'opciones') {

            var btn = document.createElement('label');
            btn.className = "button-table-secondary btnVer";
            btn.innerHTML = "Ver";

            btn.setAttribute("for", "modal-ver")
            btn.setAttribute("name", data[i]['idcliente'])

            td.appendChild(btn);

            var btn = document.createElement('label');
            btn.className = "button-table-warning btnEdit";
            btn.innerHTML = "Editar";

            btn.setAttribute("for", "modal-edit")
            btn.setAttribute("name", data[i]['idcliente'])

            td.appendChild(btn);

            td.dataset.column = "opciones";

            tr.appendChild(td);

          } else {
            var text = document.createTextNode(data[i][columnNames[j]]);

            td.appendChild(text);
            tr.appendChild(td);
          }
          tbody.appendChild(tr);
        }
        table.appendChild(tbody);
      }

      document.getElementById("tabla").appendChild(table);
      const editBtns = document.getElementsByClassName('btnEdit');

      for (const btnEdit of editBtns) {
        btnEdit.addEventListener("click", e => {
          console.log("edit Id:", e.target.getAttribute('name'));
          editById(e.target.getAttribute('name'));
        })
      }

      const verBtns = document.getElementsByClassName('btnVer');
      for (const btnVer of verBtns) {
        btnVer.addEventListener("click", e => {
          console.log("ver Id: ", e.target.getAttribute('name'));
          verById(e.target.getAttribute('name'));
        })
      }

      const dataTable = new simpleDatatables.DataTable("table", {
        perPageSelect: [5, 10, 15, ["Todos", -1]],
        searchable: true,
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

    })
    .catch(function (err) {
      console.log(err);
    });
}

function editById(id) {
  fetch('./backend/administrador/getClientsById.php', {
    method: 'POST',
    body: JSON.stringify({
      id: id,
    }),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(function (response) {
      return response.text();
    })
    .then(function (respuesta) {
      respuesta = JSON.parse(respuesta);

      document.getElementById("idcliente").value = respuesta[0]['idcliente'];
      document.getElementById("iddireccion").value = respuesta[0]['iddireccion'];
      document.getElementById("nombre").value = respuesta[0]['nombre'];
      document.getElementById("apellido").value = respuesta[0]['apellido'];
      document.getElementById("rfc").value = respuesta[0]['rfc'];
      document.getElementById("telefono").value = respuesta[0]['telefono'];
      document.getElementById("email").value = respuesta[0]['email'];
      document.getElementById("calle").value = respuesta[0]['calle'];
      document.getElementById("numeroint").value = respuesta[0]['numeroint'];
      document.getElementById("numeroext").value = respuesta[0]['numeroext'];
      document.getElementById("colonia").value = respuesta[0]['colonia'];
      document.getElementById("idarea_postal").value = respuesta[0]['idarea_postal'];

    });
}

var form = document.getElementById("editModalForm");
form.addEventListener('submit', handleEditForm);

function handleEditForm(event) {
  event.preventDefault();
  let editModalForm = new FormData(document.getElementById("editModalForm"));

  document.getElementById("edit_submit_btn").disabled = true;

  fetch('./backend/administrador/updateClientsById.php', {
    method: 'POST',
    body: editModalForm
  })
    .then(function (response) {
      return response.text();
    })
    .then(function (respuesta) {
      console.log(respuesta);
      if (respuesta === 'Registro actualizado') {

        Toastify({
          text: "Registro actualizado",
          duration: 3000,
          className: "toast-success",
        }).showToast();

        setTimeout(function () {
          document.location.reload();
        }, 3000);

      } else {
        Toastify({
          text: "Error al actualizar el registro",
          duration: 3000,
          className: "toast-error",
        }).showToast();

        document.getElementById("edit_submit_btn").disabled = false;
      }
    });
}

function verById(id) {
  fetch('./backend/administrador/getClientsById.php', {
    method: 'POST',
    body: JSON.stringify({
      id: id,
    }),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(function (response) {
      return response.text();
    })
    .then(function (respuesta) {
      respuesta = JSON.parse(respuesta);
      console.log(respuesta);

      document.getElementById("ver_idcliente").innerHTML = respuesta[0]['idcliente'];
      document.getElementById("ver_nombre").innerHTML = respuesta[0]['nombre'];
      document.getElementById("ver_apellido").innerHTML = respuesta[0]['apellido'];
      document.getElementById("ver_rfc").innerHTML = respuesta[0]['rfc'];
      document.getElementById("ver_telefono").innerHTML = respuesta[0]['telefono'];
      document.getElementById("ver_email").innerHTML = respuesta[0]['email'];
      document.getElementById("ver_calle").innerHTML = respuesta[0]['calle'];
      document.getElementById("ver_numeroint").innerHTML = respuesta[0]['numeroint'];
      document.getElementById("ver_numeroext").innerHTML = respuesta[0]['numeroext'];
      document.getElementById("ver_colonia").innerHTML = respuesta[0]['colonia'];
      document.getElementById("ver_idarea_postal").innerHTML = respuesta[0]['idarea_postal'];
    });
}

var insertForm = document.getElementById("addModalForm");
insertForm.addEventListener('submit', handleInsertForm);

function handleInsertForm(event) {
  event.preventDefault();
  let addModalForm = new FormData(document.getElementById("addModalForm"));

  document.getElementById("add_submit_btn").disabled = true;

  fetch('./backend/administrador/insertClients.php', {
    method: 'POST',
    body: addModalForm
  })
    .then(function (response) {
      return response.text();
    })
    .then(function (respuesta) {
      console.log(respuesta);
      if (respuesta === 'Registro insertado') {

        Toastify({
          text: "Registro insertado",
          duration: 3000,
          className: "toast-success",
        }).showToast();

        setTimeout(function () {
          document.location.reload();
        }, 3000);

      } else {

        Toastify({
          text: "Error al insertar el registro",
          duration: 3000,
          className: "toast-error",
        }).showToast();

        document.getElementById("add_submit_btn").disabled = false;

      }
    });
}

//Función para validar un RFC
function rfcValido(rfc) {
  var re = /^([ A-ZÑ&]?[A-ZÑ&]{3}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/,
    validado = rfc.match(re);

  if (!validado)  //Coincide con el formato general?
    return false;

  //Separar el dígito verificador del resto del RFC
  var digitoVerificador = validado.pop(),
    rfcSinDigito = validado.slice(1).join('')

  //Obtener el digito esperado
  var diccionario = "0123456789ABCDEFGHIJKLMN&OPQRSTUVWXYZ Ñ",
    lngSuma = 0.0,
    digitoEsperado;

  if (rfcSinDigito.length == 11) rfc = " " + rfc; //Ajustar a 12
  for (var i = 0; i < 13; i++)
    lngSuma = lngSuma + diccionario.indexOf(rfcSinDigito.charAt(i)) * (13 - i);
  digitoEsperado = 11 - lngSuma % 11;
  if (digitoEsperado == 11) digitoEsperado = 0;
  if (digitoEsperado == 10) digitoEsperado = "A";

  //El dígito verificador coincide con el esperado?
  return digitoVerificador == digitoEsperado;
}


//Handler para el evento cuando cambia el input
//Lleva la RFC a mayúsculas para validarlo
function validarInput(input) {
  var rfc = input.value.toUpperCase(),
    resultado = document.getElementById("resultado"),
    valido = "No válido";

  if (rfcValido(rfc)) { // ⬅️ Acá se comprueba
    valido = "Válido";
    resultado.classList.add("ok");
  } else {
    resultado.classList.remove("ok");
  }

  resultado.innerText = "RFC: " + rfc + "\nFormato: " + valido;
}

function validarInputEditar(input) {
  var rfc = input.value.toUpperCase(),
    resultado = document.getElementById("resultado_editar"),
    valido = "No válido";

  if (rfcValido(rfc)) { // ⬅️ Acá se comprueba
    valido = "Válido";
    resultado.classList.add("ok");
  } else {
    resultado.classList.remove("ok");
  }

  resultado.innerText = "RFC: " + rfc + "\nFormato: " + valido;
}

cargarTodos();
