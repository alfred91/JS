let fichas = [
  "fichas/peonB.png",
  "fichas/torreB.png",
  "fichas/caballoB.png",
  "fichas/alfilB.png",
  "fichas/reinaB.png",
  "fichas/reyB.png",
  "fichas/alfilB.png",
  "fichas/caballoB.png",
  "fichas/torreB.png",
  "fichas/torreN.png",
  "fichas/alfilN.png",
  "fichas/reinaN.png",
  "fichas/reyN.png",
  "fichas/caballoN.png",
  "fichas/torreN.png",
  "fichas/peonN.png",
];

function crearTablero() {
  let tablero = document.createElement("table");
  tablero.id = "tablero";

  for (let i = 0; i < 8; i++) {
    let tr = document.createElement("tr");
    for (let j = 0; j < 8; j++) {
      let casilla = document.createElement("td");
      if ((i + j) % 2 === 0) {
        casilla.classList.add("blanco");
      } else {
        casilla.classList.add("negro");
      }
      tr.appendChild(casilla);
    }
    tablero.appendChild(tr);
  }
  document.body.appendChild(tablero);
}

function addFichas() {
  let casillas = document.querySelectorAll("#tablero tr td");
  // PEONES BLANCOS
  for (let i = 8; i < 16; i++) {
    let img = document.createElement("img");
    img.src = fichas[15];
    casillas[i].appendChild(img);
  }
  //PEONES NEGROS
  for (let i = 48; i < 56; i++) {
    let img = document.createElement("img");
    img.src = fichas[0];
    casillas[i].appendChild(img);
  }
  // TORRES BLANCAS
  for (let i = 0; i <= 8; i++) {
    if (i % 7 == 0) {
      let img = document.createElement("img");
      img.src = fichas[14];
      casillas[i].appendChild(img);
    }
  }
  // TORRES NEGRAS
  for (let i = 56; i <= 64; i++) {
    if (i % 7 == 0) {
      let img = document.createElement("img");
      img.src = fichas[1];
      casillas[i].appendChild(img);
    }
  }
  // CABALLOS BLANCOS
  for (let i = 58; i < 62; i++) {
    if (i == 58 || i == 61) {
      let img = document.createElement("img");
      img.src = fichas[3];
      casillas[i].appendChild(img);
    }
  }
  // CABALLOS NEGROS
  for (let i = 2; i < 6; i++) {
    if (i == 2 || i == 5) {
      let img = document.createElement("img");
      img.src = fichas[10];
      casillas[i].appendChild(img);
    }
  }
  // ARFILES BLANCOS
  for (let i = 57; i < 63; i++) {
    if (i == 57 || i == 62) {
      let img = document.createElement("img");
      img.src = fichas[2];
      casillas[i].appendChild(img);
    }
  }
  // ARFILES NEGROS
  for (let i = 1; i < 7; i++) {
    if (i == 1 || i == 6) {
      let img = document.createElement("img");
      img.src = fichas[13];
      casillas[i].appendChild(img);
    }
  }
  // REYES BLANCOS
  for (let i = 59; i < 61; i++) {
    if (i == 59) {
      let img = document.createElement("img");
      img.src = fichas[4];
      casillas[i].appendChild(img);
    } else if (i == 60) {
      let img = document.createElement("img");
      img.src = fichas[5];
      casillas[i].appendChild(img);
    }
  }
  //REYES NEGROS
  for (let i = 3; i < 5; i++) {
    if (i == 3) {
      let img = document.createElement("img");
      img.src = fichas[11];
      casillas[i].appendChild(img);
    } else if (i == 4) {
      let img = document.createElement("img");
      img.src = fichas[12];
      casillas[i].appendChild(img);
    }
  }
}
