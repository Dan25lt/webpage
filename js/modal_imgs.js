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

document.getElementById("btn_upload_img1").addEventListener("click", function () {

});
document.getElementById("btn_upload_img2").addEventListener("click", function () {

});
document.getElementById("btn_upload_img3").addEventListener("click", function () {

});
document.getElementById("btn_upload_img4").addEventListener("click", function () {

});



document.getElementById("btn_delete_img1").addEventListener("click", function () {

});
document.getElementById("btn_delete_img2").addEventListener("click", function () {

});
document.getElementById("btn_delete_img3").addEventListener("click", function () {

});
document.getElementById("btn_delete_img4").addEventListener("click", function () {

});