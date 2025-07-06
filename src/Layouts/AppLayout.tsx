import Navbar from '../components/Navbar.tsx';
import { Outlet } from 'react-router-dom';

export default function AppLayout() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-8 min-h-[calc(100vh-80px)]">
        <Outlet />
      </main>
    </>
  );
}
