import React from 'react';
import { useCart } from '../Context/CartContext';
import { Link } from 'react-router-dom';
import { FaTrash, FaShoppingCart } from 'react-icons/fa';

const WishlistPage = () => {
  const { wishlist, removeFromWishlist, addToCart } = useCart();

  const moveToCart = (product) => {
    addToCart(product);
    removeFromWishlist(product.id);
  };

  if (wishlist.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center pt-[15vh]">
        <h2 className="text-3xl font-bold text-zinc-800 mb-4">Your Wishlist is Empty</h2>
        <p className="text-zinc-500 mb-8">Save items you want to buy later!</p>
        <Link to="/products" className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold">
          Explore Products
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-[15vh] px-4 md:px-10 pb-20 max-w-[1200px] mx-auto min-h-screen">
      <h1 className="text-3xl font-bold text-zinc-800 mb-8">My Wishlist ❤️ ({wishlist.length})</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {wishlist.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 relative group">
             {/* Delete Button */}
             <button onClick={() => removeFromWishlist(item.id)} className="absolute top-2 right-2 bg-white text-red-500 p-2 rounded-full shadow-md hover:bg-red-50 z-10">
                <FaTrash size={12}/>
             </button>

             <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-lg mb-4" />
             <h3 className="font-bold text-zinc-800 truncate">{item.title || item.name}</h3>
             <p className="text-blue-600 font-bold my-2">${item.price}</p>
             
             <button onClick={() => moveToCart(item)} className="w-full bg-black text-white py-2 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 hover:bg-zinc-800">
                Move to Cart <FaShoppingCart />
             </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;