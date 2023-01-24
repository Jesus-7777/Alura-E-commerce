const crearProducto= (nombre,categoria,precio,descripcion,urlimagen)=>{
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
   urlimagen
  })
 })
}

export const productServices={
 crearProducto,
}