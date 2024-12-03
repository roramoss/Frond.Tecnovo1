import { useState } from "react";

const Register = () => {

const [ name, setName] = useState({});
const [ lastName, setLastName] = useState({});
const [ email, setEmail] = useState({});
const [ password, setPassword] = useState({});

const handleSubmit = (e) =>
 {e.preventDefault();

console.log({ name, lastName, email, password})


 }

    return (  

<>

<div className="mb-5">
        <h1 className="text-2xl uppercase font-medium mb-8">Registro</h1>
        <form action=""  onSubmit={handleSubmit}>
            <div className="mb-5">
                <label htmlFor="Name" >Nombre</label>
                <input type="text"  id="name" className="w-full py-4 px-4 border rounded-full mt-2 outline-none"
                placeholder="Rocio Esperanza"
                autoComplete="off"
                value= {name}
                onChange={(e)=> setName(e.target.value)} />
            </div>
            <div className="mb-5">
                <label htmlFor="lastname" >Apellidos</label>
                <input type="text"  id="lastname" className="w-full py-4 px-4 border rounded-full mt-2 outline-none"
                placeholder="Ramos"
                autoComplete="off"
                value= {lastName}
                onChange={(e)=> setLastName(e.target.value)} /> 

            </div>
            <div className="mb-5">
                <label htmlFor="email" >Correo electronico</label>
                <input type="text"  id="email" className="w-full py-4 px-4 border rounded-full mt-2 outline-none"
                placeholder="rocio@gmail.com"
                autoComplete="off"
                value= {email}
                onChange={(e)=> setEmail(e.target.value)}/>
            </div>

            <div className="mb-5">
                <label htmlFor="password" >Contraseña</label>
                <input type="password"  id="password" className="w-full py-4 px-4 border rounded-full mt-2 outline-none"
                placeholder="*********" 
                value= {password}
                onChange={(e)=> setPassword(e.target.value)}/>
            </div>

            <button type="submit" className="p-4 bg-black text-white w-full rounded-full hover:ring-2  hover:ring-offeset-2 hover:ring-black transition-all duration-300"> Crear cuenta</button>
        </form>




    </div>
    




</>


    );
}
 
export default Register;