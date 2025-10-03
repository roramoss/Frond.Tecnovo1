import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import StoreLayout from "../../layouts/Store.layout";
import Promociones from "../promociones";
import Nosotros from "../../components/nosotros";
import Footer from "../../components/footer";
import useAuth from "../../hooks/auth.hook";

const HomePage = () => {
  // --- 1. Lógica de Autenticación y Carga ---
  const {
    auth: { email, _id, permissions },
    isLoading,
  } = useAuth();

  // Muestra estado de carga
  if (isLoading) return <h1>Cargando...</h1>;

  // --- 2. Lógica del Carrusel ---
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "src/assets/promocion1.webp",
    "src/assets/promocion2.webp",
    "src/assets/promocion3.webp",
    "src/assets/promomomo.webp",
  ];

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000); // Cambia de imagen cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  // --- 3. Renderizado Principal ---
  return (
    <>
      <StoreLayout />

      {/* Bloque de Información de Usuario y Navegación (CONDICIONAL con CSS mejorado) */}
      {_id ? (
        // 🟢 Usuario Logueado
        <div className="flex flex-col items-center justify-center space-y-4 p-6 bg-gray-50 border-b border-gray-200">
          
          {/* Mensaje de Bienvenida */}
          <div className="text-3xl font-light text-gray-800">
            Bienvenido, <span className="font-bold text-blue-600">{email}</span>
          </div>

          {/* Contenedor de Enlaces */}
          <div className="flex space-x-6">
            
            {/* Enlace a Tienda */}
            <Link 
              to="/tienda" 
              className="px-6 py-2 text-xl font-semibold text-white bg-green-500 rounded-lg shadow-md hover:bg-green-600 transition duration-300 transform hover:scale-105"
            >
              Ir a la Tienda
            </Link>
            
            {/* Enlace a Admin (Condicional) */}
            {permissions && permissions.includes("isAdmin") && (
              <Link 
                to="/admin" 
                className="px-6 py-2 text-xl font-semibold text-white bg-red-500 rounded-lg shadow-md hover:bg-red-600 transition duration-300 transform hover:scale-105"
              >
                Dashboard Admin
              </Link>
            )}
          </div>
        </div>
      ) : (
        // 🔴 Usuario NO Logueado
        <div className="text-2xl p-6 text-center bg-yellow-50 text-gray-800 border-b border-yellow-200">
          ¡Bienvenido/a! Explora nuestras promociones.
          <Link 
              to="/auth/Login" 
              className="block mt-2 text-lg font-semibold text-blue-600 hover:underline"
          >
              Inicia sesión aquí
          </Link>
        </div>
      )}

      {/* 🌎 Sección del Carrusel (CONTENIDO PÚBLICO: SIEMPRE VISIBLE) */}
      <section > 
        <div > {/* Clases de centrado y posicionamiento */}
          <div> 
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                // Muestra solo la imagen actual
                style={{ display: index === currentIndex ? "block" : "none" }}
                className="w-full h-auto object-cover" 
              />
            ))}
          </div>
          {/* Botones de Navegación del Carrusel */}
          <button
            className="prev absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 z-10" // Clases para posicionamiento y visibilidad
            onClick={prevImage}
          >
            ❮
          </button>
          <button
            className="next absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 z-10" // Clases para posicionamiento y visibilidad
            onClick={nextImage}
          >
            ❯
          </button>
        </div>
      </section>

      {/* 📦 Resto del Contenido PÚBLICO (SIEMPRE VISIBLE) */}
      <Promociones />
      <br />
      <Nosotros />
      <Footer />
    </>
  );
};

export default HomePage;