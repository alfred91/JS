window.onload = iniciar;

function iniciar() {
    document.getElementById("enviar").addEventListener("click", validar, false);

    document.getElementById("nombre").addEventListener("blur", mayuscula, false);
    document.getElementById("apellidos").addEventListener("blur", mayuscula, false);
}

function validar(eventopordefecto) {
    if (contadorIntentos() && validarCamposNombreApellidos("0,1,2") && validarPass() && validarNIF()
        && validarEmail() && validarFecha() && confirmarEnvio())
        return true;
    else {
        eventopordefecto.preventDefault();
        return false;
    }
}

function mayuscula() {
    this.value = this.value.toUpperCase();
}

function validarCamposNombreApellidos() {
    var nombre = document.getElementById("nombre").value
    var apellidos = document.getElementById("apellidos").value

    if (nombre === "" || apellidos === "") {
        document.getElementById("errores").innerHTML = "Los campos Nombre y Apellidos no pueden estar en blanco";
        return false;
    }

    return true;
}

function validarEmail() {
    var email = document.getElementById("email").value
    var patron = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (patron.test(email)) {
        return true;
    } else {
        document.getElementById("errores").innerHTML = "El campo Email es incorrecto";
        return false;
    }
}

function validarPass() {
    var contraseña = document.getElementById("pass").value;
    var contraseña1 = document.getElementById("passver").value;

    if (contraseña === contraseña1 && contraseña !== "" && contraseña1 !== "") {
        return true;
    } else {
        document.getElementById("errores").innerHTML = "Las contraseñas no coinciden";
        return false;
    }
}

function validarFecha() {
    var fecha = document.getElementById("fnac").value
    var patron = /^\d{4}-\d{2}-\d{2}$/;

    if (patron.test(fecha)) {
        return true;
    } else {
        document.getElementById("errores").innerHTML = "La fecha de nacimiento es incorrecta";
        return false;
    }
}

function validarNIF() {
    var nif = document.getElementById("nif").value
    var patron = /^\d{8}-[A-Z]$/;

    if (patron.test(nif)) {
        return true;
    } else {
        document.getElementById("errores").innerHTML = "El campo NIF es incorrecto. Formato: 8 números, un guion y una letra";
        return false;
    }
}

function validarContraseña() {
    var pass = document.getElementById("pass").value;
    var passver = document.getElementById("passver").value;

    if (pass === passver) {
        return true;
    } else {
        document.getElementById("errores").innerHTML = "Las contraseñas no coinciden";
        return false;
    }
}

function contadorIntentos() {
    var contador = 0;

    var cookieArray = document.cookie.split(';');
    for (var i = 0; i < cookieArray.length; i++) {
        var cookie = cookieArray[i].trim();
        if (cookie.startsWith('contador=')) {
            contador = parseInt(cookie.substring(9)) || 0;
            break;
        }
    }

    contador++;
    document.cookie = "contador=" + contador;
    document.getElementById("intentos").innerHTML = "Intento de Envíos del formulario: " + contador + ".";
    return true;
}

function confirmarEnvio() {
    document.getElementById("errores").innerHTML = "";
    return confirm("¿Deseas enviar el formulario?");
}