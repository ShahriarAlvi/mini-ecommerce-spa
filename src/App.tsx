import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.tsx';
import ProductDetail from './pages/ProductDetail.tsx';
import AppLayout from './Layouts/AppLayout.tsx';

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Route>
    </Routes>
  );
}
