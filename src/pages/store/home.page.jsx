import React ,{useState, useEffect} from "react";
import { CardGroup, Card } from "react-bootstrap";


const HomePage = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
      'src/assets/promocion1.webp',
      'src/assets/promocion2.webp',
      'src/assets/promocion3.webp'
    ];
  
    const nextImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };
  
    const prevImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };
  
    useEffect(() => {
      const interval = setInterval(() => {
        nextImage();
      }, 5000); // Cambia de imagen cada 5 segundos
  
      return () => clearInterval(interval);
    }, []);



    return (  
    
    <>
    
    <section className="section">
      <div className="content">
        
        

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
    <path d="M2 18.5C3.76504 19.521 5.81428 20 8 20C14.4808 20 19.7617 14.8625 19.9922 8.43797L22 4.5L18.6458 5C17.9407 4.37764 17.0144 4 16 4C13.4276 4 11.5007 6.51734 12.1209 8.98003C8.56784 9.20927 5.34867 7.0213 3.48693 4.10523C2.25147 8.30185 3.39629 13.3561 6.5 16.4705C6.5 17.647 3.5 18.3488 2 18.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
    <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M10.5359 11.0075C9.71585 10.8916 7.84666 11.0834 6.93011 12.7782C6.01355 14.4729 6.9373 16.2368 7.51374 16.9069C8.08298 17.5338 9.89226 18.721 11.8114 17.5619C12.2871 17.2746 12.8797 17.0603 13.552 14.8153L13.4738 5.98145C13.3441 6.95419 14.4186 9.23575 17.478 9.5057" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
    <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M17.5078 6.5L17.4988 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
    <path d="M4.5 9.5H4C3.05719 9.5 2.58579 9.5 2.29289 9.79289C2 10.0858 2 10.5572 2 11.5V20C2 20.9428 2 21.4142 2.29289 21.7071C2.58579 22 3.05719 22 4 22H4.5C5.44281 22 5.91421 22 6.20711 21.7071C6.5 21.4142 6.5 20.9428 6.5 20V11.5C6.5 10.5572 6.5 10.0858 6.20711 9.79289C5.91421 9.5 5.44281 9.5 4.5 9.5Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M6.5 4.25C6.5 5.49264 5.49264 6.5 4.25 6.5C3.00736 6.5 2 5.49264 2 4.25C2 3.00736 3.00736 2 4.25 2C5.49264 2 6.5 3.00736 6.5 4.25Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12.326 9.5H11.5C10.5572 9.5 10.0858 9.5 9.79289 9.79289C9.5 10.0858 9.5 10.5572 9.5 11.5V20C9.5 20.9428 9.5 21.4142 9.79289 21.7071C10.0858 22 10.5572 22 11.5 22H12C12.9428 22 13.4142 22 13.7071 21.7071C14 21.4142 14 20.9428 14 20L14.0001 16.5001C14.0001 14.8433 14.5281 13.5001 16.0879 13.5001C16.8677 13.5001 17.5 14.1717 17.5 15.0001V19.5001C17.5 20.4429 17.5 20.9143 17.7929 21.2072C18.0857 21.5001 18.5572 21.5001 19.5 21.5001H19.9987C20.9413 21.5001 21.4126 21.5001 21.7055 21.2073C21.9984 20.9145 21.9985 20.4432 21.9987 19.5006L22.0001 14.0002C22.0001 11.515 19.6364 9.50024 17.2968 9.50024C15.9649 9.50024 14.7767 10.1531 14.0001 11.174C14 10.5439 14 10.2289 13.8632 9.995C13.7765 9.84686 13.6531 9.72353 13.505 9.63687C13.2711 9.5 12.9561 9.5 12.326 9.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
</svg>



      </div>
    </section>


    <section>

    <div className="carousel">
      <div className="carousel-images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            style={{ display: index === currentIndex ? 'block' : 'none' }}
          />
        ))}
      </div>
      <button className="prev" onClick={prevImage}>❮</button>
      <button className="next" onClick={nextImage}>❯</button>
    </div>

    </section>


<br /><br /><br /><br /><br />

    

    <footer>
    <div class="footer-section">
      <h4>Sobre Nosotros</h4>
      <p>Somos una empresa dedicada a brindar soluciones tecnológicas personalizadas.</p>
    </div>

    <div class="footer-section">
      <h4>Enlaces Rápidos</h4>
      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Servicios</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
    </div>

    <div class="footer-section">
      <h4>Contacto</h4>
      <ul>
        <li>Email: info@ejemplo.com</li>
        <li>Tel: +54 11 1234 5678</li>
        <li>Dirección: Calle Falsa 123</li>
      </ul>
    </div>
  </footer>







    
    
    
    
    
    </>
    
    );
}
 
export default HomePage;