
/** 
 * !uncion de mostrar el buscador en el navegador
 function mostrar(){
 const btnBuscar =document.querySelector("[data-form]")
 btnBuscar.classList.remove("ocultar");
 btnBuscar.classList.add("barra__buscador")
 console.log(btnBuscar)
} */
/*  const imagen = new Image();
imagen.onload = imagenCargada;
imagen.src = "ejemplo.png" */
 
/* document.addEventListener("DOMContentLoaded", inicio, false); */
/* 
      function inicio()
      {
        const nuevaImagen = new Image();
        alert("Se procede a la carga en memoria de la imagen");
        nuevaImagen = cargarImagen("../assets/camisa-g.jpg");
        console.log(nuevaImagen);
      }

      function cargarImagen(url)
      {
        const imagen = new Image();
        imagen.onload = imagenCargada;
        imagen.src = url;
        return imagen;
      }

      function imagenCargada()
      {
        alert("La imagen se ha cargado correctamente");
      } */

/* inputBuscar.onclick=mostrar; 

const bgImage = document.querySelector('.classname') 
bgImage.style.backgroundImage = "url('your-image.png')"


// Javascript createElement

const divBackground = document.createElement("div")
divBackground.style.background = 'url('your-image.png')'
document.body.appendChild(divBackground)
*/

/**
 * !Previsualizar imagenes
 * function mostrar(){
  var archivo = document.getElementById("file").files[0];
  var reader = new FileReader();
  if (file) {
    reader.readAsDataURL(archivo );
    reader.onloadend = function () {
      document.getElementById("img").src = reader.result;
    }
  }
}
 * <input type="file" id="file" accept="image/*" onchange="mostrar()"/>
<br>
<img id="img"/>

 */

/**
 * !mostrar barra de busqueda
 * const inputBuscar= document.querySelector("[data-form-search]");


const mostrar=()=>{
 const btnBuscar =document.querySelector("[data-form]")
 btnBuscar.classList.remove("ocultar");
 btnBuscar.classList.add("barra__buscador")
}

inputBuscar.addEventListener("click",mostrar);
 */


/* const reader = new FileReader();
reader.addEventListener('load', (event) => {
 document.getElementById("verImagen").src = event.target.result;
});
reader.readAsDataURL(imagen); */