import React from 'react';
// 1. removeFromCart function import karo
import { useCart } from '../Context/CartContext';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';

const CartPage = () => {
  // 2. Destructure removeFromCart here
  const { cart, removeFromCart } = useCart();

  const totalPrice = cart.reduce((total, item) => total + Number(item.price), 0);

  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center pt-[15vh]">
        <h2 className="text-3xl font-bold text-zinc-800 mb-4">Your Cart is Empty</h2>
        <p className="text-zinc-500 mb-8">Looks like you haven't added anything yet.</p>
        <Link to="/products" className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-[15vh] px-4 md:px-10 pb-20 max-w-[1200px] mx-auto min-h-screen">
      <h1 className="text-3xl font-bold text-zinc-800 mb-8">Shopping Cart ({cart.length} items)</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <div className="lg:col-span-2 flex flex-col gap-4">
          {cart.map((item, index) => (
            <div key={index} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              
              <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden shrink-0">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>
              
              <div className="flex-grow">
                <h3 className="font-bold text-zinc-800">{item.title || item.name}</h3>
                <p className="text-sm text-zinc-500">{item.category}</p>
                <p className="text-blue-600 font-bold mt-1">${Number(item.price).toFixed(2)}</p>
              </div>

              {/* 3. Button par onClick lagao */}
              <button 
                onClick={() => removeFromCart(index)} 
                className="text-red-400 hover:text-red-600 p-2 hover:bg-red-50 rounded-full transition-colors"
                title="Remove Item"
              >
                <FaTrash />
              </button>
            </div>
          ))}
        </div>

        <div className="h-fit bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-zinc-800 mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2 text-zinc-600">
            <span>Subtotal</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-4 text-zinc-600">
            <span>Shipping</span>
            <span className="text-green-600">Free</span>
          </div>
          <div className="border-t border-gray-200 pt-4 flex justify-between font-bold text-lg text-zinc-800 mb-6">
            <span>Total</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <button className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-zinc-800 transition">
            Checkout
          </button>
        </div>

      </div>
    </div>
  );
};

export default CartPage;