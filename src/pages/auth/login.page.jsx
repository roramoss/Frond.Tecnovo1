
import { useEffect } from "react";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { validateEmail } from '../../helpers/validator.helpers';
import useAuth from '../../hooks/auth.hook.jsx';
import axiosClient from '../../services/axios.service.jsx';
import Footer from "../../components/footer.jsx";



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
        localStorage.setItem('token', data.user.access_token);
        setAuth(data.user);
        navigate('/');
      }
    } catch (error) {
      console.log(error);
      return toast.error(error.response.data.message);
    }
  };

    useEffect(() => {
      document.body.style.backgroundColor = "#f9f9f9"; // color claro, por ejemplo
      document.body.style.color = "#000"; // texto negro (opcional)
    
      return () => {
        // Limpieza (por si salís del componente)
        document.body.style.backgroundColor = "";
        document.body.style.color = "";
      };
    }, []);
    



    return ( 
    
    <>


    

    
    <div className="max-w-md mx-auto mt-10 bg-white text-black p-20 rounded-xl shadow-lg ring-1 ring-gray-200">
  <h1 className="text-3xl font-semibold uppercase tracking-wide mb-10 text-center">Iniciar Sesión</h1>

  <form>
    <div className="mb-6">
      <label htmlFor="email" className="block text-sm font-medium mb-2 tracking-wide">Correo Electrónico</label>
      <input
        type="email"
        id="email"
        placeholder="rocio@gmail.com"
        autoComplete="off"
        className="w-full px-5 py-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition"
      />
    </div>

    <div className="mb-8">
      <label htmlFor="password" className="block text-sm font-medium mb-2 tracking-wide">Contraseña</label>
      <input
        type="password"
        id="password"
        placeholder="********"
        className="w-full px-5 py-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition"
      />
    </div>

    <button
      type="submit"
      className="w-full py-3 bg-black text-white font-semibold rounded-lg hover:bg-white hover:text-black border-2 border-black transition duration-300"
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