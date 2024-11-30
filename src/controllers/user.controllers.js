
import { User } from "../models/user.model.js";
import { validateEmail } from "../helpers/validator.helpers.js";
import { response } from "express";

export const createUser = async (req, res) => {
  
const { name, lastname, email, password } = req.body;
console.log({name,lastname, email, password});

if (!name){
    return res.status(403).json({response: 'error', message:'El nombre es obligatorio'});
}

if (!lastname){
    return res.status(403).json({response: 'error', message:'El apellido es obligatorio'});
}
if (!email){
    return res.status(403).json({response: 'error', message:'El email es obligatorio'});
}
if (!validateEmail(email)){
    return res.status(403).json({response: "error", message:"el email no es valido"})
}


if (!password){
    return res.status(403).json({response: 'error', message:'La contraseña es obligatoria'});

}

try {

const user = new User ({
    name, lastname, email, password,
});


const savedUser = await user.save();

return res.status(200).json({response: "succes", message:"Usuario creado correctamente", user: savedUser

})

} catch(error){
    console.log(error);
    return res.status(500).json({response:"error", message:'Error al crear el usuario'});
}


};

