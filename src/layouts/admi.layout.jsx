import { Outlet } from 'react-router-dom';
import Header from '../components/header.component';

const AdminLayout = () => {
  return (
    <main >
      <Header />
      <Outlet />
    </main>
  );
};

export default AdminLayout;