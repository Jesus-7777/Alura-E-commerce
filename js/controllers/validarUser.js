/* import {
 userServices
} from "../services/userServices.js"
export const validarLogin=(email,password)=>{
console.log({email,password})
}

userServices.getUser().then((data) => {
 data.forEach(({
  email,
  password
 }) => {
  validarLogin(email,password);
 });
}).catch((error) => alert("error en esto")); */