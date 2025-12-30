import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext'; 
import Btnn from '../components/Btnn'; 

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth(); // use login function from Authcontext
  
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // --- FAKE LOGIN LOGIC ---
  
    const fakeName = formData.email.split('@')[0];

    const userData = {
      name: fakeName,
      email: formData.email,
    };

    // 1.update context and local storage
    login(userData);

    // 2. show msg to user and redirect
    alert("Login Successful! Welcome back.");
    navigate('/'); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-100 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        
        <h2 className="text-3xl font-bold text-center mb-2">Welcome Back</h2>
        <p className="text-zinc-500 text-center mb-8">Please login to your account</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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

          <Btnn content="Login" type="submit" className="w-full mt-4 rounded-xl" />
        </form>

        <p className="text-center mt-6 text-zinc-600">
          Don't have an account?{' '}
          <Link to="/register" className="text-blue-600 font-bold hover:underline">
            Register
          </Link>
        </p>

      </div>
    </div>
  );
};

export default LoginPage;