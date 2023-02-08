function cargarTodos() {

	fetch('./backend/administrador/getUsers.php', {
		method: 'GET',
	})
		.then(function (response) {
			return response.text();
		})
		.then(function (return_data) {
			if (return_data == "no hay Usuarios") {
				alert("no hay Usuarios");
				return;
			}

			console.log(return_data);

			var data = JSON.parse(return_data);

			var columnNames = [
				"idempleado",
				"usuario",
				"contrasena",
				"nombre",
				"apellido",
				"puesto",
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
			var text = document.createTextNode('Ususario');
			th.appendChild(text);
			tr.appendChild(th);
			var th = document.createElement('th');
			var text = document.createTextNode('Contrasena');
			th.appendChild(text);
			tr.appendChild(th);
			th = document.createElement('th');
			text = document.createTextNode('Nombre');
			th.appendChild(text);
			tr.appendChild(th);
			th = document.createElement('th');
			text = document.createTextNode('Apellido');
			th.appendChild(text);
			tr.appendChild(th);
			th = document.createElement('th');
			text = document.createTextNode('Puesto');
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
						btn.setAttribute("name", data[i]['idempleado'])

						td.appendChild(btn);

						var btn = document.createElement('label');
						btn.className = "button-table-warning btnEdit";
						btn.innerHTML = "Editar";

						btn.setAttribute("for", "modal-edit")
						btn.setAttribute("name", data[i]['idempleado'])

						td.appendChild(btn);

						var btn = document.createElement('label');
						btn.className = "button-table-error btnBorrar";
						btn.innerHTML = "Borrar";

						btn.setAttribute("for", "modal-delete")
						btn.setAttribute("name", data[i]['idempleado'])

						td.appendChild(btn);

						td.dataset.column = "opciones";

						tr.appendChild(td);
					}
					else {
						var text = document.createTextNode(data[i][columnNames[j]]);

						td.appendChild(text);

						td.dataset.column = columnNames[j]; // De aqui toma el valor para los titulos de las columnas en responsibe moviles

						tr.appendChild(td);
					}
				}

				tbody.appendChild(tr);
			}
			table.appendChild(tbody);

			document.getElementById("tabla_usuarios").appendChild(table);

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

			const borrarBtns = document.getElementsByClassName('btnBorrar');

			for (const btnBorrar of borrarBtns) {
				btnBorrar.addEventListener("click", e => {
					console.log("delete  Id: ", e.target.getAttribute('name'));
					deleteById(e.target.getAttribute('name'));
				})
			}


		})
		.catch(function (err) {
			console.log(err);
		});
}

function editById(id) {

	fetch('./backend/administrador/getUsersById.php', {
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

			document.getElementById("idempleado").value = respuesta[0]['idempleado'];
			document.getElementById("usuario").value = respuesta[0]['usuario'];
			document.getElementById("nombre").value = respuesta[0]['nombre'];
			document.getElementById("apellido").value = respuesta[0]['apellido'];
			document.getElementById("puesto").value = respuesta[0]['puesto'];

		});
}

var form = document.getElementById("editModalForm");
form.addEventListener('submit', handleEditForm);


function handleEditForm(event) {
	event.preventDefault();

	document.getElementById("edit_user_submit_btn").disabled = true;

	let editModalForm = new FormData(document.getElementById("editModalForm"));

	fetch('./backend/administrador/updateUserById.php', {
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
			}
		});
}

function verById(id) {

	fetch('./backend/administrador/getUsersById.php', {
		method: 'POST',
		body: JSON.stringify({
			id: id,
		}),
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	}).then(function (response) {
		return response.text();

	}).then(function (respuesta) {
		respuesta = JSON.parse(respuesta);
		console.log(respuesta);

		document.getElementById("ver_idempleado").innerHTML = respuesta[0]['idempleado'];
		document.getElementById("ver_usuario").innerHTML = respuesta[0]['usuario'];
		document.getElementById("ver_contraseña").innerHTML = respuesta[0]['contrasena'];
		document.getElementById("ver_nombre").innerHTML = respuesta[0]['nombre'];
		document.getElementById("ver_apellido").innerHTML = respuesta[0]['apellido'];
		document.getElementById("ver_puesto").innerHTML = respuesta[0]['puesto'];

	});
}

function deleteById(id) {

	let text = "Esta seguro que\nQuiere eliminar el registro.";
	if (confirm(text) == true) {

		fetch('./backend/administrador/deleteUsersById.php', {
			method: 'POST',
			body: JSON.stringify({
				id: id,
			}),
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		}).then(function (response) {
			return response.text();
		}).then(function (respuesta) {
			console.log(respuesta);
			if (respuesta === "Registro eliminado") {

				Toastify({
					text: "Registro eliminado",
					duration: 3000,
					className: "toast-success",
				}).showToast();

				setTimeout(function () {
					document.location.reload();
				}, 3000);

			}
		}
		);
	}
}

var form = document.getElementById("addModalForm");
form.addEventListener('submit', handleAddForm);

function handleAddForm(event) {
	event.preventDefault();

	document.getElementById("add_user_submit_btn").disabled = true;

	let addModalForm = new FormData(document.getElementById("addModalForm"));

	fetch('./backend/administrador/addUsers.php', {
		method: 'POST',
		body: addModalForm
	})
		.then(function (response) {
			return response.text();
		})
		.then(function (return_data) {
			console.log(return_data);

			if (return_data === 'Registro insertado') {

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
		})
		.catch(function (err) {
			console.log(err);
		});
}

function checkInputOnlyLetters(e) {
	//only alpha-numeric characters
	var ok = /[A-Za-z]/.test(String.fromCharCode(e.charCode));
	if (!ok)
		e.preventDefault();
}

function checkInputOnlyLettersAndNumbers(e) {
	//only alpha-numeric characters
	var ok = /[A-Za-z0-9]/.test(String.fromCharCode(e.charCode));
	if (!ok)
		e.preventDefault();
}

cargarTodos();