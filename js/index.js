const inputBuscar= document.querySelector("[data-form-search]");

/* function mostrar(){
 const btnBuscar =document.querySelector("[data-form]")
 btnBuscar.classList.remove("ocultar");
 btnBuscar.classList.add("barra__buscador")
 console.log(btnBuscar)
} */

const mostrar=()=>{
 const btnBuscar =document.querySelector("[data-form]")
 btnBuscar.classList.remove("ocultar");
 btnBuscar.classList.add("barra__buscador")
}

inputBuscar.addEventListener("click",mostrar);

/* inputBuscar.onclick=mostrar; 

const bgImage = document.querySelector('.classname') 
bgImage.style.backgroundImage = "url('your-image.png')"


// Javascript createElement

const divBackground = document.createElement("div")
divBackground.style.background = 'url('your-image.png')'
document.body.appendChild(divBackground)
*/
