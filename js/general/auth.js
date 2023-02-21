
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

/*
* mostrar su menú a cada usuario
*/
function setUI(puesto) {

  if (puesto === "Administrador" || puesto === "Gerente") {

  } else if (puesto === "Asesor") {
    document.getElementById("li_admin").style.display = "none";
    document.getElementById("li_gerente").style.display = "none";
    document.getElementById("li_tecnico").style.display = "none";
    document.getElementById("li_lavador").style.display = "none";
    document.getElementById("li_calidad").style.display = "none";
  } else if (puesto === "Tecnico") {
    document.getElementById("li_admin").style.display = "none";
    document.getElementById("li_gerente").style.display = "none";
    document.getElementById("li_asesor").style.display = "none";
    document.getElementById("li_lavador").style.display = "none";
    document.getElementById("li_calidad").style.display = "none";
  } else if (puesto === "Lavador") {
    document.getElementById("li_admin").style.display = "none";
    document.getElementById("li_gerente").style.display = "none";
    document.getElementById("li_asesor").style.display = "none";
    document.getElementById("li_tecnico").style.display = "none";
    document.getElementById("li_calidad").style.display = "none";
  } else if (puesto === "Calidad") {
    document.getElementById("li_admin").style.display = "none";
    document.getElementById("li_gerente").style.display = "none";
    document.getElementById("li_asesor").style.display = "none";
    document.getElementById("li_tecnico").style.display = "none";
    document.getElementById("li_lavador").style.display = "none";
  }
};

function logOut() {
  document.cookie = "loguedIn=0; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.cookie = "username=0; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.cookie = "puesto=0; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

  var loguedIn = getCookie('loguedIn');
  var username = getCookie('username');
  var puesto = getCookie('puesto');

  console.log(loguedIn);
  console.log(username);
  console.log(puesto);
};
/*
* Revisa las cookies y se encarga del login de usuarios
*/
function sessionHandler() {
  var loguedIn = getCookie('loguedIn');
  var username = getCookie('username');
  var puesto = getCookie('puesto');

  console.log(loguedIn)

  // Si el usuario no esta logueado lo redireccionamos al login siempre
  if(loguedIn !== "1") { // 1 = logueado
    window.location.replace("/index.html");
  }

  setUI(puesto);
};


sessionHandler();