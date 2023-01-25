const crearProducto= (nombre,categoria,precio,descripcion,urlimagen,idnuevo)=>{
 return fetch("http://localhost:3000/product",{
  method:"POST",
  headers:{
   "Content-Type" : "application/json"
  },
  body:JSON.stringify({
   nombre,
   categoria,
   precio,
   descripcion,
   urlimagen,
   idnuevo
  })
 })
}


const obtenerProductos=()=>{
 return fetch("http://localhost:3000/product").then(respuesta => {
  return respuesta.json();
 });
}

export const productServices={
 crearProducto,
 obtenerProductos
}