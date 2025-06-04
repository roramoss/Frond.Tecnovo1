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


<div className="max-w-md mx-auto mt-10 bg-white text-black p-10 rounded-xl shadow-lg ring-1 ring-gray-200">
  <h1 className="text-3xl font-semibold uppercase tracking-wide mb-10 text-center">Registro</h1>

  <form onSubmit={handleSubmit}>
    <div className="mb-6">
      <label htmlFor="name" className="block text-sm font-medium mb-2 tracking-wide">Nombre</label>
      <input
        type="text"
        id="name"
        placeholder="Rocio Esperanza"
        autoComplete="off"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full px-5 py-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition"
      />
    </div>

    <div className="mb-6">
      <label htmlFor="lastname" className="block text-sm font-medium mb-2 tracking-wide">Apellidos</label>
      <input
        type="text"
        id="lastname"
        placeholder="Ramos"
        autoComplete="off"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        className="w-full px-5 py-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition"
      />
    </div>

    <div className="mb-6">
      <label htmlFor="email" className="block text-sm font-medium mb-2 tracking-wide">Correo Electrónico</label>
      <input
        type="text"
        id="email"
        placeholder="rocio@gmail.com"
        autoComplete="off"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-5 py-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition"
      />
    </div>

    <div className="mb-8">
      <label htmlFor="password" className="block text-sm font-medium mb-2 tracking-wide">Contraseña</label>
      <input
        type="password"
        id="password"
        placeholder="*********"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full px-5 py-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition"
      />
    </div>

    <button
      type="submit"
      className="w-full py-3 bg-black text-white font-semibold rounded-lg hover:bg-white hover:text-black border-2 border-black transition duration-300"
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