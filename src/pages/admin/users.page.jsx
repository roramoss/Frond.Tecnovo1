
import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import useAuth from '../../hooks/auth.hook'; 

const UsersPage = () => {
    // 1. --- HOOKS Y DATOS ---
    const {
        auth: { email, permissions },
        isLoading,
    } = useAuth();

    // 2. --- RETORNO CONDICIONAL (Carga) ---
    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
                <h1 className="text-2xl font-semibold">Cargando datos de usuario...</h1>
            </div>
        );
    }
    
    // 3. --- RETORNO CONDICIONAL (Seguridad/Permisos) ---
    // Si no es administrador, redirige a la página principal
    if (!permissions || !permissions.includes('isAdmin')) {
        return <Navigate to='/' replace />;
    }

    // 4. --- RENDERIZADO PRINCIPAL (Solo Administrador) ---
    return (
        <div className='min-h-screen bg-gray-900 text-white p-8 sm:p-12'>
            <div className='pt-12 sm:pt-16 max-w-6xl mx-auto'> 
                
                {/* Título principal */}
                <h1 className="text-5xl font-extrabold text-cyan-400 mb-8 tracking-wider border-b-4 border-cyan-400 pb-2 inline-block">
                    Panel de Gestión de Usuarios
                </h1>

                {/* Subtítulo de bienvenida */}
                <p className="text-xl text-gray-300 mb-10 border-l-4 border-cyan-400 pl-4 py-2 bg-gray-800 rounded-lg">
                    Bienvenido, administrador: <span className='font-bold text-white'>{email}</span>. Este panel permite la gestión de cuentas.
                </p>

                {/* Área de Acciones */}
                <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    
                    {/* Botón 1: Dashboard */}
                    <Link 
                        to='/admin' 
                        className='flex items-center justify-center h-20 bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-lg rounded-xl shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-cyan-500/50'
                    >
                        Dashboard Principal
                    </Link>

                    {/* Botón 2: Gestión de Productos */}
                    <Link 
                        to='/admin/gestor-producto' 
                        className='flex items-center justify-center h-20 bg-gray-700 hover:bg-gray-600 text-white font-semibold text-lg rounded-xl shadow-xl transition-all duration-300 transform hover:scale-105'
                    >
                        Gestionar Productos
                    </Link>

                    {/* Botón 3: Página principal (Tienda) */}
                    <Link 
                        to='/' 
                        className='flex items-center justify-center h-20 border-2 border-gray-600 hover:border-red-400 text-gray-300 hover:text-red-400 font-semibold text-lg rounded-xl transition-all duration-300 transform hover:scale-105'
                    >
                        Ir a la Tienda
                    </Link>
                </div>

                {/* Placeholder para la Tabla de Usuarios */}
                <div className='mt-12 p-8 bg-gray-800 rounded-xl shadow-2xl'>
                    <h2 className='text-3xl font-bold text-white mb-4'>Contenido del Gestor</h2>
                    <p className='text-gray-400'>
                        Aquí se integraría el componente de la **Tabla de Usuarios** real.
                    </p>
                    <div className='mt-6 bg-gray-700 h-64 rounded-lg flex items-center justify-center text-gray-400 text-xl'>
                        [Tabla de Usuarios Dinámica]
                    </div>
                </div>

            </div>
        </div>
    );
};

export default UsersPage;