import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  
  // --- 1. NEW: SEARCH STATE ---
  // This variable stores what the user types in the Navbar.
  const [searchQuery, setSearchQuery] = useState("");

  // --- CART LOGIC ---
  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
    alert(`${product.name || product.title} added to cart!`); 
  };

  const removeFromCart = (indexToDelete) => {
    setCart(prev => prev.filter((_, index) => index !== indexToDelete));
  };

  // --- WISHLIST LOGIC ---
  const addToWishlist = (product) => {
    if (wishlist.length >= 5) {
        alert("You can add only 5 items to the wishlist!");
        return; 
    }
    const exists = wishlist.find(item => item.id === product.id);
    if (exists) {
        alert("Item already in wishlist!");
        return;
    }
    setWishlist((prev) => [...prev, product]);
    alert("Added to Wishlist ❤️");
  };

  const removeFromWishlist = (id) => {
    setWishlist(prev => prev.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ 
        cart, addToCart, removeFromCart,
        wishlist, addToWishlist, removeFromWishlist,
        searchQuery, setSearchQuery // <--- 2. EXPORT THESE TWO
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);