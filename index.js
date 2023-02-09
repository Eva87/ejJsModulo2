const form = document.getElementById("form-register");
const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const errorName = document.getElementById("error-name");
const errorEmail = document.getElementById("error-email");
const errorPassword = document.getElementById("error-password");
const errorConfirmPassword = document.getElementById("error-confirm-password");
/* const emailRegex = /^(([^<>()[]\.,;:\s@"]+(.[^<>()[]\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
Este esta bien pero es demasiado estricto en algunos casos que creo que no habria que serlo tanto al final, pero dejo los dos ya que son ambos viables
*/
const emailRegex = /^([^<>()\[\],;:\s@"]+@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z-0-9]+\.)+[a-zA-Z]{2,})))$/;


const input = document.getElementById("input-with-image");
const imgbien = document.getElementById("valid-image");
const imgmal = document.getElementById("invalid-image");
const imgbiene = document.getElementById("valid-imagee");
const imgmale = document.getElementById("invalid-imagee");
const imgbienp = document.getElementById("valid-imagep");
const imgmalp = document.getElementById("invalid-imagep");
const imgbiencp = document.getElementById("valid-imagecp");
const imgmalcp = document.getElementById("invalid-imagecp");

/*Si se pone en el html en cada input, REQUIRED, se quitaria el primer if de cada caso, pero entendi que se queria de este modo, por eso esta asi.
El ancho del cuadro que encuadra el formulario, es del 50% del tamaño total de la pantalla, aunque la imagen del ejercicio lo muestra mas pequeño, a mi me resulta mas vistoso asi que al 30% que seria mas parecido, pero entiendo que hay margen para algunos cambios*/


form.addEventListener("submit", (e) => {
  e.preventDefault();
  let errors = [];
  // Validar el campo Nombre
	if (!name.value) {
		name.style.borderColor = "red";
		errorName.innerText = "El campo nombre es requerido";
		errors.push("El campo nombre es requerido");
		imgmal.style.display = "inline-block";
		imgbien.style.display = "none";
	} else if (!name.value.match(/^[a-zA-Z ]*$/)) {
		name.style.borderColor  = "red";
		errorName.innerText = "El campo nombre solo debe contener letras";
		errors.push("El campo nombre solo debe contener letras");
		imgmal.style.display = "inline-block";
		imgbien.style.display = "none";
	} else {
		name.style.borderColor = "green";
		errorName.innerText = "";
		imgbien.style.display = "inline-block";
		imgmal.style.display = "none";
	}

	// Validar el campo Email
	if (!email.value) {
		email.style.borderColor = "red";
		errorEmail.innerText = "El campo email es requerido";
		errors.push("El campo email es requerido");
		imgmale.style.display = "inline-block";
		imgbiene.style.display = "none";
	} else if (!emailRegex.test(email.value)) {
		email.style.borderColor = "red";
		errorEmail.innerText = "El email no es válido";
		errors.push("El email no es válido");
		imgmale.style.display = "inline-block";
		imgbiene.style.display = "none";
	} else {
		email.style.borderColor = "green";
		errorEmail.innerText = "";
		imgbiene.style.display = "inline-block";
		imgmale.style.display = "none";
	}

	// Validar el campo Clave
	if (!password.value) {
		password.style.borderColor = "red";
		errorPassword.innerText = "El campo clave es requerido";
		errors.push("El campo clave es requerido");
		imgmalp.style.display = "inline-block";
		imgbienp.style.display = "none";
	} else if (password.value.length > 8) {
		password.style.borderColor = "red";
		errorPassword.innerText = "La clave debe tener como máximo 8 caracteres";
		errors.push("La clave debe tener como máximo 8 caracteres");
		imgmalp.style.display = "inline-block";
		imgbienp.style.display = "none";
	} else {
		password.style.borderColor = "green";
		errorPassword.innerText = "";
		imgbienp.style.display = "inline-block";
		imgmalp.style.display = "none";
	}

	// Validar que los valores de los campos Clave y Confirme su clave son idénticos
	if (!confirmPassword.value) {
		confirmPassword.style.borderColor = "red";
		errorConfirmPassword.innerText = "El campo confirmar clave es requerido";
		errors.push("El campo confirmar clave es requerido");
		imgmalcp.style.display = "inline-block";
		imgbiencp.style.display = "none";
	} else if (password.value !== confirmPassword.value) {
		password.style.borderColor = "red";
		errorConfirmPassword.innerText = "Los valores de los campos clave y confirmar clave deben ser idénticos";
		errors.push("Los valores de los campos clave y confirmar clave deben ser idénticos");
		imgmalcp.style.display = "inline-block";
		imgbiencp.style.display = "none";
	} else {
		confirmPassword.style.borderColor = "green";
		errorConfirmPassword.innerText = "";
		imgbiencp.style.display = "inline-block";
		imgmalcp.style.display = "none";
	}

	// Mostrar alert si no hay errores
	if (errors.length === 0) {
		alert("Inscripción correcta");
	}
});