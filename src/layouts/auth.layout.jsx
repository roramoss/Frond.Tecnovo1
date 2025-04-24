import { Outlet } from "react-router-dom";

const AuthLayout = () => {
    return ( 
    <>
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
    <main className="bg-red-100  min-h-screen  flex items-center justify-center"> 


    <Outlet/> 


    </main> 
    






 
    
    </>
    
    
    
    );
}
 
export default AuthLayout;