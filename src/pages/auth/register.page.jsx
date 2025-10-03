import { useState } from "react";
import { toast } from "sonner";
import { validateEmail } from "../../helpers/validator.helpers";
import axiosClient from "../store/services/axios.service"
import Footer from "../../components/footer";



const Register = () => {

const [ name, setName] = useState("");
const [ lastName, setLastName] = useState("");
const [ email, setEmail] = useState("");
const [ password, setPassword] = useState("");

const handleSubmit = async (e) =>
 {e.preventDefault();
    console.log({name ,lastName, email, password});

if (!name){
    return toast.error('El nombre es obligatorio')
}
if (!lastName){
    return toast.error('El apellido es obligatorio')
}
if (!email){
    return toast.error('El Email es obligatorio')
}
if (!validateEmail(email)){
    return toast.error('El email no es valido')
}
if (!password){
    return toast.error('La contraseña es obligatorio')
}

if (password.length < 6){
    return toast.error('La contraseña debe tener mas de 6 caracteres')
}

//registrar al uruario en la base de datos 

try{

    const toastLoanding = toast.loading('Creando usuario...')

const {data} = await axiosClient.post('users/create', {
    name,
     lastName,
     email,
      password
    
    });
 if(data.response === "success"){
   
    toast.success("Usuario creado correctamente")
    toast.dismiss(toastLoanding);
 }

} catch(error){
    return toast.error("Error al crear usuario");
} finally{
    setName('');
    setLastName('');
    setEmail('');
    setPassword('');
   
}

 };

    return (  

<>


<div className="max-w-md mx-auto mt-10 bg-white text-gray-900 p-10 rounded-2xl shadow-xl ring-4 ring-indigo-500/10">

    {/* Título Modificado: Ahora usa text-black para que sea negro */}
    <h1 className="text-4xl font-bold tracking-tight mb-8 text-center text-black">
        Registro
    </h1>

    <form onSubmit={handleSubmit}>
        
        <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700">
                Nombre
            </label>
            <input
                type="text"
                id="name"
                placeholder="Rocio Esperanza"
                autoComplete="off"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 transition duration-200 shadow-inner"
            />
        </div>

        <div className="mb-6">
            <label htmlFor="lastname" className="block text-sm font-medium mb-2 text-gray-700">
                Apellidos
            </label>
            <input
                type="text"
                id="lastname"
                placeholder="Ramos"
                autoComplete="off"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 transition duration-200 shadow-inner"
            />
        </div>

        <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">
                Correo Electrónico
            </label>
            <input
                type="text"
                id="email"
                placeholder="rocio@gmail.com"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 transition duration-200 shadow-inner"
            />
        </div>

        <div className="mb-8">
            <label htmlFor="password" className="block text-sm font-medium mb-2 text-gray-700">
                Contraseña
            </label>
            <input
                type="password"
                id="password"
                placeholder="*********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 transition duration-200 shadow-inner"
            />
        </div>

       <button
    type="submit"
    // Fíjate en los cambios: bg-black, shadow-gray-900/50, hover:bg-gray-900, hover:shadow-gray-900/60
    className="w-full py-3 bg-black text-white font-bold rounded-xl shadow-lg shadow-gray-900/50 
               hover:bg-gray-900 hover:shadow-xl hover:shadow-gray-900/60 
               transition duration-300 transform hover:-translate-y-0.5"
>
    Crear Cuenta
</button>
    </form>
</div>

<br /><br /><br /><br /><br />

 <Footer/>
    




</>


    );
}
 
export default Register;