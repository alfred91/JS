window.onload = iniciar;

function iniciar() {
    // Cuando el documento esté cargado asignaremos los eventos siguientes.
    // Al hacer click en el botón de enviar tendrá que llamar a la validación del formulario.
    document.getElementById("enviar").addEventListener('click', validar, false);

    // Asignamos que cuando pierda el foco el Nombre y los apellidos ponga en mayúsculas las Iniciales.
    document.getElementById("nombre").addEventListener('blur', mayusculas, false);
}

function validar(eventopordefecto) {
    var errores = document.getElementById("errores");
    errores.innerHTML = ""; // Limpiamos los errores anteriores

    if (contadorIntentos() && validarCamposTextoYEdad("nombre,email,fechaNac,dni,pass,passver") && validarNIF() && validarEmail() && validarFecha()) {
        return confirmarEnvio();
    } else {
        // Cancelamos el evento de envío por defecto asignado al botón de submit enviar.
        eventopordefecto.preventDefault();

        // Sale de la función devolviendo false.
        return false;
    }
}

function mayusculas() {
    this.value = this.value.toUpperCase();
}

function validarCamposTextoYEdad(campos) {
    var miformulario = document.getElementById("f1");
    var camposChequear = campos.split(",");
    var errores = document.getElementById("errores");
    var error = false;

    for (var i = 0; i < camposChequear.length; i++) {
        // Eliminamos la clase error si es que estaba asignada a algún campo anteriormente.
        miformulario.elements[camposChequear[i]].className = "";

        if (miformulario.elements[camposChequear[i]].type === "text" && miformulario.elements[camposChequear[i]].value === "") {
            errores.innerHTML += "El campo " + camposChequear[i] + " no puede estar en blanco<br>";
            miformulario.elements[camposChequear[i]].focus();
            miformulario.elements[camposChequear[i]].className = "error";
            error = true;
        }
    }

    return !error;
}

function validarNIF() {
    var patron = /^\d{8}-[A-Z]{1}$/;
    var errores = document.getElementById("errores");

    if (patron.test(document.getElementById("dni").value)) {
        return true;
    } else {
        errores.innerHTML += "El campo DNI está incorrecto. Formato 8 dígitos - Letra Mayúscula<br>";
        document.getElementById("dni").focus();
        document.getElementById("dni").className = "error";
        return false;
    }
}

function validarEmail() {
    var patron = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var errores = document.getElementById("errores");

    if (patron.test(document.getElementById("email").value)) {
        return true;
    } else {
        errores.innerHTML += "El campo Email está incorrecto.<br>";
        document.getElementById("email").focus();
        document.getElementById("email").className = "error";
        return false;
    }
}

function validarFecha() {
    var patron1 = /^\d{2}\/\d{2}\/\d{4}$/;
    var errores = document.getElementById("errores");

    if (patron1.test(document.getElementById("fechaNac").value)) {
        return true;
    } else {
        errores.innerHTML += "El campo Fecha de Nacimiento está incorrecto. Formato dd/mm/aaaa<br>";
        document.getElementById("fechaNac").focus();
        document.getElementById("fechaNac").className = "error";
        return false;
    }
}

function contadorIntentos() {
    var contador = 0;
    var errores = document.getElementById("errores");

    // Si no existe la cookie la creamos y grabamos el texto contador=0.
    if (document.cookie === "") {
        document.cookie = "contador=0";
    }

    contador = parseInt(document.cookie.substring(9)) + 1;
    document.cookie = "contador=" + contador;
    errores.innerHTML += "Intento de Envíos del formulario: " + contador + ".<br>";
    return true;
}

function confirmarEnvio() {
    return confirm("¿Deseas enviar el formulario?");
}
