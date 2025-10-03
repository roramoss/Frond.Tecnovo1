import React from 'react';
import { Link } from 'react-router-dom'; // Necesitas tener react-router-dom instalado
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaWhatsapp } from 'react-icons/fa'; // Necesitarás instalar react-icons
import '../components/footer.css'; // Importa el archivo CSS

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const email = e.target.elements.newsletterEmail.value;
    alert(`¡Gracias por suscribirte con ${email} a las novedades de TecNovo!`);
    // Lógica real para enviar el email
    e.target.reset();
  };

  return (

    <>
    
    
    
    
    
    
   
    <footer className="main-footer">
      <div className="footer-container">
        {/* Tu sección "Sobre Nosotros" - Mejorada */}
        <div className="footer-section about-us-footer">
          <h4>Sobre Nosotros</h4>
          {/* Aquí puedes añadir tu logo si quieres que aparezca en esta sección */}
          
          <p>Somos un emprendimiento apasionado por la tecnología, dedicado a ofrecerte los últimos y mejores productos electrónicos. En TecNovo, tu satisfacción es nuestra prioridad.</p>
        </div>

        {/* Tu sección "Enlaces Rápidos" - Ampliada con Links de React Router */}
        <div className="footer-section quick-links">
          <h4>Enlaces Rápidos</h4>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/promociones">Promociones</Link></li> {/* Asumiendo que tienes una página de promociones */}
            <li><Link to="/nosotros">Sobre Nosotros</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </div>

        {/* Tu sección "Contacto" - Hecha interactiva con enlaces mailto y tel */}
        <div className="footer-section contact-info">
          <h4>Contacto</h4>
          <ul>
            <li>Email: <a href="mailto:Tecnovo@gmail.com">Tecnovo@gmail.com</a></li>
            <li>Tel: <a href="tel:+541112345678">+54 11 1234 5678</a></li>
            <li>Dirección: General Paz 563, <br/>Aguilares, Tucumán, Argentina</li> {/* Puedes añadir más detalle geográfico */}
          </ul>
          <p className="contact-hours">Horarios: Lun-Vie 9:00 - 18:00 hs.</p>
        </div>

        {/* Nueva sección: Newsletter y Redes Sociales */}
        <div className="footer-section newsletter-social">
          <h4>¡Mantente al día con TecNovo!</h4>
          <p>Suscríbete a nuestro newsletter para recibir las últimas ofertas y novedades directamente en tu email.</p>
          <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
            <input
              type="email"
              name="newsletterEmail"
              placeholder="Tu email aquí"
              required
            />
            <button type="submit">Suscribirse</button>
          </form>

          <h4 className="social-heading">Síguenos en Redes</h4>
          <div className="social-icons">
            <a href="https://facebook.com/tucanaalde" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com/tucanaalde" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://twitter.com/tucanaalde" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://youtube.com/tecnovo" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
            <a href="https://wa.me/5493815555555" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

       
      
    </footer>
   
 <p className="copyright-text">
          © {currentYear} TecNovo. Todos los derechos reservados.
        </p>

    </>
  );
};

export default Footer;