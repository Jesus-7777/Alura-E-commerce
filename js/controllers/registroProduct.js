import { productServices } from "../services/productServices.js";

const formularioAgregar = document.querySelector("[data-formagregar]");

if (formularioAgregar) {
 formularioAgregar.addEventListener("submit", (event) => {
  event.preventDefault();
  const nombre = document.querySelector("[data-nombre]").value;
  const categoria = document.querySelector("[data-categoria]").value;
  const precio = document.querySelector("[data-preci]").value;
  const descripcion = document.querySelector("[data-texto]").value;
  const urlimagen = document.querySelector("[data-imagen]").value;
  productServices.crearProducto(nombre,categoria,precio,descripcion,urlimagen).then(()=>{
   /* window.location.href="/agregar-producto.html" */
   console.log("esto esta mal")
  })
  console.log({
   nombre,
   categoria,
   precio,
   descripcion,
   urlimagen
  });
 });
}