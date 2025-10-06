import { useState, createContext, useEffect } from 'react';
import axiosClient from '../services/axios.service.jsx';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [isLoading, setIsLoading] = useState(true); // Inicialmente en TRUE

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem('token');

      if (!token) {
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
        // Si tiene éxito, el finally lo establecerá en false
      } catch (error) {
        setAuth({});
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth, isLoading, setIsLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
export default AuthContext;