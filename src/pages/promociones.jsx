import React from 'react';
import { Link } from 'react-router-dom'; // Asegúrate de importar Link si vas a usarlo


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

  return (
    <section className="promociones-section"> {/* Clase principal para la sección */}
      <h2 className="promociones-title">
        Nuestras Promociones Especiales
      </h2>
      <div className="promociones-container"> {/* Contenedor para la cuadrícula de promociones */}
        {promociones.map((promo) => (
          <div key={promo.id} className="promo-item"> {/* Contenedor individual de cada promoción */}
            <div className="promo-card"> {/* Tarjeta de la promoción */}
              <img
                src={promo.imagen}
                alt={promo.titulo}
                className="promo-image" // Clase para la imagen dentro de la tarjeta
              />
              <div className="promo-card-body"> {/* Cuerpo de la tarjeta con título y descripción */}
                <h3 className="promo-card-title">{promo.titulo}</h3>
                <p className="promo-card-description">{promo.descripcion}</p>
                {/* Enlace para ver la promoción específica */}
                <Link to={promo.enlace} className="promo-link"> {/* Clase para el botón/enlace */}
                  Ver Promoción
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Promociones;

