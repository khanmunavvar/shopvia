import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext'; // Context Import
import Btnn from '../components/Btnn';

const RegisterPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth(); // Register hone ke baad seedha login kara denge
  
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // --- FAKE REGISTER LOGIC ---
    // User ne jo naam bhara hai, wahi save karenge
    const userData = {
      name: formData.name,
      email: formData.email,
    };

    // 1. Data save karo (Auto Login after register)
    login(userData);

    // 2. Redirect
    alert("Account Created Successfully!");
    navigate('/'); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-100 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        
        <h2 className="text-3xl font-bold text-center mb-2">Create Account</h2>
        <p className="text-zinc-500 text-center mb-8">Join Shopvia today</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          
          {/* Name Field (Register Page ki khaasiyat) */}
          <input 
            type="text" 
            name="name"
            required
            placeholder="Full Name" 
            onChange={handleChange}
            className="w-full p-3 bg-zinc-50 border border-zinc-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input 
            type="email" 
            name="email"
            required
            placeholder="Email Address" 
            onChange={handleChange}
            className="w-full p-3 bg-zinc-50 border border-zinc-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
          />
          
          <input 
            type="password" 
            name="password"
            required
            placeholder="Password" 
            onChange={handleChange}
            className="w-full p-3 bg-zinc-50 border border-zinc-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
          />

          <Btnn content="Sign Up" type="submit" className="w-full mt-4 rounded-xl" />
        </form>

        <p className="text-center mt-6 text-zinc-600">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 font-bold hover:underline">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default RegisterPage;