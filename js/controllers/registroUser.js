import { userServices } from "../services/userServices.js";


const registroUser = document.querySelector("[data-formregistrouser]");
 registroUser?.addEventListener("submit", (event) => {
  event.preventDefault();
  const nombre = document.querySelector("[data-nombre]").value;
  const email = document.querySelector("[data-email]").value;
  const password = document.querySelector("[data-password]").value;
  userServices.crearUser(nombre, email, password).then(()=>{
   window.location.href="/index.html"
  }).catch(err=>console.log(err));
  console.log({
   nombre,
   email,
   password,
  });
 });