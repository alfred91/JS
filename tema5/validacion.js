document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("nombre").addEventListener("blur", convertirMayusculas);
    document.getElementById("apellidos").addEventListener("blur", convertirMayusculas);
    document.getElementById("nif").addEventListener("blur", convertirMayusculas);
});

function validarYEnviar() {
    if (!validarFormulario()) {
        alert('El formulario contiene errores.');
    } else {
        incrementarIntentosEnvio();
        alert('Intentos de envío: ' + obtenerIntentosEnvio());
        if (confirm('¿Estás seguro de que quieres enviar el formulario?')) {
            document.getElementById("miFormulario").submit();
        }
    }
}

function obtenerIntentosEnvio() {
    let intentos = leerCookie('intentosEnvio');
    return intentos ? parseInt(intentos) : 0;
}

function incrementarIntentosEnvio() {
    let intentos = obtenerIntentosEnvio();
    crearCookie('intentosEnvio', intentos + 1, 7);
}

function crearCookie(nombre, valor, diasExpiracion) {
    let fecha = new Date();
    fecha.setTime(fecha.getTime() + (diasExpiracion*24*60*60*1000));
    let expira = "expires=" + fecha.toUTCString();
    document.cookie = nombre + "=" + valor + ";" + expira + ";path=/";
}

function leerCookie(nombre) {
    let nombreIgual = nombre + "=";
    let arrayCookies = document.cookie.split(';');
    for(let i = 0; i < arrayCookies.length; i++) {
        let c = arrayCookies[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(nombreIgual) == 0) {
            return c.substring(nombreIgual.length, c.length);
        }
    }
    return "";
}

function convertirMayusculas(event) {
    event.target.value = event.target.value.toUpperCase();
}

function validarFormulario() {
    return validarNombreApellido('nombre') &&
           validarNombreApellido('apellidos') &&
           validarEdad() &&
           validarNIF() &&
           validarEmail() &&
           validarProvincia() &&
           validarMatricula();
}

function validarNombreApellido(campoId) {
    let valor = document.getElementById(campoId).value;
    return valor.trim() !== '';
}

function validarEdad() {
    let edad = document.getElementById('edad').value;
    return !isNaN(edad) && edad > 0 && edad < 91;
}

function validarNIF() {
    let nif = document.getElementById('nif').value;
    let regex = /^[0-9]{8}[A-Z]$/; 
    return regex.test(nif);
}

function validarEmail() {
    let email = document.getElementById('email').value;
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    return regex.test(email);
}

function validarProvincia() {
    let provincia = document.getElementById('provincia').value;
    return provincia !== '';
}

function validarMatricula() {
    let matricula = document.getElementById('matricula').value;
    let regex = /^[0-9]{4}[A-Z]{3}$/; // Example format: 1234ABC
    return regex.test(matricula);
}
