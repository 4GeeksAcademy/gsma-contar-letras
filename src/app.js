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

/* codigo de Milton Compañero
/*const contarLetras = (string) => {
const resultadoContarLetras = {}

if (typeof string !== "string"){
return ` Error: Este elemento no es valido, debe de ser un string`
}

const sinEspacios = string.replaceAll(" ", "")
const parametroLimpio = sinEspacios.split("")


parametroLimpio.forEach((letter) => {

if (resultadoContarLetras[letter]) {
resultadoContarLetras[letter] = resultadoContarLetras[letter] + 1;
return;
}
resultadoContarLetras[letter] = 1;
});

return resultadoContarLetras
}

console.log(contarLetras(`abcac`))
console.log(contarLetras(`abcac abc`))
console.log(contarLetras(213))
console.log(contarLetras({}))
console.log(contarLetras([]))