// Función para comprobar la contraseña con expresión regular
function comprobarPassword(str) {
  let expresionRegular = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return expresionRegular.test(str);
}

// Función para comprobar la contraseña con validaciones individuales
function comprobarPassword2(str) {
  let errors = [];
  if (str.length < 8) {
    errors.push("Tu password debe tener al menos 8 caracteres.");
  }
  if (str.search(/[a-z]/i) < 0) {
    errors.push("Tu password debe tener al menos una letra.");
  }
  if (str.search(/[0-9]/) < 0) {
    errors.push("Tu password debe tener al menos un dígito.");
  }
  if (errors.length > 0) {
    alert(errors.join("\n"));
    return false;
  }
  return true;
}

// Función contador de visitas
function getVisitCount() {
  let count = 0;
  const cookieValue = document.cookie.replace(
    /(?:(?:^|.*;\s*)visitCount\s*=\s*([^;]*).*$)|^.*$/,
    "$1"
  );
  if (cookieValue) {
    count = parseInt(cookieValue, 10);
  }
  count++;
  document.cookie = "visitCount=" + count + ";path=/";
  return count;
}

// Aplicar contador de visitas al cargar la página
document.addEventListener("DOMContentLoaded", function() {
  let visitCountElement = document.getElementById("visitCount");
  if (visitCountElement) {
    visitCountElement.textContent = getVisitCount();
  }

  // Eventos para el formulario de administrador
  let adminForm = document.getElementById("adminForm");
  if (adminForm) {
    adminForm.addEventListener("submit", validarFormularioAdmin);
  }

  // Eventos para el formulario de preguntas
  let questionForm = document.getElementById("questionForm");
  if (questionForm) {
    questionForm.addEventListener("submit", validarFormularioPregunta);
  }
});

// Función para validar y formatear nombres (suponiendo que esta función existe)
function validarYFormatearNombre(nombre) {
  // Implementación de la función (debe existir)
  return nombre.trim();
}

// Validar formulario de preguntas
function validarFormularioPregunta(event) {
  event.preventDefault();
  let questionName = document.getElementById("questionName").value;
  let correctAnswer = document.querySelector('input[name="correctAnswer"]:checked').value;

  // Validación del nombre de la pregunta
  if (!/^[A-ZÁÉÍÓÚÑ][a-zA-ZáéíóúÁÉÍÓÚñÑ ,;.!?]*$/.test(questionName)) {
    alert("El nombre de la pregunta no es válido.");
    return;
  }

  // Aquí, agregar lógica adicional si es necesario
}

// Validar formulario de administrador
function validarFormularioAdmin(event) {
  event.preventDefault();
  let nombre = document.getElementById("name").value;
  let apellidos = document.getElementById("surname").value;
  let password = document.getElementById("password").value;
  let passwordConfirm = document.getElementById("passwordConfirm").value;

  if (nombre.length < 3) {
    alert("El nombre debe tener al menos 3 caracteres.");
    return;
  }

  nombre = validarYFormatearNombre(nombre);
  apellidos = validarYFormatearNombre(apellidos);

  if (password !== passwordConfirm) {
    alert("Las contraseñas no coinciden.");
    return;
  }

  if (!comprobarPassword(password)) {
    alert("La contraseña no cumple con los requisitos.");
    return;
  }

  alert("Formulario enviado correctamente.");
}
