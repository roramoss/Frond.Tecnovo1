import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
// Componentes de Layout
import StoreLayout from "../../layouts/Store.layout";
import Promociones from "../promociones";
import Nosotros from "../../components/nosotros";
import Footer from "../../components/footer";
// Hook de Autenticación
import useAuth from "../../hooks/auth.hook";


const HomePage = () => {
    // 1. --- HOOKS DE ESTADO Y AUTH ---
    const {
        auth: { email, _id, permissions },
        isLoading,
    } = useAuth(); 

    const [currentIndex, setCurrentIndex] = useState(0);

    // 2. --- DATOS ESTÁTICOS (Usando rutas de string directo) ---
    const images = [
        'src/assets/promocion1.webp', 
        'src/assets/promocion2.webp',
        'src/assets/promocion3.webp',
        'src/assets/promomomo.webp'
    ];
    
    // Datos simulados para productos destacados
    const featuredProducts = [
        
        { id: 1, name: 'Smartphone Pro Max', price: '999.00', image: 'src/assets/165379-300-300.png' },
        { id: 2, name: 'Smartwatch Serie X', price: '299.00', image: 'src/assets/165388-300-300.png' },
        { id: 3, name: 'Ultra', price: '149.00', image: 'src/assets/168081-300-300.png' },
    ];
    
    // 3. --- FUNCIONES ---
    
    // Utilizamos useCallback para que el useEffect no se ejecute en cada render
    const nextImage = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1)); 
    }, [images.length]);

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    // 4. --- EFECTOS ---
    useEffect(() => {
        const interval = setInterval(() => {
            nextImage();
        }, 5000);

        return () => clearInterval(interval);
    }, [nextImage]); 

    
    // 5. --- RETORNO CONDICIONAL DE CARGA ---
    if (isLoading) return <div className="min-h-screen flex items-center justify-center text-2xl">Cargando...</div>;

    
    // 6. --- RENDERIZADO PRINCIPAL (USO CORRECTO DE STORELAYOUT) ---
    return ( 
        // 🟢 CORRECCIÓN: Usar StoreLayout como envoltorio
        <StoreLayout> 

            {/* Bloque de Bienvenida Condicional */}
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

            {/* 🌎 Sección del Carrusel */}
            <section className="relative w-full max-w-7xl mx-auto my-8 overflow-hidden rounded-lg shadow-2xl">
                <div className="relative">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image} // Usando el string de ruta directa
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
            
            {/* 💡 Sección para resaltar una Oferta Única */}
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

            {/* 🔥 PRODUCTOS DESTACADOS */}
            <section className="max-w-7xl mx-auto py-16 px-4">
                <h2 className="text-4xl font-bold text-gray-800 text-center mb-12 border-b-4 border-red-500 pb-3 inline-block mx-auto">
                    🚀 Productos Destacados
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featuredProducts.map(product => (
                        <div 
                            key={product.id} 
                            className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200 transform hover:scale-[1.03] hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="h-64 bg-gray-200 flex items-center justify-center p-4">
                                <img 
                                    src={product.image} 
                                    alt={product.name} 
                                    className="w-full h-full object-contain" 
                                />
                            </div>

                            <div className="p-6 text-center">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
                                <p className="text-3xl font-extrabold text-red-600 mb-4">${product.price}</p>
                                
                                <Link
                                    to={`/tienda/producto/${product.id}`}
                                    className="block w-full py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 shadow-md transition duration-200"
                                >
                                    ¡Comprar Ahora!
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Promociones />
            <br />
            <Nosotros />
            <Footer />
        </StoreLayout>
    );
}

export default HomePage;