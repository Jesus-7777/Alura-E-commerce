export function validarForm(input) {
 const tipoInput=input.dataset.tipo;

 if (input.validity.valid) {
  input.parentElement.classList.remove("input-container--invalid");
  input.parentElement.querySelector(".input-menssage-error").innerHtml = "";
 } else {
  input.parentElement.classList.add("input-container--invalid");
  input.parentElement.querySelector(".input-menssage-error").innerHTML = mostrarMensajeError(tipoInput, input);
 }
}
const tipoError = [
 "valueMissing",
 "typeMismatch",
 "patternMismatch"
];

const mensajeError = {
 nombre: {
  valueMissing: "Este campo no puede estar vacio"
 },
 email: {
  valueMissing: "Este campo no puede estar vacio",
  typeMismatch: "El Email no es valido"
 },
 password:{
  valueMissing:"Este campo contraseña no puede estar vacio",
  patternMismatch:"Al menos 6 caracteres, máximo 12, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales."
 },
 categoria: {
  valueMissing: "Este campo no puede estar vacio"
 },
 precio: {
  valueMissing: "Este campo no puede estar vacio"
 },
 texto: {
  valueMissing: "Este campo no puede estar vacio"
 }
};


function mostrarMensajeError(tipoInput, input) {
 let mensaje = ""
 tipoError.forEach(error => {
  if (input.validity[error]) {
   mensaje = mensajeError[tipoInput][error];
  }
 });
 return mensaje;
}