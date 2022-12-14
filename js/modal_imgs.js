// crear el modal
var modal = document.getElementById('id01');

// se cierra si se hace click fuera de la ventana
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/*
* modal click para mostrar las imagenes en grande
*/
document.getElementById("img1").addEventListener('click', function () {
  document.getElementById('id01').style.display = 'block'
  let imgUrl = document.getElementById('img1').getAttribute("src");
  document.getElementById("modal_img").src = imgUrl;
});

document.getElementById("img2").addEventListener('click', function () {
  document.getElementById('id01').style.display = 'block'
  let imgUrl = document.getElementById('img2').getAttribute("src");
  document.getElementById("modal_img").src = imgUrl;
})

document.getElementById("img3").addEventListener('click', function () {
  document.getElementById('id01').style.display = 'block'
  let imgUrl = document.getElementById('img3').getAttribute("src");
  document.getElementById("modal_img").src = imgUrl;
})

document.getElementById("img4").addEventListener('click', function () {
  document.getElementById('id01').style.display = 'block'
  let imgUrl = document.getElementById('img4').getAttribute("src");
  document.getElementById("modal_img").src = imgUrl;
})


/*
* Botones para cargar y eliminar imagenes
*/
const imgBtns = document.getElementsByClassName('btnImg');

for (const imgBtn of imgBtns) {
  imgBtn.addEventListener("click", e => {
    console.log(e.target.id + " clicked");
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


// Upload Img file
function uploadFile() {

  var files = document.getElementById("img_to_upload_1").files;

  if(files.length > 0 ){

     var formData = new FormData();
     formData.append("file", files[0]);
     formData.append("orden_id", document.getElementById('orden_servicio_contenido').getAttribute("orden_actual"));

     var xhttp = new XMLHttpRequest();

     // Set POST method and ajax file path
     xhttp.open("POST", "./backend/uploadImg1.php", true);

     // call on request changes state
     xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

          var response = this.responseText;
          console.log(response);

          if(response === 0){
            alert("Error al cargar el archivo.");
          }else{
            alert("Imagen guardada.");
            document.getElementById("img1").setAttribute("src", "./img/uploads/" + response);
            cargarOrdenes();
          }
        }
     };

     // Send request with data
     xhttp.send(formData);

  }else{
     alert("Por favor selecciona una imagen");
  }

}

function uploadFile2() {

  var files = document.getElementById("img_to_upload_2").files;

  if(files.length > 0 ){

     var formData = new FormData();
     formData.append("file", files[0]);
     formData.append("orden_id", document.getElementById('orden_servicio_contenido').getAttribute("orden_actual"));

     var xhttp = new XMLHttpRequest();

     // Set POST method and ajax file path
     xhttp.open("POST", "./backend/uploadImg2.php", true);

     // call on request changes state
     xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

          var response = this.responseText;
          console.log(response);

          if(response === 0){
            alert("Error al cargar el archivo.");
          }else{
            alert("Imagen guardada.");
            document.getElementById("img2").setAttribute("src", "./img/uploads/" + response);
            cargarOrdenes();
          }
        }
     };

     // Send request with data
     xhttp.send(formData);

  }else{
     alert("Por favor selecciona una imagen");
  }

}

function uploadFile3() {

  var files = document.getElementById("img_to_upload_3").files;

  if(files.length > 0 ){

     var formData = new FormData();
     formData.append("file", files[0]);
     formData.append("orden_id", document.getElementById('orden_servicio_contenido').getAttribute("orden_actual"));

     var xhttp = new XMLHttpRequest();

     // Set POST method and ajax file path
     xhttp.open("POST", "./backend/uploadImg3.php", true);

     // call on request changes state
     xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

          var response = this.responseText;
          console.log(response);

          if(response === 0){
            alert("Error al cargar el archivo.");
          }else{
            alert("Imagen guardada.");
            document.getElementById("img3").setAttribute("src", "./img/uploads/" + response);
            cargarOrdenes();
          }
        }
     };

     // Send request with data
     xhttp.send(formData);

  }else{
     alert("Por favor selecciona una imagen");
  }

}

function uploadFile4() {

  var files = document.getElementById("img_to_upload_4").files;

  if(files.length > 0 ){

     var formData = new FormData();
     formData.append("file", files[0]);
     formData.append("orden_id", document.getElementById('orden_servicio_contenido').getAttribute("orden_actual"));

     var xhttp = new XMLHttpRequest();

     // Set POST method and ajax file path
     xhttp.open("POST", "./backend/uploadImg4.php", true);

     // call on request changes state
     xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

          var response = this.responseText;
          console.log(response);

          if(response === 0){
            alert("Error al cargar el archivo."); 
          }else{
            alert("Imagen guardada.");
            document.getElementById("img4").setAttribute("src", "./img/uploads/" + response);
            cargarOrdenes();
          }
        }
     };

     // Send request with data
     xhttp.send(formData);

  }else{
     alert("Por favor selecciona una imagen");
  }

}