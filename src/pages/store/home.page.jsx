import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Importar Link para la navegación
// Componentes de Layout
import StoreLayout from "../../layouts/Store.layout";
import Promociones from "../promociones";
import Nosotros from "../../components/nosotros";
import Footer from "../../components/footer";
// Hook de Autenticación
import useAuth from "../../hooks/auth.hook";

const HomePage = () => {
    // 1. --- HOOKS (TODOS DEBEN IR PRIMERO Y SIN CONDICIONES) ---
    const {
        auth: { email, _id, permissions },
        isLoading,
    } = useAuth(); // Hook 1: Lógica de Autenticación

    const [currentIndex, setCurrentIndex] = useState(0); // Hook 2: Estado del Carrusel

    // 2. --- DATOS Y FUNCIONES (Antes del useEffect) ---
    const images = [
        'src/assets/promocion1.webp',
        'src/assets/promocion2.webp',
        'src/assets/promocion3.webp',
        'src/assets/promomomo.webp'
    ];
    
    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    // 3. --- EFECTOS (Automate the carousel) ---
    useEffect(() => {
        const interval = setInterval(() => {
            nextImage();
        }, 5000); // Cambia de imagen cada 5 segundos

        return () => clearInterval(interval);
    }, [nextImage]); // Dependencia para la función

    // 4. --- RETORNO CONDICIONAL (Early Return) ---
    if (isLoading) return <div className="min-h-screen flex items-center justify-center text-2xl">Cargando...</div>;

    // 5. --- RENDERIZADO PRINCIPAL ---
    return ( 
        <>
            <StoreLayout />

            {/* Bloque de Bienvenida Condicional (Moderno) */}
            {_id ? (
                // 🟢 Usuario Logueado
                <div className="flex flex-col items-center justify-center space-y-4 p-8 bg-blue-50 border-b-4 border-blue-500 shadow-md">
                    <div className="text-3xl font-light text-gray-800">
                        ¡Hola de nuevo! <span className="font-bold text-blue-600">{email}</span>
                    </div>

                    <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-6">
                        
                        <Link 
                            to="/tienda" 
                            className="px-6 py-3 text-xl font-semibold text-white bg-green-500 rounded-lg shadow-lg hover:bg-green-600 transition duration-300 transform hover:scale-105 text-center"
                        >
                            Ver Productos
                        </Link>
                        
                        {/* Enlace a Admin (Condicional) */}
                        {permissions && permissions.includes("isAdmin") && (
                            <Link 
                                to="/admin" 
                                className="px-6 py-3 text-xl font-semibold text-white bg-red-500 rounded-lg shadow-lg hover:bg-red-600 transition duration-300 transform hover:scale-105 text-center"
                            >
                                Panel de Administración
                            </Link>
                        )}
                    </div>
                </div>
            ) : (
                // 🔴 Usuario NO Logueado
                <div className="p-8 text-center bg-gray-100 border-b border-gray-300 shadow-inner">
                    <p className="text-2xl font-light text-gray-700 mb-2">¡Bienvenido! Descubre las mejores ofertas en tecnología.</p>
                    <Link 
                        to="/auth/Login" 
                        className="inline-block mt-3 text-lg font-semibold text-blue-600 hover:text-blue-800 transition duration-300"
                    >
                        Inicia sesión o regístrate aquí
                    </Link>
                </div>
            )}

            {/* 🌎 Sección del Carrusel (Estilos mejorados) */}
            <section className="relative w-full max-w-7xl mx-auto my-8 overflow-hidden rounded-lg shadow-2xl">
                <div className="relative">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Promoción ${index + 1}`}
                            className={`w-full h-96 object-cover transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'}`}
                            style={{ display: index === currentIndex ? 'block' : 'none' }}
                        />
                    ))}
                </div>
                {/* Botones de Navegación del Carrusel */}
                <button
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-3 rounded-full hover:bg-opacity-70 transition-colors duration-300 z-10"
                    onClick={prevImage}
                >
                    ❮
                </button>
                <button
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-3 rounded-full hover:bg-opacity-70 transition-colors duration-300 z-10"
                    onClick={nextImage}
                >
                    ❯
                </button>
            </section>
            {/* Fin del Carrusel */}
            
            {/* 💡 Sección para resaltar una Oferta Única (Elemento con el mismo estilo) */}
            <section className="max-w-7xl mx-auto py-12 px-4">
                <div className="bg-gradient-to-r from-purple-700 to-indigo-700 p-10 rounded-xl shadow-2xl text-white text-center transform hover:scale-[1.01] transition-transform duration-500">
                    <h2 className="text-4xl font-extrabold mb-3">OFERTA EXCLUSIVA DEL MES</h2>
                    <p className="text-xl mb-6">¡Llévate un 20% de descuento en todos los accesorios premium!</p>
                    <Link
                        to="/tienda/accesorios"
                        className="inline-block bg-yellow-400 text-purple-900 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-300 transition-colors duration-300 text-lg uppercase tracking-wider"
                    >
                        ¡Ver Oferta Ahora!
                    </Link>
                </div>
            </section>
            {/* Fin de Oferta Única */}


            <Promociones />
            <br />
            <Nosotros />
            <Footer />
        </>
    );
}
 
export default HomePage;