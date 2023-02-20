/*
* modal click para mostrar las imagenes en grande
*/
document.getElementById("img1").addEventListener('click', function () {

  let imgUrl = document.getElementById('img1').getAttribute("src");
  document.getElementById("modal_img").src = imgUrl;
});

document.getElementById("img2").addEventListener('click', function () {

  let imgUrl = document.getElementById('img2').getAttribute("src");
  document.getElementById("modal_img").src = imgUrl;
})

document.getElementById("img3").addEventListener('click', function () {

  let imgUrl = document.getElementById('img3').getAttribute("src");
  document.getElementById("modal_img").src = imgUrl;
})

document.getElementById("img4").addEventListener('click', function () {

  let imgUrl = document.getElementById('img4').getAttribute("src");
  document.getElementById("modal_img").src = imgUrl;
})

/*
* Botones para cargar y eliminar imagenes
*/
const imgBtns = document.getElementsByClassName('btnImg'); // Borrar imagenes

for (const imgBtn of imgBtns) {
  imgBtn.addEventListener("click", e => {
    console.log("HERE " + e.target.id + " clicked");
    /* 
    * Tomamos la desicion en base al id del boton
    */
    if (e.target.id === 'btn_upload_img1') {
      uploadImg(1);
    } else if (e.target.id === 'btn_upload_img2') {
      uploadImg(2);
    } else if (e.target.id === 'btn_upload_img3') {
      uploadImg(3);
    } else if (e.target.id === 'btn_upload_img4') {
      uploadImg(4);
    }

    if (e.target.id === 'btn_delete_img1') {
      deleteImg(1);
      document.getElementById("img1").src = './img/default-image_500.png';
      // TOOD: Reconstruir tabla
    } else if (e.target.id === 'btn_delete_img2') {
      deleteImg(2);
      document.getElementById("img2").src = './img/default-image_500.png';
      // TOOD: Reconstruir tabla
    } else if (e.target.id === 'btn_delete_img3') {
      deleteImg(3);
      document.getElementById("img3").src = './img/default-image_500.png';
      // TOOD: Reconstruir tabla
    } else if (e.target.id === 'btn_delete_img4') {
      deleteImg(4);
      document.getElementById("img4").src = './img/default-image_500.png';
      // TOOD: Reconstruir tabla
    }
  })
}

function uploadImg(imgId) {

}

function deleteImg(imgId) {
  fetch('./backend/deleteImg.php', {
    method: 'POST',
    body: JSON.stringify({
      orderNo: document.getElementById('orden_servicio_contenido').getAttribute("orden_actual"),
      imgId: imgId
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
          text: "Registro actualizado.",
          duration: 3000,
          className: "toast-success",
        }).showToast();

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


function mostrarImagenesChiquitas(element) {
  /*
  * mostrar Fotos chiquitas
  */
  if (element.getAttribute("img_url1") !== 'NA') {
    document.getElementById("img1").setAttribute("src", "./img/uploads/" + element.getAttribute("img_url1"));
  } else {
    document.getElementById("img1").setAttribute("src", "./img/default-image_500.png");
  }

  if (element.getAttribute("img_url2") !== 'NA') {
    document.getElementById("img2").setAttribute("src", "./img/uploads/" + element.getAttribute("img_url2"));
  } else {
    document.getElementById("img2").setAttribute("src", "./img/default-image_500.png");
  }
  if (element.getAttribute("img_url3") !== 'NA') {
    document.getElementById("img3").setAttribute("src", "./img/uploads/" + element.getAttribute("img_url3"));
  } else {
    document.getElementById("img3").setAttribute("src", "./img/default-image_500.png");
  }

  if (element.getAttribute("img_url4") !== 'NA') {
    document.getElementById("img4").setAttribute("src", "./img/uploads/" + element.getAttribute("img_url4"));
  } else {
    document.getElementById("img4").setAttribute("src", "./img/default-image_500.png");
  }
}

/*
* Nueva funcion para cargar imagenes
*/

function imageUpload1() {

  document.getElementById("img_to_upload_1").addEventListener('change', function (event) {
    var files = document.getElementById("img_to_upload_1").files;

    if (files.length > 0) {

      var formData = new FormData();
      formData.append("file", files[0]);
      formData.append("orden_id", document.getElementById('orden_servicio_contenido').getAttribute("orden_actual"));

      var xhttp = new XMLHttpRequest();

      // Set POST method and ajax file path
      xhttp.open("POST", "./backend/uploadImg1.php", true);

      // call on request changes state
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

          document.getElementById("img_to_upload_1").value = "";

          var response = this.responseText;
          console.log(response);

          if (response === 0) {
            Toastify({
              text: "Error al cargar el archivo",
              duration: 3000,
              className: "toast-error",
            }).showToast();
          } else {

            Toastify({
              text: "Imagen guardada",
              duration: 3000,
              className: "toast-success",
            }).showToast();

            document.getElementById("img1").setAttribute("src", "./img/uploads/" + response);
            cargarOrdenes();
          }
        }
      };

      // Send request with data
      xhttp.send(formData);

    } else {
      Toastify({
        text: "Por favor selecciona una imagen",
        duration: 3000,
        className: "toast-error",
      }).showToast();
    }

  });
};

function imageUpload2() {

  document.getElementById("img_to_upload_2").addEventListener('change', function (event) {
    var files = document.getElementById("img_to_upload_2").files;

    if (files.length > 0) {

      var formData = new FormData();
      formData.append("file", files[0]);
      formData.append("orden_id", document.getElementById('orden_servicio_contenido').getAttribute("orden_actual"));

      var xhttp = new XMLHttpRequest();

      // Set POST method and ajax file path
      xhttp.open("POST", "./backend/uploadImg2.php", true);

      // call on request changes state
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

          document.getElementById("img_to_upload_2").value = "";

          var response = this.responseText;
          console.log(response);

          if (response === 0) {

            Toastify({
              text: "Error al cargar el archivo.",
              duration: 3000,
              className: "toast-error",
            }).showToast();

          } else {

            Toastify({
              text: "Imagen guardada",
              duration: 3000,
              className: "toast-success",
            }).showToast();

            document.getElementById("img2").setAttribute("src", "./img/uploads/" + response);
            cargarOrdenes();
          }
        }
      };

      // Send request with data
      xhttp.send(formData);

    } else {
      Toastify({
        text: "Por favor selecciona una imagen",
        duration: 3000,
        className: "toast-error",
      }).showToast();
    }

  });
};

function imageUpload3() {
  document.getElementById("img_to_upload_3").addEventListener('change', function (event) {
    var files = document.getElementById("img_to_upload_3").files;

    if (files.length > 0) {

      var formData = new FormData();
      formData.append("file", files[0]);
      formData.append("orden_id", document.getElementById('orden_servicio_contenido').getAttribute("orden_actual"));

      var xhttp = new XMLHttpRequest();

      // Set POST method and ajax file path
      xhttp.open("POST", "./backend/uploadImg3.php", true);

      // call on request changes state
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

          document.getElementById("img_to_upload_3").value = "";

          var response = this.responseText;
          console.log(response);

          if (response === 0) {

            Toastify({
              text: "Error al cargar el archivo.",
              duration: 3000,
              className: "toast-error",
            }).showToast();

          } else {

            Toastify({
              text: "Imagen guardada",
              duration: 3000,
              className: "toast-success",
            }).showToast();

            document.getElementById("img3").setAttribute("src", "./img/uploads/" + response);
            cargarOrdenes();
          }
        }
      };

      // Send request with data
      xhttp.send(formData);

    } else {
      Toastify({
        text: "Por favor selecciona una imagen",
        duration: 3000,
        className: "toast-error",
      }).showToast();
    }
  });
};

function imageUpload4() {
  document.getElementById("img_to_upload_4").addEventListener('change', function (event) {
    var files = document.getElementById("img_to_upload_4").files;

    if (files.length > 0) {

      var formData = new FormData();
      formData.append("file", files[0]);
      formData.append("orden_id", document.getElementById('orden_servicio_contenido').getAttribute("orden_actual"));

      var xhttp = new XMLHttpRequest();

      // Set POST method and ajax file path
      xhttp.open("POST", "./backend/uploadImg4.php", true);

      // call on request changes state
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

          document.getElementById("img_to_upload_4").value = "";

          var response = this.responseText;
          console.log(response);

          if (response === 0) {

            Toastify({
              text: "Error al cargar el archivo.",
              duration: 3000,
              className: "toast-error",
            }).showToast();

          } else {

            Toastify({
              text: "Imagen guardada",
              duration: 3000,
              className: "toast-success",
            }).showToast();

            document.getElementById("img4").setAttribute("src", "./img/uploads/" + response);
            cargarOrdenes();
          }
        }
      };

      // Send request with data
      xhttp.send(formData);

    } else {
      Toastify({
        text: "Por favor selecciona una imagen",
        duration: 3000,
        className: "toast-error",
      }).showToast();
    }
  });
};
/* 

// DEPRECATED
// Upload Img file
function uploadFile() {

  var files = document.getElementById("img_to_upload_1").files;

  if (files.length > 0) {

    var formData = new FormData();
    formData.append("file", files[0]);
    formData.append("orden_id", document.getElementById('orden_servicio_contenido').getAttribute("orden_actual"));

    var xhttp = new XMLHttpRequest();

    // Set POST method and ajax file path
    xhttp.open("POST", "./backend/uploadImg1.php", true);

    // call on request changes state
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {

        var response = this.responseText;
        console.log(response);

        if (response === 0) {
          Toastify({
            text: "Error al cargar el archivo",
            duration: 3000,
            className: "toast-error",
          }).showToast();
        } else {

          Toastify({
            text: "Imagen guardada",
            duration: 3000,
            className: "toast-success",
          }).showToast();

          document.getElementById("img1").setAttribute("src", "./img/uploads/" + response);
          cargarOrdenes();
        }
      }
    };

    // Send request with data
    xhttp.send(formData);

  } else {
    Toastify({
      text: "Por favor selecciona una imagen",
      duration: 3000,
      className: "toast-error",
    }).showToast();
  }

}

function uploadFile2() {

  var files = document.getElementById("img_to_upload_2").files;

  if (files.length > 0) {

    var formData = new FormData();
    formData.append("file", files[0]);
    formData.append("orden_id", document.getElementById('orden_servicio_contenido').getAttribute("orden_actual"));

    var xhttp = new XMLHttpRequest();

    // Set POST method and ajax file path
    xhttp.open("POST", "./backend/uploadImg2.php", true);

    // call on request changes state
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {

        var response = this.responseText;
        console.log(response);

        if (response === 0) {

          Toastify({
            text: "Error al cargar el archivo.",
            duration: 3000,
            className: "toast-error",
          }).showToast();

        } else {

          Toastify({
            text: "Imagen guardada",
            duration: 3000,
            className: "toast-success",
          }).showToast();

          document.getElementById("img2").setAttribute("src", "./img/uploads/" + response);
          cargarOrdenes();
        }
      }
    };

    // Send request with data
    xhttp.send(formData);

  } else {
    Toastify({
      text: "Por favor selecciona una imagen",
      duration: 3000,
      className: "toast-error",
    }).showToast();
  }

}

function uploadFile3() {

  var files = document.getElementById("img_to_upload_3").files;

  if (files.length > 0) {

    var formData = new FormData();
    formData.append("file", files[0]);
    formData.append("orden_id", document.getElementById('orden_servicio_contenido').getAttribute("orden_actual"));

    var xhttp = new XMLHttpRequest();

    // Set POST method and ajax file path
    xhttp.open("POST", "./backend/uploadImg3.php", true);

    // call on request changes state
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {

        var response = this.responseText;
        console.log(response);

        if (response === 0) {

          Toastify({
            text: "Error al cargar el archivo.",
            duration: 3000,
            className: "toast-error",
          }).showToast();

        } else {

          Toastify({
            text: "Imagen guardada",
            duration: 3000,
            className: "toast-success",
          }).showToast();

          document.getElementById("img3").setAttribute("src", "./img/uploads/" + response);
          cargarOrdenes();
        }
      }
    };

    // Send request with data
    xhttp.send(formData);

  } else {
    Toastify({
      text: "Por favor selecciona una imagen",
      duration: 3000,
      className: "toast-error",
    }).showToast();
  }

}

function uploadFile4() {

  var files = document.getElementById("img_to_upload_4").files;

  if (files.length > 0) {

    var formData = new FormData();
    formData.append("file", files[0]);
    formData.append("orden_id", document.getElementById('orden_servicio_contenido').getAttribute("orden_actual"));

    var xhttp = new XMLHttpRequest();

    // Set POST method and ajax file path
    xhttp.open("POST", "./backend/uploadImg4.php", true);

    // call on request changes state
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {

        var response = this.responseText;
        console.log(response);

        if (response === 0) {

          Toastify({
            text: "Error al cargar el archivo.",
            duration: 3000,
            className: "toast-error",
          }).showToast();

        } else {

          Toastify({
            text: "Imagen guardada",
            duration: 3000,
            className: "toast-success",
          }).showToast();

          document.getElementById("img4").setAttribute("src", "./img/uploads/" + response);
          cargarOrdenes();
        }
      }
    };

    // Send request with data
    xhttp.send(formData);

  } else {
    Toastify({
      text: "Por favor selecciona una imagen",
      duration: 3000,
      className: "toast-error",
    }).showToast();
  }

} */


imageUpload1(); // cargando funcion en memoria
imageUpload2();
imageUpload3();
imageUpload4();
