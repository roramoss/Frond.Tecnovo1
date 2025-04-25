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
    {/* <main className="bg-black-100  min-h-screen  flex items-center justify-center">  */}
    {/* <main className="min-h-screen: 100vh; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #eaeaea, #c9c9c9);"> */}
    <main className="min-h-screen: 100vh; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg,rgb(0, 0, 0),rgb(20, 18, 18));">
    <Outlet/> 


    </main> 
    






 
    
    </>
    
    
    
    );
}
 
export default AuthLayout;