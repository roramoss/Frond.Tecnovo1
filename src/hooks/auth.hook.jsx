 import { useContext } from 'react';
import AuthContext from '../providers/auth.providers';

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;