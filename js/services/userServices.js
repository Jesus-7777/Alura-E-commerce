const crearUser= (nombre,email,pasword)=>{
 return fetch("http://localhost:3000/user",{
  method:"POST",
  headers:{
   "Content-Type" : "application/json"
  },
  body:JSON.stringify({
   nombre,
   email,
   pasword,
   id:uuid.v4()
  })
 })
}

export const userServices={
 crearUser
}