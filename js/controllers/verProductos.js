import {
 productServices
} from "../services/productServices.js";

const producto =document.querySelector("[data-card]")
const card =document.querySelector("[data-tituloCard]")


const mostrarProducto = (nombre, precio, urlimagen,id) => {
 const div = document.createElement("div")

 const contenido=`
 <div class="card all__card ">
 <div class="imagen">
  <img src="${urlimagen}" class="card__img box-shadow-1" alt="vaso trooper">
 </div>
 <div class="card__contenido">
  <h4>$${nombre}</h4>
  <p>$${precio}</p>
  <a href="">Ver producto</a>
 </div>
</div>`;

div.innerHTML=contenido
return div;
}
const mostrarTitulo = (categoria) => {
 const elementoh2=document.createElement("div")
 elementoh2.classList.add("titulo__section")
 const contenidoTitulo=`<h2>${categoria}</h2>
 <a href="./productos.html">Ver todo <img src="./assets/derecha.svg" alt="icono derecha"></a>`;
 
 elementoh2.innerHTML=contenidoTitulo;
 card.appendChild(elementoh2)
}

productServices.obtenerProductos().then((data) => {
/* for (let x = 0; x < data.length; x++) {
 const categoria =data[x].categoria
 mostrarTitulo(categoria)
} */
 data.forEach(({
  nombre,
  precio,
  urlimagen,
  id
 }) => {
  const nuevaCard = mostrarProducto(nombre, precio,urlimagen,id)
  producto.appendChild(nuevaCard);
  
 /*  const tituloCard=mostrarCategoria(categoria)
  card.appendChild(tituloCard); */
  /* tituloCard.appendChild(nuevaCard) */
 })
})