import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function contarYMostrar(texto) {

  const contenedor = document.getElementById("dominio");

  if (typeof texto !== "string") {
    contenedor.innerHTML = "Error: debes pasar un texto";
    return;
  }

  const conteo = {};

  texto.toLowerCase().split("").forEach(letra => {
    if (conteo[letra]) {
      conteo[letra]++;
    } else {
      conteo[letra] = 1;
    }
  });

  contenedor.innerHTML = JSON.stringify(conteo);
}


contarYMostrar("a b c a f B g");

