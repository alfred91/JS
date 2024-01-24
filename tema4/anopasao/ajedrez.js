document.addEventListener('DOMContentLoaded', function() {
    const tablero = document.getElementById('tablero');

    // Construir el tablero
    for (let i = 0; i < 8; i++) {
        let row = tablero.insertRow();
        for (let j = 0; j < 8; j++) {
            let cell = row.insertCell();
            cell.className = (i + j) % 2 === 0 ? 'white' : 'black';
        }
    }

    // Colocar las piezas
    const fichas = [
        "TORRE", "CABALLO", "ALFIL", "REINA", "REY", "ALFIL", "CABALLO", "TORRE"
    ];

    for (let i = 0; i < 8; i++) {
        // Piezas negras
        tablero.rows[0].cells[i].innerHTML = `<img src="images/${fichas[i]}_NEGRA.PNG" alt="${fichas[i]} Negro">`;
        tablero.rows[1].cells[i].innerHTML = `<img src="images/PEON_NEGRO.PNG" alt="Peon N">`;
        
        // Piezas blancas
        tablero.rows[7].cells[i].innerHTML = `<img src="images/${fichas[i]}_BLANCA.PNG" alt="${fichas[i]} Blanco">`;
        tablero.rows[6].cells[i].innerHTML = `<img src="images/PEON_BLANCO.PNG" alt="Peon B">`;
    }
});
