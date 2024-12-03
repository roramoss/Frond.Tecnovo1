import { useState } from "react";

const Register = () => {

const [ formData, setFormData] = useState({});




    return (  

<>

<div className="mb-5">
        <h1 className="text-2xl uppercase font-medium mb-8">Registro</h1>
        <form action="">
            <div className="mb-5">
                <label htmlFor="Name" >Nombre</label>
                <input type="text"  id="email" className="w-full py-4 px-4 border rounded-full mt-2 outline-none"
                placeholder="Rocio Esperanza"
                autoComplete="off" />
            </div>
            <div className="mb-5">
                <label htmlFor="lastname" >Apellidos</label>
                <input type="text"  id="email" className="w-full py-4 px-4 border rounded-full mt-2 outline-none"
                placeholder="Ramos"
                autoComplete="off" />
            </div>
            <div className="mb-5">
                <label htmlFor="email" >Correo electronico</label>
                <input type="text"  id="email" className="w-full py-4 px-4 border rounded-full mt-2 outline-none"
                placeholder="rocio@gmail.com"
                autoComplete="off" />
            </div>

            <div className="mb-5">
                <label htmlFor="password" >Contraseña</label>
                <input type="password"  id="password" className="w-full py-4 px-4 border rounded-full mt-2 outline-none"
                placeholder="*********" />
            </div>

            <button type="submit" className="p-4 bg-black text-white w-full rounded-full hover:ring-2  hover:ring-offeset-2 hover:ring-black transition-all duration-300"> Crear cuenta</button>
        </form>




    </div>
    




</>


    );
}
 
export default Register;