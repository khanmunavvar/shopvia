import React from 'react';
import { FaAward, FaUsers, FaSmile } from "react-icons/fa";

const AboutUsPage = () => {
  return (
    <div className="w-full min-h-screen bg-white pt-[14vh] pb-10">
      
      {/* --- HERO SECTION --- */}
      <div className="text-center max-w-3xl mx-auto px-5 mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
          Reinventing Fashion with <span className="text-blue-500">ShoPvia</span>
        </h1>
        <p className="text-lg text-zinc-500 leading-relaxed">
          "ShoPvia is not just a brand, it is a vision. We believe that everyone deserves to look stylish without breaking the bank. Quality and Trust are our identity."
        </p>
      </div>

      {/* --- IMAGE & CONTENT SECTION --- */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-5 items-center mb-20">
        
        {/* Left Side: Image */}
        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl group">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=60" 
            alt="Our Office" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-blue-900/20"></div>
        </div>

        {/* Right Side: Text */}
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-bold text-zinc-800">Our Mission</h2>
          <p className="text-zinc-600">
           Founded in 2025, ShoPvia has quickly become a favorite for thousands of customers. Our mission is simple:
            **Best Quality Products @ Best Prices.**
          </p>
          <p className="text-zinc-600">
            We source directly from manufacturers to cut out middleman costs and pass those savings directly to you.
          </p>
          
          {/* Stats Row */}
          <div className="flex gap-8 mt-4">
            <div>
              <h3 className="text-3xl font-bold text-blue-600">50k+</h3>
              <p className="text-sm text-zinc-500">Happy Customers</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-blue-600">100+</h3>
              <p className="text-sm text-zinc-500">Brands</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-blue-600">4.8</h3>
              <p className="text-sm text-zinc-500">Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* --- WHY CHOOSE US --- */}
      <div className="bg-zinc-100 py-16">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-3xl font-bold text-center text-zinc-800 mb-12">Why Choose ShoPvia?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                <FaAward />
              </div>
              <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
              <p className="text-zinc-500">We never compromise on quality.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                <FaUsers />
              </div>
              <h3 className="text-xl font-bold mb-2">Customer First</h3>
              <p className="text-zinc-500">Your satisfaction is our top priority.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                <FaSmile />
              </div>
              <h3 className="text-xl font-bold mb-2">Satisfaction</h3>
              <p className="text-zinc-500">If you don't love it, we offer a hassle-free return policy.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AboutUsPage;