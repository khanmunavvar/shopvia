import React, { useState, useEffect } from 'react';
import Btnn from './Btnn';
import { useNavigate } from 'react-router-dom';

const OfferSection = () => {
  const navigate = useNavigate();

  // Timer Logic
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 2); 

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-16 px-4 md:px-10 mt-5 bg-zinc-100 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative">
        
        {/* Left Side: Content */}
        <div className="flex-1 text-center md:text-left z-10">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-2 block">
            Limited Time Offer
          </span>
          
          <h2 className="text-4xl md:text-6xl font-extrabold text-zinc-800 leading-tight">
            Premium <span className="text-blue-600">Sound</span> <br /> 
            Wireless Gear
          </h2>
          
          <p className="text-zinc-500 mt-6 max-w-md mx-auto md:mx-0 text-lg font-medium">
            Unlock premium sound quality at an unbeatable price. 
            Offer ends soon!
          </p>

          <div className="flex items-center justify-center md:justify-start gap-4 mt-8 mb-10">
            <TimerBox value={timeLeft.days} label="Days" />
            <TimerBox value={timeLeft.hours} label="Hrs" />
            <TimerBox value={timeLeft.minutes} label="Mins" />
            <TimerBox value={timeLeft.seconds} label="Secs" />
          </div>

          <Btnn 
            content="Grab the Deal" 
            onClick={() => navigate('/products')}
            className="px-10 shadow-blue-200"
          />
        </div>

        {/* Right Side: Image */}
        <div className="flex-1 w-full flex justify-center relative z-10">
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-blue-200 rounded-full blur-3xl -z-10 opacity-60"></div>
          
          
          <img 
            src="/images/electronic3.webp" 
            alt="Premium Headphones" 
            className="w-full max-w-sm md:max-w-md object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500 rounded-xl"
          />
        </div>

      </div>
    </section>
  );
};

// Timer Component
const TimerBox = ({ value, label }) => (
  <div className="flex flex-col items-center bg-white border border-zinc-200 p-3 md:p-4 rounded-2xl min-w-[75px] md:min-w-[85px] shadow-lg shadow-zinc-200/50">
    <span className="text-2xl md:text-3xl font-black text-zinc-800">
      {value < 10 ? `0${value}` : value}
    </span>
    <span className="text-[10px] md:text-xs text-zinc-500 uppercase font-bold mt-1 tracking-wider">
      {label}
    </span>
  </div>
);

export default OfferSection;