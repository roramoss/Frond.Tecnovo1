
import { useEffect } from "react";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { validateEmail } from '../../helpers/validator.helpers';
import useAuth from '../../hooks/auth.hook.jsx';
import axiosClient from '../../services/axios.service.jsx';
import Footer from "../../components/footer.jsx";
import Header from "../../components/header.component.jsx";



const Login = () => {

     const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const { setAuth } = useAuth();

  const handleSubmit = async (e) => {
    
    e.preventDefault();

    if (!email) {
      return toast.error('El email es obligatorio');
    }

    if (!validateEmail(email)) {
      return toast.error('El email no es válido');
    }

    if (!password) {
      return toast.error('El password es obligatorio');
    }

    try {
      const { data } = await axiosClient.post('/users/login', {
        email,
        password,
      });

      if (data.response === 'success') {
        localStorage.setItem("token", data.user.access_token);
        setAuth(data.user);
        navigate('/tienda');
      }
    } catch (error) {
      console.log(error);
      return toast.error(error.response.data.message);
    }
  };

   
  

    return ( 
    
    <>


    

    
<div className="max-w-md mx-auto mt-10 bg-white/80 backdrop-blur-sm text-gray-900 p-10 lg:p-12 rounded-2xl shadow-2xl border border-gray-100 ring-4 ring-indigo-500/10">
 <h1 className="text-4xl font-bold tracking-tight mb-8 text-center text-black">
    Iniciar Sesión
</h1>

<form onSubmit={handleSubmit}>
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
            // CAMBIOS: Focus de índigo a un gris oscuro (negro sutil)
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-300 focus:border-gray-900 transition duration-200 shadow-inner"
        />
    </div>

    <div className="mb-8">
        <label htmlFor="password" className="block text-sm font-medium mb-2 text-gray-700">
            Contraseña
        </label>
        <input
            type="password"
            id="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            // CAMBIOS: Focus de índigo a un gris oscuro (negro sutil)
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-300 focus:border-gray-900 transition duration-200 shadow-inner"
        />
    </div>

    <button
        type="submit"
        // CAMBIOS: Botón y sombras de índigo a negro/gris
        className="w-full py-3 bg-black text-white font-bold rounded-xl shadow-lg shadow-gray-900/50 
                   hover:bg-gray-900 hover:shadow-xl hover:shadow-gray-900/60 
                   transition duration-300 transform hover:-translate-y-0.5"
    >
        Iniciar Sesión
    </button>
</form>
</div>
<br /><br /><br /><br /><br /> <br /><br /><br /><br />

<Footer/>
    
    
    
    </>
    

);
}
 
export default Login;