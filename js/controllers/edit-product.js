const btnAgregar =document.getElementById("btn__agreagr");

btnAgregar?.addEventListener("click",(event)=>{
 event.preventDefault();
 if (window.sessionStorage.getItem("usuario")) {
  window.location.href="/agregar-producto.html"
  console.log("perro")
 }else{
  alert("debes iniciar session")
 }
})