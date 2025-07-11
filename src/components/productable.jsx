// src/components/ProductTable.jsx
import React from 'react';

const ProductTable = () => {
  const products = [
    { id: 1, marca: 'Motorola', modelo: 'Z7 Phantom Pro 256GB', precio: 600, descripcion: 'Última generación con excelente rendimiento y almacenamiento.' },
    { id: 2, marca: 'Motorola', modelo: 'Fusion Concam 256GB', precio: 170, descripcion: 'Ideal para fotografía con su cámara avanzada.' },
    { id: 3, marca: 'Motorola', modelo: 'Ultra Pro 228GB', precio: 156, descripcion: 'Diseño elegante y gran capacidad.' },
    { id: 4, marca: 'Motorola', modelo: 'Z Fool 228GB', precio: 100, descripcion: 'Compacto y funcional para el día a día.' },
    { id: 5, marca: 'Motorola', modelo: 'Ultra 228GB', precio: 140, descripcion: 'Balance perfecto entre precio y rendimiento.' },
    { id: 6, marca: 'Samsung', modelo: 'Galaxy A54 128GB', precio: 350, descripcion: 'Pantalla vibrante y batería de larga duración.' },
    { id: 7, marca: 'Xiaomi', modelo: 'Redmi Note 12 Pro 256GB', precio: 280, descripcion: 'Cámara de alta resolución y carga rápida.' },
    { id: 8, marca: 'Motorola', modelo: 'Edge 40 Neo 256GB', precio: 450, descripcion: 'Experiencia premium con diseño curvo.' },
    { id: 9, marca: 'Samsung', modelo: 'Galaxy S23 FE 256GB', precio: 750, descripcion: 'Potente rendimiento para gaming y multitarea.' },
    { id: 10, marca: 'Apple', modelo: 'iPhone SE (2022) 128GB', precio: 429, descripcion: 'Chip A15 Bionic en un diseño clásico.' },
  ];

  const tableStyle = {
    width: '90%',
    margin: '40px auto',
    borderCollapse: 'collapse',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    overflow: 'hidden',
  };

  const thTdStyle = {
    padding: '12px 15px',
    textAlign: 'left',
    borderBottom: '1px solid #ddd',
    color: 'black', // Color del texto de las celdas
  };

  const thStyle = {
    ...thTdStyle,
    backgroundColor: ' #1a202c', // Fondo de los encabezados (puedes cambiarlo si quieres)
    color: 'white', // Color del texto de los encabezados
    textTransform: 'uppercase',
    fontSize: '0.9em',
  };

  const trEvenStyle = {
    backgroundColor: '#f2f2f2',
  };

  const trHoverStyle = {
    backgroundColor: '#e9e9e9',
  };

  return (
    <section style={{ padding: '20px', backgroundColor: '#f8f8f8' }}>
      <h2 style={{ textAlign: 'center', fontSize: '2.5em', color: 'black', marginBottom: '30px', position: 'relative', paddingBottom: '10px' }}>
        Tabla de Características de Productos
        <span style={{ content: '""', position: 'absolute', left: '50%', transform: 'translateX(-50%)', bottom: '0', width: '80px', height: '4px', backgroundColor: '#007bff', borderRadius: '2px' }}></span>
      </h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Marca</th>
            <th style={thStyle}>Modelo</th>
            <th style={thStyle}>Precio</th>
            <th style={thStyle}>Descripción</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr
              key={product.id}
              style={index % 2 === 0 ? trEvenStyle : { backgroundColor: 'white' }} // Asegura que las filas impares también tengan un fondo claro
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = trHoverStyle.backgroundColor)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = index % 2 === 0 ? trEvenStyle.backgroundColor : 'white')}
            >
              <td style={thTdStyle}>{product.marca}</td>
              <td style={thTdStyle}>{product.modelo}</td>
              <td style={thTdStyle}>${product.precio.toLocaleString('es-AR')}</td>
              <td style={thTdStyle}>{product.descripcion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ProductTable;