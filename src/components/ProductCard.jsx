import React from 'react';
import { FaStar, FaShoppingCart, FaHeart } from "react-icons/fa";
import { useCart } from '../Context/CartContext';

const ProductCard = ({ image, title, price, category, rating, id }) => { 
  
  const { addToCart, addToWishlist } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, title, price, image, category });
  };

  const handleAddToWishlist = () => {
    addToWishlist({ id, title, price, image, category });
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 group h-full flex flex-col justify-between relative">
      
      {/* Wishlist Button */}
      <button 
        onClick={handleAddToWishlist}
        className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all z-10"
      >
        <FaHeart />
      </button>

      {/* Image Container */}
      <div className="h-64 overflow-hidden relative bg-gray-100">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col flex-grow">
        
      
        <p className="text-xs text-zinc-400 font-bold uppercase tracking-wider mb-1">
            {category || "Collection"}
        </p>

        <div className="flex justify-between items-start mb-2">
          {/* Title Fallback */}
          <h3 className="text-lg font-bold text-zinc-800 truncate pr-2 w-full">
            {title || "Product Name"}
          </h3>
        </div>

        <div className='flex justify-between items-center mb-4'>
           <span className="flex items-center text-yellow-400 text-sm font-bold">
             <FaStar className="mr-1" /> {rating || 4.5}
           </span>
        </div>

        <div className="flex justify-between items-center pt-2 border-t border-gray-100 mt-auto">
          <span className="text-xl font-bold text-blue-600">${Number(price).toLocaleString()}</span>
          <button onClick={handleAddToCart} className="bg-zinc-900 hover:bg-blue-600 text-white p-3 rounded-xl transition-colors flex items-center gap-2 text-sm font-semibold">
            Add <FaShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;