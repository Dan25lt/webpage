function cargarTodos() {

  fetch('./backend/administrador/getVehiculos.php', {
    method: 'GET',
  })
    .then(function (response) {
      return response.text();
    })
    .then(function (return_data) {
      if (return_data == "no hay vehiculos") {
        alert("no hay vehiculos");
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
        "opciones"
      ];

      var table = document.createElement('table');

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
      text = document.createTextNode('Opciones');
      th.appendChild(text);
      tr.appendChild(th);
      thead.appendChild(tr);
      table.appendChild(thead);


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
            btn.setAttribute("name", data[i]['idvehiculos'])

            td.appendChild(btn);

            var btn = document.createElement('label');
            btn.className = "button-table-warning btnEdit";
            btn.innerHTML = "Editar";

            btn.setAttribute("for", "modal-edit")
            btn.setAttribute("name", data[i]['idvehiculos'])

            td.appendChild(btn);

            td.dataset.column = "opciones";

            tr.appendChild(td);
          } else {
            var text = document.createTextNode(data[i][columnNames[j]]);

            td.appendChild(text);
            tr.appendChild(td);
          }
        }

        table.appendChild(tr);
      }


      document.getElementById("tabla_vehiculo").appendChild(table);

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

    })
    .catch(function (err) {
      console.log(err);
    });
}


function editById(id) {

  fetch('./backend/administrador/getVehiculoById.php', {
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

      console.log(respuesta);

      respuesta = JSON.parse(respuesta);

      document.getElementById("idvehiculos").value = respuesta[0]['idvehiculos'];
      document.getElementById("ano").value = respuesta[0]['ano'];
      document.getElementById("vin").value = respuesta[0]['vin'];
      document.getElementById("placas").value = respuesta[0]['placas'];
      /* document.getElementById("modelo").value = respuesta[0]['modelo'];
      document.getElementById("marca").value = respuesta[0]['marca']; */

    });
}

var form = document.getElementById("editModalForm");
form.addEventListener('submit', handleEditForm);

function handleEditForm(event) {
  event.preventDefault();
  let editModalForm = new FormData(document.getElementById("editModalForm"));

  document.getElementById("edit_submit_btn").disabled = true;
  
  fetch('./backend/administrador/updateVehiculosById.php', {
    method: 'POST',
    body: editModalForm
  }).then(function (response) {
    return response.text();
  }).then(function (respuesta) {
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
      
    }
  });
}

function verById(id) {

  console.log("here");
  console.log(id);

  fetch('./backend/administrador/getVehiculoById.php', {
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

      console.log(respuesta);

      respuesta = JSON.parse(respuesta);
      console.log(respuesta);

      document.getElementById("ver_idvehiculos").innerHTML = respuesta[0]['idvehiculos'];
      document.getElementById("ver_ano").innerHTML = respuesta[0]['ano'];
      document.getElementById("ver_vin").innerHTML = respuesta[0]['vin'];
      document.getElementById("ver_placas").innerHTML = respuesta[0]['placas'];
      document.getElementById("ver_modelo").innerHTML = respuesta[0]['modelo'];
      document.getElementById("ver_marca").innerHTML = respuesta[0]['marca'];

    });
}

var insertForm = document.getElementById("addModalForm");
insertForm.addEventListener('submit', handleInsertForm);

function handleInsertForm(event) {
  event.preventDefault();
  let addModalForm = new FormData(document.getElementById("addModalForm"));

  document.getElementById("add_submit_btn").disabled = true;

  fetch('./backend/administrador/insertVehiculos.php', {
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

      }
    });
}

function loadModelsAndBrands() {
  fetch('./backend/administrador/getModelsAndBrands.php', {
    method: 'GET'
  }).then(function (response) {
    return response.text();
  }).then(function (respuesta) {
    if (respuesta === 'error no hay marcas') {

      Toastify({
        text: "Error al obtener las marcas",
        duration: 3000,
        className: "toast-error",
      }).showToast();

      return;
    } else if (respuesta === 'error no hay modelos') {

      Toastify({
        text: "Error al obtener los modelos",
        duration: 3000,
        className: "toast-error",
      }).showToast();

      return;
    } else {

      // add_id_marca
      // add_id_modelo

      respuesta = JSON.parse(respuesta);

      const select = document.querySelector('#add_id_marca');

      for (let i = 0; i < respuesta.marcas.length; i++) {
        const marca = respuesta.marcas[i];
        console.log(marca);

        const newOption = document.createElement('option');
        const optionText = document.createTextNode(marca.marca);
        newOption.appendChild(optionText);
        newOption.setAttribute('value', marca.idmarca);

        select.appendChild(newOption);
      }

      refreshModelsById(respuesta.marcas[0].idmarca);

    }
  });
}

var selectedBrand = document.getElementById("add_id_marca");

selectedBrand.addEventListener("change", function () {
  console.log(this.value);
  refreshModelsById(this.value);
});

function refreshModelsById(id) {

  document.getElementById("add_id_modelo").innerHTML = "";

  console.log(id);
  fetch('./backend/administrador/getModelsByBrandId.php', {
    method: 'POST',
    body: JSON.stringify({
      id: id,
    }),
  }).then(function (response) {
    return response.text();
  }).then(function (respuesta) {
    if (respuesta === 'error no hay modelos') {

      Toastify({
        text: "Error al obtener los modelos",
        duration: 3000,
        className: "toast-error",
      }).showToast();

      return;
    } else {

      console.log(respuesta);

      respuesta = JSON.parse(respuesta);

      const select = document.querySelector('#add_id_modelo');

      for (let i = 0; i < respuesta.length; i++) {
        const modelo = respuesta[i];

        const newOption = document.createElement('option');
        const optionText = document.createTextNode(modelo.modelo);
        newOption.appendChild(optionText);
        newOption.setAttribute('value', modelo.idmodelo);

        select.appendChild(newOption);
      }

    }
  });
}

function loadClients() {
  fetch('./backend/administrador/getclientes.php', {
    method: 'GET'
  }).then(function (response) {
    return response.text();
  }).then(function (respuesta) {
    if (respuesta === 'no hay clientes') {

      Toastify({
        text: "Error al obtener los clientes",
        duration: 3000,
        className: "toast-error",
      }).showToast();

      return;

    } else {

      respuesta = JSON.parse(respuesta);

      const select = document.querySelector('#add_id_cliente');

      for (let i = 0; i < respuesta.length; i++) {
        const cliente = respuesta[i];

        const newOption = document.createElement('option');
        const optionText = document.createTextNode(cliente.nombre + " " + cliente.apellido);
        newOption.appendChild(optionText);
        newOption.setAttribute('value', cliente.idcliente);

        select.appendChild(newOption);
      }
    }
  });
}

cargarTodos();
loadModelsAndBrands();
loadClients();