function preguntarNombre() {
  var nombre = prompt("Ingrese su Nombre");
  mostrarenlog(nombre);
}

function mostrarenlog(quemostrar) {
  document.getElementById("txtNombre").innerHTML = "hola " + quemostrar;
  console.log("hola " + quemostrar);
  preguntarEdad();
}
function preguntarEdad() {
  var edad = prompt("Ingrese su Edad");
  comprobarEdad(edad);
}

function comprobarEdad(edad) {
  if (edad >= 15) {
    document.getElementById("txtEdad").innerHTML = "Tu edad es mayor a 15";

    mostrarenClases(true);
  } else {
    document.getElementById("txtEdad").innerHTML = "Tu edad es menor a 15";
    mostrarenClases(false);
  }
}

function mostrarenClases(condicion) {
  if (condicion == true) {
    document.getElementById("clases").innerHTML =
      "Las clases son: Lun-Mie, de 20 a 22 Hs.";
  } else {
    document.getElementById("clases").innerHTML =
      "Las clases son: Lun-Jue, de 17 a 19 Hs.";
  }
}

function hace() {
  var cantidad = prompt("cantidad de personas en el grupo");
  let result = "";
  let i = 0;

  do {
    preguntarNombre();
    i = i + 1;
  } while (i < cantidad);
}
document.addEventListener("DOMContentLoaded", function (event) {});
