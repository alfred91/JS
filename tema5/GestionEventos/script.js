document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.forms["formulario"];
  let intentos = parseInt(getCookie("intentos")) || 0;
  mostrarIntentos();

//MOSTRAMOS LOS INTENTOS Y AGREGAMOS UNA FUNCION QUE CUENTA CUANTAS VECES SE LE DA AL SUBMIT
  formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    intentos++;
    setCookie("intentos", intentos, 1);
    mostrarIntentos();

    if (validoarFormulario()) {
      if (confirm("¿Quieres enviar el formulario?")) {
        this.submit();
      }
    }
  });

//AÑADIMOS UN EVENTO DE ESCUCHA PARA CONVERTIR NOMBRE Y APELLIDOS A MAYUS CUANDO SE PIERDE EL FOCO
  formulario["nombre"].addEventListener("blur", convertirMayusculas);
  formulario["apellidos"].addEventListener("blur", convertirMayusculas);

  function convertirMayusculas(event) {
    event.target.value = event.target.value.toUpperCase();
  }

// FUNCION VALIDAR FORMULARIO
  function validoarFormulario() {
    let valido = true;
    const nombre = formulario["nombre"].value;
    const apellidos = formulario["apellidos"].value;
    const edad = formulario["edad"].value;
    const nif = formulario["nif"].value;
    const email = formulario["email"].value;
    const provincia = formulario["provincia"].value;
    const fecha = formulario["fecha"].value;
    const telefono = formulario["telefono"].value;
    const hora = formulario["hora"].value;

    let errores = "";

//NOMBRE Y APELLIDOS REQUERIDOS
    if (!nombre || !apellidos) {
      errores += "El Nombre y Apellidos son datos obligatorios.<br>";
      formulario["nombre"].focus();
      valido = false;
    }

// RANGO DE EDAD COHERENTE
    if (!/^\d{0,3}$/.test(edad) || edad < 0 || edad > 105) {
      errores += "La edad comprende un número entre 0 y 105.<br>";
      formulario["edad"].focus();
      valido = false;
    }

//VALIDACION DEL DNI:
    if (!/^\d{8}-[A-Za-z]$/.test(nif)) {
      errores += "NIF incorrecto. Formato: 8 dígitos, guión y letra.<br>";
      formulario["nif"].focus();
      valido = false;
    }

//VALIDACION DEL CORREO:
    if (!/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(email)) {
      errores += "Email no válido.<br>";
      formulario["email"].focus();
      valido = false;
    }

//VALIDACION DE LA PROVINCIA:
    if (provincia === "0") {
      errores += "Selecciona una provincia.<br>";
      formulario["provincia"].focus();
      valido = false;
    }

//VALIDACION DE LA FECHA:
    if (!/^\d{2}[\/-]\d{2}[\/-]\d{4}$/.test(fecha)) {
      errores += "Fecha incorrecta. Formatos: dd/mm/aaaa o dd-mm-aaaa.<br>";
      formulario["fecha"].focus();
      valido = false;
    }

//VALIDACION DEL TELEFONO:
    if (!/^\d{9}$/.test(telefono)) {
      errores += "El telefono no contiene 9 dígitos.<br>";
      formulario["telefono"].focus();
      valido = false;
    }

//VALIDACION DE LA HORA:
    if (!/^\d{2}:\d{2}$/.test(hora)) {
      errores += "La hora no es correcta. Formato: hh:mm.<br>";
      formulario["hora"].focus();
      valido = false;
    }

//MOSTRAR ERRORES SI HAY, SI NO ES CORRECTO:
    if (errores) {
      document.getElementById("errores").innerHTML = errores;
    } else {
      document.getElementById("errores").innerHTML = "";
    }
    return valido;
  }

// ESTABLECER LA COOKIE:
  function setCookie(nombre, valor, dias) {
    const d = new Date();
    d.setTime(d.getTime() + dias * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = nombre + "=" + valor + ";" + expires + ";path=/";
  }

// LLAMAR A LA COOKIE:
  function getCookie(nombre) {
    let name = nombre + "=";
    let ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

//MOSTRAR EL NUMERO DE INTENTOS:
  function mostrarIntentos() {
    document.getElementById("intentos").innerHTML =
      "Intento de Envíos del formulario: " + intentos;
  }
});
