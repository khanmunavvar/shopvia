import React from 'react';
import { useNavigate } from 'react-router-dom'; 

const Hero = () => {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate('/products'); 
  };

  return (
    <div className="relative w-full h-screen"> 
      
      {/* 1. Background Image */}
      <img 
        src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop" 
        alt="Hero Background" 
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

     
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      {/* 3. Content (Text & Button) */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center px-4 z-10">
        
        <span className="text-blue-400 font-bold tracking-widest uppercase text-sm md:text-lg mb-4">
          Welcome to Shopvia
        </span>
        
        <h1 className="text-4xl md:text-7xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
          Style That Speaks <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            For Itself
          </span>
        </h1>
        
        <p className="text-gray-200 text-lg md:text-xl max-w-2xl mb-8 drop-shadow-md">
          Explore the latest trends in fashion and tech. Upgrade your lifestyle with our exclusive collection today.
        </p>
        
        {/* CTA Button with Redirect */}
        <button 
          onClick={handleShopNow}
          className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/40"
        >
          Shop Now
        </button>
      
      </div>
    </div>
  );
};

export default Hero;