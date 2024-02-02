document.addEventListener("DOMContentLoaded", function () {
  var gameBoard = document.getElementById("gameBoard");
  // ASEGURARNOS QUE EL NUMERO ALEATORIO SEA UNICO
  var usedNumbers = new Set();

  var resultadoDiv = document.getElementById("resultado");

  for (let i = 0; i < 16; i++) {
    var square = document.createElement("div");
    square.className = "cuadrados";

    if (i % 4 == 0) {
      var newRow = document.createElement("div");
      gameBoard.appendChild(newRow);
    }

    var numAle;
    do {
      numAle = Math.floor(Math.random() * 16) + 1;
    } while (usedNumbers.has(numAle));

    usedNumbers.add(numAle);
    square.id = numAle;

    var numElement = document.createElement("span");
    numElement.textContent = numAle;
    square.appendChild(numElement);
    newRow.appendChild(square);

    square.addEventListener("click", function () {
      this.style.backgroundColor = "red";
    });
  }

  //RESET
  var resetButton = document.getElementById("resetButton");
  resetButton.addEventListener("click", function () {
    var squares = gameBoard.getElementsByTagName("div");
    for (let square of squares) {
      square.style.backgroundColor = "";
    }
    resultadoDiv.textContent = "";
  });

  // ROJO
  var redButton = document.getElementById("redButton");
  redButton.addEventListener("click", function () {
    let casillaR = 0;
    let squares = gameBoard.getElementsByTagName("div");
    for (let square of squares) {
      if (square.style.backgroundColor == "red") {
        casillaR++;
      }
    }
    resultadoDiv.textContent = "Casillas Rojas: " + casillaR;
  });

  // BLANCO
  var whiteButton = document.getElementById("whiteButton");

  whiteButton.addEventListener("click", function () {
    let casillaB = 0;
    let squares = gameBoard.getElementsByClassName("cuadrados");
    for (let square of squares) {
      if (square.style.backgroundColor != "red") {
        casillaB++;
      }
    }
    resultadoDiv.textContent = "Casillas Blancas: " + casillaB;
  });

  // AJEDREZ
  var chessButton = document.getElementById("chessButton");
  chessButton.addEventListener("click", function () {
    var squares = gameBoard.getElementsByClassName("cuadrados");
    var pIntarRojo = true;

    for (let i = 0; i < squares.length; i++) {
      if (i % 4 === 0) {
        // CADA CUATRO CASILLAS ES FILA NUEVA, INVERTIMOS EL ORDEN DE PINTAR
        pIntarRojo = !pIntarRojo;
      }
      if ((i % 2 === 0 && pIntarRojo) || (i % 2 !== 0 && !pIntarRojo)) {
        squares[i].style.backgroundColor = "red";
      } else {
        squares[i].style.backgroundColor = "";
      }
    }
  });

  // SUMAR BLANCAS
  var addWhiteButton = document.getElementById("addWhite");

  addWhiteButton.addEventListener("click", function () {
    let totalBlancas = 0;
    let squares = gameBoard.getElementsByTagName("div");
    for (let square of squares) {
      if (square.style.backgroundColor != "red") {
        let idNum = parseInt(square.id);
        if (!isNaN(idNum)) {
          totalBlancas += idNum;
        }
      }
    }
    resultadoDiv.textContent = "Suma Blancas: " + totalBlancas;
  });

  // SUMAR ROJAS
  var addRedButton = document.getElementById("addRed");

  addRedButton.addEventListener("click", function () {
    let totalRojas = 0;
    let squares = gameBoard.getElementsByClassName("cuadrados");
    for (let square of squares) {
      if (square.style.backgroundColor == "red") {
        let idNum = parseInt(square.id);
        if (!isNaN(idNum)) {
          totalRojas += idNum;
        }
      }
    }
    resultadoDiv.textContent = "Suma Rojas: " + totalRojas;
  });
});
