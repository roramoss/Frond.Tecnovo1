import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/store/home.page";
import AuthLayout from "./layouts/auth.layout";
import Login from "./pages/auth/login.page";
import Register from "./pages/auth/register.page";
import AdmiLayout from "./layouts/admi.layout";
import DashboardPage from "./pages/admin/dashborard.page";
import UserPage from "./pages/admin/users.page";
import StorePage from "./pages/store/store.page";
import AboutPage from "./pages/store/about.page";
import ProductPage from "./pages/admin/products.page";
import NotFoundPage from "./pages/store/404";
import StoreLayout from "./layouts/Store.layout";
import { AuthProvider } from "./providers/auth.providers";

const App = () => {
  return (

    <AuthProvider>

 
      <Routes>
         <Route > 
        <Route index element = { <HomePage/>}/>
        <Route path="Tienda" element ={<StorePage/>}/>
        <Route path="Nosotros" element ={<AboutPage/>}/>
         </Route>
         
         <Route path="/auth" element={<AuthLayout/>}>
         <Route path="Login" element={<Login/>} />
         <Route path="Registro" element={<Register/>} />
         </Route>
         

         <Route>
          <Route path="/admin"  element={ <AdmiLayout/>}>
          <Route index element ={ <DashboardPage/>}/>
          <Route path="gestor-usuarios" element={<UserPage/>} />
          <Route path="gestor-producto" element={<ProductPage/>} />
          </Route>

          <Route path="*" element={<NotFoundPage/>} />
         </Route>



      </Routes>
    
    </AuthProvider>
  );

    
  
};

export default App;
