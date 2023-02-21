

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
}

/*
* Revisa las cookies y se encarga del login de usuarios
*/
function inspeccionarMisCookies() {
  var loguedIn = getCookie('loguedIn');
  var username = getCookie('username');
  var puesto = getCookie('puesto');

  if (!loguedIn) {
    location.replace("./index.html"); // redirecciona al login si el usuario no esta autenticado.
  }

  if (puesto == 'OTRO Puesto') {
    location.replace("/"); // redirecciona a la pagina del puesto para que no ande de metiche aqui
  }

  console.log(`Usuario: Id->${loguedIn}, username: ${username}, puesto: ${puesto}`);
}