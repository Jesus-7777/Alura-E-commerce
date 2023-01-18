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

/* inputBuscar.onclick=mostrar; */
