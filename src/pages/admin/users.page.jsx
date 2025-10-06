import { Navigate, Link } from 'react-router-dom';
import useAuth from '../../hooks/auth.hook';

const UsersPage = () => {
    const {
        auth: { email, permissions },
        isLoading,
    } = useAuth();

    // 1. Manejo de Carga (Más elegante)
    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
                <h1 className="text-2xl font-semibold">Cargando...</h1>
            </div>
        );
    }

    // 2. Renderizado Condicional
    return permissions.includes('isAdmin') ? (
        // 🟢 Contenedor principal: Fondo Oscuro (negro/gris oscuro) y texto claro
        <div className='min-h-screen bg-gray-900 text-white p-8 sm:p-12'>
            {/* Espaciado para compensar el navbar fijo */}
            <div className='pt-20 sm:pt-24 max-w-4xl mx-auto'> 
                
                {/* Título principal: Destacado, color verde menta o cian */}
                <h1 className="text-5xl font-extrabold text-cyan-400 mb-8 tracking-wider">
                    Panel de Usuarios
                </h1>

                {/* Contenido principal: Subtítulo con el email destacado */}
                <p className="text-xl text-gray-300 mb-10 border-l-4 border-cyan-400 pl-4 py-1 bg-gray-800 rounded-md">
                    Bienvenido, administrador: <span className='font-bold text-white'>{email}</span>.
                </p>

                {/* 3. Área de Acciones (Enlaces y Botones) */}
                <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    
                    {/* Botón 1: Dashboard (Énfasis principal) */}
                    <Link 
                        to='/admin' 
                        className='flex items-center justify-center h-20 bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-lg rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-cyan-500/50'
                    >
                        Dashboard Principal
                    </Link>

                    {/* Botón 2: Productos (Acción secundaria) */}
                    <Link 
                        to='/admin/gestor-producto' 
                        className='flex items-center justify-center h-20 bg-gray-700 hover:bg-gray-600 text-white font-semibold text-lg rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105'
                    >
                        Gestionar Productos
                    </Link>

                    {/* Botón 3: Página principal (Volver) */}
                    <Link 
                        to='/' 
                        className='flex items-center justify-center h-20 border-2 border-gray-600 hover:border-cyan-400 text-gray-300 hover:text-cyan-400 font-semibold text-lg rounded-xl transition-all duration-300 transform hover:scale-105'
                    >
                        Ir a la Tienda
                    </Link>
                </div>
            </div>
        </div>
    ) : (
        // 🔴 No es Administrador: Redirección inmediata
        <Navigate to='/' />
    );
};

export default UsersPage;