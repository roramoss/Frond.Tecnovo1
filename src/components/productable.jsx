// src/components/ProductTable.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Necesario para el botón 'Ver Detalles'

const ProductTable = () => {
    // Datos actualizados con stock para hacer la tabla más completa
    const products = [
        { id: 1, marca: 'Samsung', modelo: 'Galaxy S24 Ultra', precio: 1250000, stock: 15, descripcion: 'Última generación con S-Pen y cámara de 200MP.' },
        { id: 2, marca: 'Apple', modelo: 'iPhone 15 Pro', precio: 1100000, stock: 22, descripcion: 'Titanio, Chip A17 Pro y rendimiento excepcional.' },
        { id: 3, marca: 'Xiaomi', modelo: '14 Pro', precio: 750000, stock: 8, descripcion: 'Óptica Leica y carga ultra-rápida de 120W.' },
        { id: 4, marca: 'Motorola', modelo: 'Edge 50 Pro', precio: 550000, stock: 30, descripcion: 'Experiencia premium con diseño curvo y gran batería.' },
        { id: 5, marca: 'Sony', modelo: 'WH-1000XM5 (Audífonos)', precio: 249000, stock: 45, descripcion: 'Cancelación de ruido líder en la industria.' },
        { id: 6, marca: 'Apple', modelo: 'MacBook Air M3 (13")', precio: 1850000, stock: 12, descripcion: 'Potencia M3 en un chasis ultra delgado y ligero.' },
        { id: 7, marca: 'Sony', modelo: 'PlayStation 5 Slim', precio: 780000, stock: 5, descripcion: 'La consola de nueva generación, ahora más delgada.' },
        { id: 8, marca: 'Samsung', modelo: 'Smart TV OLED C4 (65")', precio: 2100000, stock: 3, descripcion: 'Negros perfectos y color vibrante en gran formato.' },
        { id: 9, marca: 'Microsoft', modelo: 'Control Xbox Elite 2', precio: 189000, stock: 70, descripcion: 'Control profesional, personalizable y duradero.' },
        { id: 10, marca: 'Xiaomi', modelo: 'Redmi Note 12 Pro', precio: 280000, stock: 55, descripcion: 'Cámara de alta resolución y carga rápida.' },
    ];

    // Función de formato de moneda (usando un locale genérico para puntos/comas)
    const formatCurrency = (amount) => {
        // Asumiendo que los precios son en una moneda con miles (ej: ARS, CLP, COP)
        return `$${amount.toLocaleString('es-AR')}`;
    };

    return (
        <section className="p-4 sm:p-8 bg-gray-50 min-h-screen">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-10 relative pb-4">
                Catálogo Detallado de Productos ✨
                {/* Línea decorativa */}
                <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-24 h-1 bg-indigo-600 rounded-full"></span>
            </h2>

            {/* Contenedor de la tabla con scroll horizontal en móviles */}
            <div className="overflow-x-auto shadow-2xl rounded-xl">
                <table className="w-full text-sm text-left text-gray-500 min-w-[700px]">
                    
                    {/* Encabezado */}
                    <thead className="text-xs uppercase text-white bg-gray-900 sticky top-0">
                        <tr>
                            <th scope="col" className="px-4 py-3">Marca</th>
                            <th scope="col" className="px-4 py-3">Modelo</th>
                            <th scope="col" className="px-4 py-3">Precio</th>
                            <th scope="col" className="px-4 py-3 text-center">Stock</th>
                            <th scope="col" className="px-4 py-3 hidden md:table-cell">Descripción</th>
                            <th scope="col" className="px-4 py-3 text-center">Acciones</th>
                        </tr>
                    </thead>
                    
                    {/* Cuerpo de la Tabla */}
                    <tbody>
                        {products.map((product) => (
                            <tr
                                key={product.id}
                                className="border-b bg-white hover:bg-indigo-50 transition duration-150 ease-in-out"
                            >
                                {/* Marca */}
                                <td className="px-4 py-4 font-semibold text-gray-900">
                                    {product.marca}
                                </td>
                                
                                {/* Modelo */}
                                <td className="px-4 py-4 text-gray-700 font-medium">
                                    {product.modelo}
                                </td>
                                
                                {/* Precio */}
                                <td className="px-4 py-4 text-green-600 font-bold">
                                    {formatCurrency(product.precio)}
                                </td>
                                
                                {/* Stock (Indicador de color) */}
                                <td className="px-4 py-4 text-center">
                                    <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full 
                                        ${product.stock > 20 ? 'bg-green-100 text-green-800' : 
                                          product.stock > 5 ? 'bg-yellow-100 text-yellow-800' : 
                                          'bg-red-100 text-red-800'}`}
                                    >
                                        {product.stock}
                                    </span>
                                </td>
                                
                                {/* Descripción (Oculta en móviles) */}
                                <td className="px-4 py-4 hidden md:table-cell text-gray-600">
                                    {product.descripcion.length > 50 ? product.descripcion.substring(0, 50) + '...' : product.descripcion}
                                </td>
                                
                                {/* Acciones */}
                                <td className="px-4 py-4 text-center">
                                    <Link 
                                        to={`/tienda/producto/${product.id}`}
                                        className="text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-3 py-1.5 transition duration-200"
                                    >
                                        Ver Detalles
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Sección extra: Resumen de Stock (Para completar más la página) */}
            <div className="mt-10 p-6 bg-white rounded-xl shadow-lg border-t-4 border-indigo-600 max-w-lg mx-auto">
                <h3 className="text-xl font-bold text-gray-800 mb-4">📈 Resumen de Inventario</h3>
                <p className="text-gray-700">
                    Tenemos un total de <span className="font-extrabold text-indigo-600">
                        {products.reduce((sum, p) => sum + p.stock, 0)}
                    </span> unidades en stock de nuestros productos destacados. 
                </p>
                <p className="text-sm mt-2 text-gray-500">
                    ¡Aprovecha nuestras ofertas antes de que se agoten!
                </p>
            </div>
        </section>
    );
};

export default ProductTable;