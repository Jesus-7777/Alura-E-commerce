import {
 validarForm
} from "./controllers/validar-formulario.js";
const inputs = document.querySelectorAll("input");
const formularioContacto = document.querySelector("[data-formcontacto]");


inputs.forEach(input => {
 input.addEventListener("blur", (input) => {
  validarForm(input.target);
 });
});


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






