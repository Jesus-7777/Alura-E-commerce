const crearUser = (nombre, email, password) => {
 return fetch("http://localhost:3000/user", {
  method: "POST",
  headers: {
   "Content-Type": "application/json"
  },
  body: JSON.stringify({
   nombre,
   email,
   password,
   id: uuid.v4()
  })
 });
};

const getUser = () => {
 return fetch("http://localhost:3000/user").then(respuesta => {
  return respuesta.json();
 });
};

export const userServices = {
 crearUser,
 getUser
}