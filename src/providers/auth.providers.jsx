import { useState, createContext, useEffect } from 'react';
import axiosClient from '../services/axios.service.jsx';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => { // Cambiado a función normal para claridad
      const token = localStorage.getItem('token');

      if (!token) {
        // CORRECCIÓN CLAVE: Terminar la carga si no hay token.
        setIsLoading(false); 
        return;
      }

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const { data } = await axiosClient.get('/users/me', config);
        setAuth(data);
      } catch (error) {
        // En caso de error (token inválido/expirado)
        setAuth({});
        localStorage.removeItem('token');
      } 
      // Si todo sale bien (try) o mal (catch), la carga termina aquí.
      setIsLoading(false); // Esta línea ahora manejará el éxito/fallo de la API
    };
    
    checkAuth(); // Llamada a la función autodefinida
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth, isLoading, setIsLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
export default AuthContext;