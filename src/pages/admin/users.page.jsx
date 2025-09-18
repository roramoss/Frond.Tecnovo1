import { Navigate, Link } from 'react-router-dom';
import useAuth from '../../hooks/auth.hook';


const UsersPage = () => {
  const {
    auth: { email, permissions },
    isLoading,
  } = useAuth();

  if (isLoading) return <h1 className="text-xl text-center py-8">Cargando...</h1>; // Estilo para el "Cargando..."

  return permissions.includes('isAdmin') ? (
    // Contenedor principal de la página, con fondo blanco/claro y texto negro
    
    <div className='min-h-screen bg-gray-50 p-8 text-black'> <br /><br /><br /><br /><br /> <br /><br /><br />
      {/* Título principal de la página, en azul */}
      <h1 className="text-4xl font-extrabold text-blue-700 mb-6">Administración de Usuarios</h1>

      {/* Contenido principal, con el email en negrita y color azul para destacar */}
      <p className="text-lg mb-4">
        Bienvenido al panel de administración de usuarios, <span className='font-bold text-blue-500'>{email}</span>.
      </p>

      {/* Enlaces de navegación, con estilo de botón y color azul */}
      <div className='mt-8 space-y-4'>
        <Link to='/' className='block w-full max-w-xs mx-auto py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md text-center transition-colors duration-200'>
          Ir a la página principal
        </Link>
        <Link to='/admin' className='block w-full max-w-xs mx-auto py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md text-center transition-colors duration-200'>
          Ir al Dashboard de Administración
        </Link>
        <Link to='/admin/gestor-productos' className='block w-full max-w-xs mx-auto py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md text-center transition-colors duration-200'>
          Gestionar Productos
        </Link>
      </div>
    </div>
  ) : (
    <Navigate to='/' />
  );
};

export default UsersPage;