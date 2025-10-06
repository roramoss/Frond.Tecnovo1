import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/auth.hook';

// 🛑 SOLUCIÓN: Importar la imagen para obtener la URL correcta
import logoImage from "../assets/logo_transparent.png";


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
        
        <header  className='flex justify-between items-center px-6 py-3 bg-black text-white shadow-lg sticky top-0 z-50'>
            
         
            <Link to='/'>
                <img 
                    
                    src={logoImage} 
                    alt="TECNOVO Logo" 
                    className="h-16 w-auto" // Reduje el tamaño para un header más compacto
                />
            </Link>
            
            
            {!_id ? (
                <div className='flex items-center gap-x-6'>
                    
                    <Link 
                        to='/auth/login' 
                        className="text-white hover:text-indigo-400 font-medium transition duration-200"
                    >
                        Iniciar sesión
                    </Link>
                    <Link 
                        to='/auth/registro' 
                        className="text-white hover:text-indigo-400 font-medium transition duration-200"
                    >
                        Registro
                    </Link>
                </div>
            ) : (
                /* Botón de Cerrar Sesión */
                <button 
                    onClick={handleLogout} 
                    className="px-4 py-2 text-sm font-semibold bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-300"
                >
                    Cerrar sesión
                </button>
            )}
        </header>
  );
};

export default Header;