function comprobarPassword(str) {
  // Utilizo el siguiente script para una contraseña mínima de 8 letras, con al menos un símbolo, letras mayúsculas y minúsculas y un número
  let expresionRegular =
    /^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return expresionRegular.test(str);
}

function comprobarPassword2(str) {
  errors = [];
  if (str.length < 8) {
    errors.push("Tu password debe tener al menos 8 caracteres.");
  }
  if (str.search(/[a-z]/i) < 0) {
    errors.push("Tu password debe tener al menos una letra.");
  }
  if (str.search(/[0-9]/) < 0) {
    errors.push("Tu password debe tener al menos un digito.");
  }
  if (errors.length > 0) {
    alert(errors.join("\\n"));
    return false;
  }
  return true;
}

password = "pru2e222@22";
console.log("funcion 1: " + comprobarPassword(password));
console.log("funcion 2: " + comprobarPassword2(password));

// FUNCION CONTADOR DE VISITAS
function getVisitCount() {
  let count = 0;
  const cookieValue = document.cookie.replace(
    /(?:(?:^|.*;\\s*)visitCount\\s*\\=\\s*([^;]*).*$)|^.*$/,
    "$1"
  );
  if (cookieValue) {
    count = parseInt(cookieValue, 10);
  }
  count++;
  document.cookie = "visitCount=" + count + ";path=/";
  return count;
}

document.getElementById("visitCount").textContent = getVisitCount();

// FUNCION PARA PREGUNTAS
document
  .getElementById("questionForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let questionName = document.getElementById("questionName").value;
    let correctAnswer = document.querySelector(
      'input[name="correctAnswer"]:checked'
    ).value;

    // VALIDAR PREGUNTA
    if (!/^[A-ZÁÉÍÓÚÑ][a-zA-ZáéíóúÁÉÍÓÚñÑ ,;.!?]*$/.test(questionName)) {
      alert("El nombre de la pregunta no es válido.");
      return;
    }
  });

//CAMBIOS DE EVENTOS PARA NOMBRE Y APELLIDOS
document.getElementById("name").addEventListener("change", function (event) {
  event.target.value = validarYFormatearNombre(event.target.value);
});

document.getElementById("surname").addEventListener("change", function (event) {
  event.target.value = validarYFormatearNombre(event.target.value);
});

document
  .getElementById("adminForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let nombre = document.getElementById("name").value;
    let apellidos = document.getElementById("surname").value;
    let password = document.getElementById("password").value;
    let passwordConfirm = document.getElementById("passwordConfirm").value;

    if (nombre.length < 3) {
      document.getElementById("adminMessageContainer").innerHTML =
        "El nombre debe tener al menos 3 caracteres.";
      return;
    }

    nombre = validarYFormatearNombre(nombre);
    apellidos = validarYFormatearNombre(apellidos);

    if (password !== passwordConfirm) {
      document.getElementById("adminMessageContainer").innerHTML =
        "Las contraseñas no coinciden.";
      return;
    }

    if (!comprobarPassword(password)) {
      document.getElementById("adminMessageContainer").innerHTML =
        "La contraseña no cumple con los requisitos.";
      return;
    }

    document.getElementById("adminMessageContainer").innerHTML =
      "Formulario enviado correctamente.";
  });
