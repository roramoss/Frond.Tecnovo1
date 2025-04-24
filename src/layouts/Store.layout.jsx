import { Outlet } from "react-router-dom";
import "../layouts/tienda.css"


const StoreLayout = () => {
    return (
        <>
           <header>

                

<div className="navbar">

     <a href="http:/">

     <img
    
    src="src/assets/logo_transparent.png"
    width="90"
    height="90"
    className="d-inline-block align-top"
    alt="React Bootstrap logo" 
    />

     </a>


    


<ul>
<li><a href="/auth/Login">Iniciar Sesion</a></li>
<li><a href="/auth/Registro">Registro</a></li>

</ul>
</div>
   
</header>
        
        <Outlet/>
        </>
         );
}
 
export default StoreLayout;