import {
 validarForm
} from "./controllers/validar-formulario.js";
const inputs = document.querySelectorAll("input");
const formularioLogin = document.querySelector("[data-formlogin]");
const formularioContacto = document.querySelector("[data-formcontacto]");


inputs.forEach(input => {
 input.addEventListener("blur", (input) => {
  validarForm(input.target);
 });
});


if (formularioLogin) {
 formularioLogin.addEventListener("submit", (event) => {
  event.preventDefault(); //permite que elformulario no funcione de manera predeterminada
  const email = document.querySelector("[data-email]").value;
  const password = document.querySelector("[data-password]").value;
  console.log({
   email,
   password
  });
 });
}

if (formularioContacto) {
 formularioContacto.addEventListener("submit", (event) => {
  event.preventDefault();
  const nombre = document.querySelector("[data-nombre]").value;
  const texto = document.querySelector("[data-texto]").value;
  console.log({
   nombre,
   texto
  });
 });
}






