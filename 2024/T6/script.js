window.onload = crearTablero;
function crearTablero() {
  //Botones
  document.getElementById("limpiar").addEventListener("click", limpiar, false);
  document.getElementById("rojo").addEventListener("click", pintarRojo, false);
  document.getElementById("blanco").addEventListener("click", pintarBlanco, false);
  document.getElementById("ajedrez").addEventListener("click", ajedrez, false);
  document.getElementById("sumaR").addEventListener("click", sumarRojas, false);
  document.getElementById("sumaB").addEventListener("click", sumarBlancas, false);
  //Tablero
  let tablero = document.getElementById("tablero");
  let secuencia = [];
  let numero = 0;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      let casilla = document.createElement("div");
      numero = numAleUnico(secuencia);
      secuencia.push(numero);
      casilla.setAttribute("id", numero);
      casilla.className = "casilla blanca";
      let contenido = document.createTextNode(numero);
      casilla.appendChild(contenido);
      casilla.addEventListener("click", seleccionar, false);
      tablero.appendChild(casilla);
    }
  }
}
function numAleUnico(secuencia) {
  let numero = 0;
  do {
    numero = Math.round(Math.random() * 15);
  } while (secuencia.includes(numero));
  return numero;
}
function seleccionar(evento) {
  evento.target.className = "casilla roja";
}
function limpiar() {
  let tablero = document.getElementById("tablero");
  for (let i = 0; i < tablero.getElementsByTagName("div").length; i++) {
    if (tablero.getElementsByTagName("div")[i].className == "casilla roja") {
      tablero.getElementsByTagName("div")[i].className = "casilla blanca";
    }
  }
  document.getElementById("resultado").innerHTML = "";

}
function pintarBlanco() {
  let tablero = document.getElementById("tablero");
  for (let i = 0; i < tablero.getElementsByTagName("div").length; i++) {
    tablero.getElementsByTagName("div")[i].addEventListener(
      "click",
      function pinBlanco() {
        this.className = "casilla blanca";
      },
      false
    );
  }
}
function pintarRojo() {
  let tablero = document.getElementById("tablero");
  for (let i = 0; i < tablero.getElementsByTagName("div").length; i++) {
    tablero.getElementsByTagName("div")[i].addEventListener(
      "click",
      function pinRojo() {
        this.className = "casilla roja";
      },
      false
    );
  }
}
function sumarRojas() {
  let suma = 0;
  let tablero = document.getElementById("tablero");
  for (let i = 0; i < tablero.getElementsByTagName("div").length; i++) {
    if (tablero.getElementsByTagName("div")[i].className == "casilla roja") {
      suma += parseInt(tablero.getElementsByTagName("div")[i].id);
    }
  }
  document.getElementById("resultado").innerHTML = " la rojas son: " + suma;
}
function sumarBlancas() {
  let suma = 0;
  let tablero = document.getElementById("tablero");
  for (let i = 0; i < tablero.getElementsByTagName("div").length; i++) {
    if (tablero.getElementsByTagName("div")[i].className == "casilla blanca") {
      suma += parseInt(tablero.getElementsByTagName("div")[i].id);
    }
  }
  document.getElementById("resultado").innerHTML = " la blancas son: " + suma;
}
function ajedrez() {
  let tablero = document.getElementById("tablero");
  for (let i = 0; i < tablero.getElementsByTagName("div").length; i++) {
    if (i < 4 || (i > 7 && i < 12)) {
      if (i % 2 == 0)
        tablero.getElementsByTagName("div")[i].className = "casilla blanca";
      else tablero.getElementsByTagName("div")[i].className = "casilla roja";
    } else if ((i > 3 && i < 8) || i > 11) {
      if (i % 2 == 0)
        tablero.getElementsByTagName("div")[i].className = "casilla roja";
      else tablero.getElementsByTagName("div")[i].className = "casilla blanca";
    }
  }
}