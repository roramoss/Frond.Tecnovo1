import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/auth.hook'; 
// Asumiendo que este componente ya está protegido y no necesita Navigate

const GestorDeUsuariosPage = () => {
  // Asumiendo que la lógica de carga y permisos ya se manejó en el layout superior
  // Si deseas mantener el check aquí, usa la lógica de DashboardPage:
  /*
  const { isLoading, auth: { permissions } } = useAuth();
  if (isLoading) return <h1>Cargando...</h1>;
  if (!permissions.includes('isAdmin')) return <Navigate to='/' />;
  */

  return (
    <div className='min-h-screen pt-12 flex flex-col items-center bg-gray-50 p-8'>
      
      {/* Título Principal */}
      <div className='text-4xl font-semibold text-gray-800 text-center mb-10'>
        Gestión de Usuarios
      </div>

      {/* Contenedor de Acciones (Botones) */}
      <div className='flex flex-col space-y-4 w-full max-w-lg'>
        
        {/* Botón para crear nuevo usuario */}
        <button 
          className='px-6 py-3 text-xl font-semibold text-white bg-green-600 rounded-lg shadow-lg hover:bg-green-700 transition duration-300 transform hover:scale-[1.02]'
          onClick={() => alert("Abrir modal o formulario para crear usuario")}
        >
          ➕ Crear Nuevo Usuario
        </button>
        
        {/* Botón para ver lista de usuarios activos */}
        <Link 
          to="/admin/usuarios/activos" // Ruta de ejemplo
          className='px-6 py-3 text-xl font-semibold text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-[1.02] text-center'
        >
          👥 Ver Usuarios Activos
        </Link>
        
        {/* Botón para regresar al Dashboard */}
        <Link 
          to="/admin" 
          className='px-6 py-3 text-xl font-semibold text-white bg-gray-500 rounded-lg shadow-md hover:bg-gray-600 transition duration-300 transform hover:scale-[1.02] text-center mt-6'
        >
          ⬅️ Volver al Dashboard
        </Link>
        
      </div>

      {/* Aquí iría la tabla o el contenido principal del gestor */}
      <div className='mt-10 w-full max-w-4xl bg-white p-6 rounded-lg shadow-xl'>
          <p className='text-lg text-gray-700'>
             [Contenido: Tabla de usuarios, filtros, o componente de edición...]
          </p>
      </div>

    </div>
  );
};

export default GestorDeUsuariosPage;