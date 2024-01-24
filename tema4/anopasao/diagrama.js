document.getElementById("generar").addEventListener("click", function () {
    let datos = generarDatos();
    pintarDiagrama(datos);
});

function generarDatos() {
    let datos = [];
    for (let i = 0; i < 4; i++) {
        datos.push(Math.floor(Math.random() * 100) + 1);
    }
    return datos;
}

function pintarDiagrama(datos) {
    let contenedor = document.getElementById("diagrama");
    contenedor.innerHTML = "";
    const colores = ["pink", "blue", "green", "red"];
    const etiquetas = ["Dato A", "Dato B", "Dato C", "Dato D"];

    datos.forEach(function (valor, index) {
        let barra = document.createElement("div");
        barra.style.width = valor + 8 + "%";
        barra.style.height = "1.5rem";
        barra.style.backgroundColor = colores[index];
        barra.style.margin = "5px 0";
        barra.textContent = `${etiquetas[index]} (${valor}%)`;

        contenedor.appendChild(barra);
    });
}