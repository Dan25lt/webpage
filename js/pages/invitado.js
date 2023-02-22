function hideDetails() {
  document.getElementById('orderDetails1').style.display = 'none';
  document.getElementById('orderDetails2').style.display = 'none';
};

hideDetails();

function buscarOrden(e) {
  event.preventDefault();
  let buscarForm = new FormData(document.getElementById("buscarForm"));

  fetch('./backend/invitado/getServiceOrderById.php', {
    method: 'POST',
    body: buscarForm
  })
    .then(function (response) {
      return response.text();
    })
    .then(function (return_data) {

      if (return_data == "No existe el numero de orden") {

        document.getElementById('orderDetails1').style.display = 'none';
        document.getElementById('orderDetails2').style.display = 'none';

        Toastify({
          text: "No existe el numero de orden",
          duration: 3000,
          className: "toast-error",
        }).showToast();

        return;
      }

      document.getElementById("tabla").innerHTML = "";

      var data = JSON.parse(return_data);

      document.getElementById('orderDetails1').style.display = 'block';
      document.getElementById('orderDetails2').style.display = 'block';

      console.log("here")
      console.log(data[0]['estatus']);
      var estatus = data[0]['estatus'];

      document.querySelector('#step_espera').classList.remove('completed', 'active');
      document.querySelector('#step_tecnico').classList.remove('completed', 'active');
      document.querySelector('#step_lavador').classList.remove('completed', 'active');
      document.querySelector('#step_calidad').classList.remove('completed', 'active');
      // completed
      // active

      if (estatus == "En espera") {
        document.querySelector('#step_espera').classList.add('active');
      } else if (estatus == "En servicio tecnico") {
        document.querySelector('#step_espera').classList.add('completed');
        document.querySelector('#step_tecnico').classList.add('active');
      } else if (estatus == "En servicio de lavador") {
        document.querySelector('#step_espera').classList.add('completed');
        document.querySelector('#step_tecnico').classList.add('completed');
        document.querySelector('#step_lavador').classList.add('active');
      } else if (estatus == "En inspeccion de calidad") {
        document.querySelector('#step_espera').classList.add('completed');
        document.querySelector('#step_tecnico').classList.add('completed');
        document.querySelector('#step_lavador').classList.add('completed');
        document.querySelector('#step_calidad').classList.add('active');
      } else if (estatus == "Terminado") {
        document.querySelector('#step_espera').classList.add('completed');
        document.querySelector('#step_tecnico').classList.add('completed');
        document.querySelector('#step_lavador').classList.add('completed');
        document.querySelector('#step_calidad').classList.add('completed');
        document.querySelector('#step_terminado').classList.add('active');
      }

      var columnNames = ["idordenDeServicio",
        "marca",
        "modelo",
        "placas"
      ]

      var table = document.createElement('table');
      table.className = "table";
      var thead = document.createElement('thead')

      var tr = document.createElement('tr');

      var th = document.createElement('th');
      var text = document.createTextNode('Orden De Servicio');
      th.appendChild(text);
      tr.appendChild(th);

      th = document.createElement('th');
      text = document.createTextNode('Marca');
      th.appendChild(text);
      tr.appendChild(th);

      th = document.createElement('th');
      text = document.createTextNode('Modelo');
      th.appendChild(text);
      tr.appendChild(th);

      th = document.createElement('th');
      text = document.createTextNode('Placas');
      th.appendChild(text);
      tr.appendChild(th);

      thead.appendChild(tr)

      table.appendChild(thead);

      var tbody = document.createElement('tbody');
      for (var i = 0; i < data.length; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < columnNames.length; j++) {
          var td = document.createElement('td');
          var text = document.createTextNode(data[i][columnNames[j]]);
          td.appendChild(text);
          tr.appendChild(td);
        }
        tbody.appendChild(tr);
      }
      table.appendChild(tbody);
      document.getElementById("tabla").appendChild(table);


    });
};

function login(event) {
  event.preventDefault();
  let loginForm = new FormData(document.getElementById("loginForm"));

  fetch('./backend/login.php', {
    method: 'POST',
    body: loginForm
  })
    .then(function (response) {
      return response.text();
    })
    .then(function (data) {

      if (data === "Debes completar el captcha") {
        Toastify({
          text: "Debes completar el captcha",
          duration: 3000,
          className: "toast-error",
        }).showToast();

        return;
      }
      if (data === "Lo siento, parece que eres un robot") {
        Toastify({
          text: "Usuario y/o contraseña incorrectos", // TODO: cambiar este mensaje a algo mas acorde
          duration: 3000,
          className: "toast-error",
        }).showToast();

        return;
      }

      var response = JSON.parse(data);

      if (response.statusCode === 200) {

        // codigo para redireccionar,

        location.replace("./menu.html");

      } else if (response.statusCode === 403) {
        Toastify({
          text: "Usuario y/o contraseña incorrectos",
          duration: 3000,
          className: "toast-error",
        }).showToast();
      }
    });
};

buscarOrden();
