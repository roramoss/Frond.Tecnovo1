
import { Navigate, Link } from 'react-router-dom';
import useAuth from '../../hooks/auth.hook';

const DashboardPage = () => {
  const {
    auth: { permissions, email },
    isLoading,
  } = useAuth();

  if (isLoading) return <h1>Cargando...</h1>;

  // Si el usuario tiene permisos de administrador, muestra el Dashboard
  return permissions.includes('isAdmin') ? (
    <div className='min-h-screen pt-20 flex flex-col items-center bg-gray-50 p-8'>
      
      {/* Mensaje principal del Dashboard */}
      <div className='text-3xl font-light text-gray-800 text-center mb-8'>
        Dashboard: El usuario <span className='font-bold text-red-600'>{email}</span> es administrador.
      </div>

      {/* Contenedor de Enlaces - Centrado y con Espaciado */}
      <div className='flex flex-col space-y-4 w-full max-w-sm'>
        
        {/* Enlace a Home */}
        <Link 
          to='/' 
          className='px-6 py-3 text-xl font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 transform hover:scale-[1.02] text-center'
        >
          Ir a Home
        </Link>
        
        {/* Enlace a Gestor de Usuarios */}
        <Link 
          to='/admin/gestor-usuarios' 
          className='px-6 py-3 text-xl font-semibold text-white bg-gray-700 rounded-lg shadow-md hover:bg-gray-800 transition duration-300 transform hover:scale-[1.02] text-center'
        >
          Gestor de Usuarios
        </Link>
        
        {/* Enlace a Gestor de Productos */}
        <Link 
          to='/admin/gestor-producto' 
          className='px-6 py-3 text-xl font-semibold text-white bg-yellow-600 rounded-lg shadow-md hover:bg-yellow-700 transition duration-300 transform hover:scale-[1.02] text-center'
        >
          Gestor de Productos
        </Link>
        
      </div>
    </div>
  ) : (
    // Si no tiene permisos, lo redirige a la página principal
    <Navigate to='/' />
  );
};

export default DashboardPage;