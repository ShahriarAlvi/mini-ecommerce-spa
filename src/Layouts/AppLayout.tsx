import Navbar from '../components/Navbar.tsx';
import { Outlet } from 'react-router-dom';

export default function AppLayout() {
  return (
    <>
      <Navbar />
      <main className="mt-4">
        <Outlet />
      </main>
    </>
  );
}
