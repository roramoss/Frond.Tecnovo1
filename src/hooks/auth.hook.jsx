 import { useContext } from 'react';
import AuthContext from '../providers/auth.providers.jsx';

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;