/*
*
* Comentarios Tecnicos
*
*/

function guardarComentariosTecnicos(orderNo) {
  event.preventDefault(); // Previene el evento submit (el que recarga la pagina);
  
  // Obtiene todos los datos de la forma
  let comentarios_tecnicos = document.getElementById("comentarios_tecnicos").value;

  // Convierte todos los datos del formulario a formato json

  // Manda los datos al backend para ser guardados ahi 
  fetch('./backend/postComentariosTecnicos.php', {
    method: 'POST',
    body: JSON.stringify({
      orderNo: orderNo,
      data: comentarios_tecnicos
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

function getComentariosTecnicos(orderNo) {
  fetch('./backend/getComentariosTecnicos.php', {
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
      
      // console.log("==== GET comentarios_tecnicos ====");
      // console.log(comentarios_tecnicos);

      document.getElementById("comentarios_tecnicos").value = return_data;
    })
    .catch(function (err) {
      console.log(err);
    });
}


/*
*
* Comentarios Area de Lavado
*
*/

function guardarComentariosLavado(orderNo) {
  event.preventDefault(); // Previene el evento submit (el que recarga la pagina);
  
  // Obtiene todos los datos de la forma
  let comentarios_lavado = document.getElementById("comentarios_lavado").value;

  // Convierte todos los datos del formulario a formato json

  // Manda los datos al backend para ser guardados ahi 
  fetch('./backend/postComentariosLavado.php', {
    method: 'POST',
    body: JSON.stringify({
      orderNo: orderNo,
      data: comentarios_lavado
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

function getComentariosLavado(orderNo) {
  fetch('./backend/getComentariosLavado.php', {
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
      
      // console.log("==== GET comentarios_lavado ====");
      // console.log(comentarios_lavado);

      document.getElementById("comentarios_lavado").value = return_data;
    })
    .catch(function (err) {
      console.log(err);
    });
}


/*
*
* Comentarios Area de Calidad
*
*/

function guardarComentariosCalidad(orderNo) {
  event.preventDefault(); // Previene el evento submit (el que recarga la pagina);
  
  // Obtiene todos los datos de la forma
  let comentarios_calidad = document.getElementById("comentarios_calidad").value;

  // Convierte todos los datos del formulario a formato json

  // Manda los datos al backend para ser guardados ahi 
  fetch('./backend/postComentariosCalidad.php', {
    method: 'POST',
    body: JSON.stringify({
      orderNo: orderNo,
      data: comentarios_calidad
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

function getComentariosCalidad(orderNo) {
  fetch('./backend/getComentariosCalidad.php', {
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
      
      // console.log("==== GET comentarios_calidad ====");
      // console.log(return_data);

      document.getElementById("comentarios_calidad").value = return_data;
    })
    .catch(function (err) {
      console.log(err);
    });
}


/*
*
* Comentarios Asesor 
*
*/

function guardarComentariosAsesor(orderNo) {
  event.preventDefault(); // Previene el evento submit (el que recarga la pagina);
  
  // Obtiene todos los datos de la forma
  let comentarios_asesor = document.getElementById("comentarios_asesor").value;

  // Manda los datos al backend para ser guardados ahi 
  fetch('./backend/postComentariosAsesor.php', {
    method: 'POST',
    body: JSON.stringify({
      orderNo: orderNo,
      data: comentarios_asesor
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

function getComentariosAsesor(orderNo) {
  fetch('./backend/getComentariosAsesor.php', {
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
      
      // console.log("==== GET comentarios_asesor ====");
      // console.log(return_data);

      document.getElementById("comentarios_asesor").value = return_data;
    })
    .catch(function (err) {
      console.log(err);
    });
}


  