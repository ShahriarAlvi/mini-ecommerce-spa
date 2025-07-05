import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.tsx';
import ProductDetail from './pages/ProductDetail.tsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:id" element={<ProductDetail />} />
    </Routes>
  );
}

export default App;
