
import React from 'react';

const Promociones = () => {
  const promociones = [
    {
      id: 1,
      titulo: 'Descuento de Verano',
      descripcion: '¡Aprovecha un 20% de descuento en todos nuestros productos de verano!',
      imagen: 'src/assets/SM-S721BZKMARO.png.png',
      enlace: '/verano',
    },
    {
      id: 2,
      titulo: 'Oferta Especial',
      descripcion: 'Compra 2 productos y obtén un 50% de descuento en el tercero.',
      imagen: 'src/assets/Samsung-123410665-ar-galaxy-book3-156-inch-int-np750xfga-np750xfg-kb1ar-536358864--Download-Sou-zoom.webp',
      enlace: '/oferta',
    },
    {
      id: 3,
      titulo: 'Nuevos Productos',
      descripcion: 'Descubre nuestra nueva colección con precios especiales por lanzamiento.',
      imagen: 'src/assets/imagen3.png',
      enlace: '/nuevos',
    },
    {
      id: 4,
      titulo: 'Liquidación',
      descripcion: '¡Últimas unidades con descuentos de hasta el 70%!',
      imagen: 'src/assets/Samsung-264360835-ar-galaxy-zflip6-f741-sm-f741blbkaro-544246580--Download-Source-.png',
      enlace: '/liquidacion',

       
    }
  ];

  const containerStyles = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr', // Dos columnas en pantallas grandes
    gap: '20px', // Espacio entre las tarjetas
    maxWidth: '1200px', // Ancho máximo
    margin: '0 auto',
    padding: '20px',
    '@media (max-width: 768px)': { // Para pantallas más pequeñas (tablets y móviles)
      gridTemplateColumns: '1fr', // Una sola columna
    },
  };

  const cardStyles = {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(124, 14, 14, 0.1)',
    overflow: 'hidden',
    transition: 'transform 0.3s ease',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  };

  const imageStyles = {
    width: '110%',
    height: 'auto', // Altura automática para mantener la proporción
    maxHeight: '400px',  // Altura máxima para evitar que se disparen
    objectFit: 'contain', // o 'cover' según prefieras
    display: 'block', // Evita espacio extra debajo de la imagen
  };

  const bodyStyles = {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flexGrow: 1,
  };

  const linkStyles = {
    color: '#007bfff',
    textDecoration: 'none',
    fontWeight: 'bold',
    marginTop: 'auto',
  };

  return (
    
    <section className="py-5 bg-light">
      <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
          Nuestras Promociones Especiales
        </h2> 
      <div className="container" style={containerStyles}>
        
        {promociones.map((promo) => (
          <div key={promo.id} className="item" style={{}}>
            <div className="card" style={cardStyles}>
              <img
                src={promo.imagen}
                alt={promo.titulo}
                style={imageStyles}
                className="card-img-top"
              />
              <div className="card-body" style={bodyStyles}>
                <h3 className="card-title text-xl font-semibold text-gray-900 mb-2">{promo.titulo}</h3>
                <p className="card-text text-gray-2800 mb-2">{promo.descripcion}</p>
                <a href={promo.enlace} className="btn btn-outline-primary" style={linkStyles}>
                  Ver Detalle
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Promociones;

