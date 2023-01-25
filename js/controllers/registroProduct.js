import { productServices } from "../services/productServices.js";

const formularioAgregar = document.querySelector("[data-formagregar]");



function init() {
 const inputFile = document.querySelector("[data-imagen]")
 inputFile.addEventListener('change', mostrarImagen, false);
}

function mostrarImagen(event) {
 const file = event.target.files[0];
 const reader = new FileReader();
 reader.onload = function(event) {
   const img = document.getElementById('verImagen');
   img.src= event.target.result;
 }
 reader.readAsDataURL(file);
}

window.addEventListener('load', init, false);

 formularioAgregar?.addEventListener("submit", (event) => {
  event.preventDefault();
  const nombre = document.querySelector("[data-nombre]").value;
  const categoria = document.querySelector("[data-categoria]").value;
  const precio = document.querySelector("[data-preci]").value;
  const descripcion = document.querySelector("[data-texto]").value;
  const urlimagen = document.querySelector("[data-imagen]").value;
  const idnuevo = sessionStorage.getItem("idUser");
  
  productServices.crearProducto(nombre,categoria,precio,descripcion,urlimagen,idnuevo).then(()=>{
   /* window.location.href="/agregar-producto.html" */
  }).catch(err=>console.log(err));
 });







