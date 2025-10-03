 import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/auth.hook';


const Header = () => {
  const navigate = useNavigate();

  const {
    auth: { _id },
    setAuth,
    setIsLoading,
  } = useAuth();

  const handleLogout = () => {
    setAuth({});
    setIsLoading(false);
    localStorage.removeItem('token');
    navigate('/');
  };



  return (

<header className='flex justify-between items-center px-6 py-3 bg-black text-white shadow-lg sticky top-0 z-50'>
    
    {/* Logo Link */}
    <Link to='/'>
        {/* Usé h-16 w-16 (64px) como un buen tamaño estándar para un header, 
           pero puedes ajustarlo (h-20 w-20, h-24 w-24, etc.) */}
        <img 
            src="src/assets/logo_transparent.png" 
            alt="TECNOVO" 
            className="h-24 w-50" 
        />
    </Link>
    
    {/* Navegación Derecha */}
    {/* Nota: Asegúrate de que `_id`, `handleLogout`, y `Link` (de React Router) estén definidos en tu componente. */}
    {!_id ? (
        <div className='flex items-center gap-x-3'>
            {/* Links de Login y Registro con color blanco para contraste */}
            <Link to='/auth/login' className="text-white hover:text-indigo-400 font-medium transition duration-200">
                Iniciar sesión
            </Link>
            <Link to='/auth/registro' className="text-white hover:text-indigo-400 font-medium transition duration-200">
                Registro
            </Link>
        </div>
    ) : (
        /* Botón de Cerrar Sesión con color blanco para contraste */
        <button 
            onClick={handleLogout} 
            className="text-white hover:text-indigo-400 font-medium transition duration-200"
        >
            Cerrar sesión
        </button>
    )}
</header>
    
  );
};

export default Header;