import React from 'react';
import { FaSearch, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaShippingFast, FaUndo, FaCreditCard } from "react-icons/fa";

const HelpPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-[14vh]">

      {/* --- HERO SECTION (Search) --- */}
      <div className="bg-zinc-500 w-full py-16 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">How can we help you?</h1>
        <p className="text-blue-100 mb-8 text-lg">Search for answers or browse topics below</p>
        
        {/* Search Bar */}
        <div className="max-w-xl mx-auto relative flex items-center bg-white rounded-full">
          <FaSearch className="absolute left-4 text-gray-400 text-lg" />
          <input 
            type="text" 
            placeholder="Type your question here..." 
            className="w-full py-4 pl-12 pr-4 rounded-full focus:outline-none focus:ring-4 focus:ring-blue-400/50 shadow-lg text-gray-700"
          />
        </div>
      </div>

      {/* --- FAQ SECTION --- */}
      <div className="max-w-[1200px] mx-auto px-5 py-16">
        <h2 className="text-3xl font-bold text-center text-zinc-800 mb-12">Frequently Asked Questions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Shipping */}
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-100 p-3 rounded-full text-blue-600"><FaShippingFast /></div>
              <h3 className="font-bold text-lg text-zinc-800">Shipping & Delivery</h3>
            </div>
            <p className="text-sm text-zinc-500 mb-2 font-bold">Q: How long does shipping take?</p>
            <p className="text-sm text-zinc-500 mb-4">A: Usually 3-5 business days.</p>
            <p className="text-sm text-zinc-500 mb-2 font-bold">Q: Do you ship internationally?</p>
            <p className="text-sm text-zinc-500">A: Yes, we ship worldwide via DHL.</p>
          </div>

          {/* Card 2: Returns */}
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-100 p-3 rounded-full text-blue-600"><FaUndo /></div>
              <h3 className="font-bold text-lg text-zinc-800">Returns & Refunds</h3>
            </div>
            <p className="text-sm text-zinc-500 mb-2 font-bold">Q: Can I return my product?</p>
            <p className="text-sm text-zinc-500 mb-4">A: Yes, within 30 days of purchase.</p>
            <p className="text-sm text-zinc-500 mb-2 font-bold">Q: When will I get my refund?</p>
            <p className="text-sm text-zinc-500">A: Within 5-7 working days.</p>
          </div>

          {/* Card 3: Payments */}
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-100 p-3 rounded-full text-blue-600"><FaCreditCard /></div>
              <h3 className="font-bold text-lg text-zinc-800">Payment Options</h3>
            </div>
            <p className="text-sm text-zinc-500 mb-2 font-bold">Q: Is COD available?</p>
            <p className="text-sm text-zinc-500 mb-4">A: Yes, Cash on Delivery is available.</p>
            <p className="text-sm text-zinc-500 mb-2 font-bold">Q: Are my card details safe?</p>
            <p className="text-sm text-zinc-500">A: Yes, we use 100% secure payment gateways.</p>
          </div>
        </div>
      </div>

      {/* --- CONTACT FORM SECTION --- */}
      <div className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-[1000px] mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Left Side: Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-zinc-800 mb-4">Still need help?</h2>
            <p className="text-zinc-500 mb-8">Can't find the answer you're looking for? Please chat to our friendly team.</p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-blue-50 p-3 rounded-full text-blue-600"><FaEnvelope /></div>
                <div>
                  <h4 className="font-bold text-zinc-800">Email Us</h4>
                  <p className="text-zinc-500 text-sm">support@shopvia.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-blue-50 p-3 rounded-full text-blue-600"><FaPhoneAlt /></div>
                <div>
                  <h4 className="font-bold text-zinc-800">Call Us</h4>
                  <p className="text-zinc-500 text-sm">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-blue-50 p-3 rounded-full text-blue-600"><FaMapMarkerAlt /></div>
                <div>
                  <h4 className="font-bold text-zinc-800">Visit Us</h4>
                  <p className="text-zinc-500 text-sm">123 Street, Tech City, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-inner">
            <form className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-bold text-zinc-700 mb-1">Your Name</label>
                <input type="text" className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500" placeholder="enter your name" />
              </div>
              <div>
                <label className="block text-sm font-bold text-zinc-700 mb-1">Email Address</label>
                <input type="email" className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500" placeholder="name@example.com" />
              </div>
              <div>
                <label className="block text-sm font-bold text-zinc-700 mb-1">Message</label>
                <textarea rows="4" className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500" placeholder="How can we help?"></textarea>
              </div>
              <button className="bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-lg">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>

    </div>
  );
};

export default HelpPage;