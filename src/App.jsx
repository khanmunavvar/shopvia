import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'; 

// Pages
import Home from './pages/HomePage';
import About from './pages/AboutUsPage';
import Products from './pages/ProductPage';
import Help from './pages/HelpPage';
import Login from './pages/LoginPage';
import Register from './pages/RegisterPage';
import CartPage from './pages/CartPage';
import WishlistPage from './pages/WishlistPage';

// --- Context Import ---

import { CartProvider } from './Context/CartContext'; 
import { AuthProvider } from './Context/AuthContext';
const App = () => {
  return (
    // --- WRAPPER ---
    
    <AuthProvider>
    <CartProvider> 
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/help" element={<Help />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
        </Routes>
        <Footer/>
      </Router>
    </CartProvider>
    </AuthProvider>
  );
}

export default App;