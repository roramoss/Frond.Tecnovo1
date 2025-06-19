import { Outlet } from "react-router-dom";
import Header from "../components/header.component";

const AuthLayout = () => {
    return ( 
    <>

    
    <Header/>
    <br /><br /><br /><br /><br />
   
    <Outlet/> 


    
    






 
    
    </>
    
    
    
    );
}
 
export default AuthLayout;