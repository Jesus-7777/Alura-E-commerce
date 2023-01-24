/* import { validarLogin } from "./validarUser.js"; */
import {
 userServices
} from "../services/userServices.js"

const formularioLogin = document.querySelector("[data-formlogin]")

const datosFetch = (emailFetch, passwordFetch) => {
 formularioLogin?.addEventListener("submit", (event) => {
  event.preventDefault(); //permite que elformulario no funcione de manera predeterminada
  const email = document.querySelector("[data-email]").value;
  const password = document.querySelector("[data-password]").value;

  if (email === emailFetch && password === passwordFetch) {
   sessionStorage.setItem("usuario",email)
   window.location.href="/index.html"
   console.log("success")
  } else {
   console.log("error")
  }
 });
}

userServices.getUser().then((data) => {
 data.forEach(({
  email,
  password
 }) => {
  datosFetch(email, password);
  console.log({email, password})

 });
}).catch((error) => alert("error en esto"));