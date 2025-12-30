import React from 'react'

const Btnn = (props) => {
  return (
    <button 
      
      onClick={props.onClick} 
      
      className={`
        bg-blue-600 text-white 
        px-8 py-3 rounded-full 
        font-semibold text-sm md:text-lg 
        shadow-lg shadow-blue-500/30 
        hover:bg-blue-700 hover:shadow-blue-500/50 hover:-translate-y-1 
        active:scale-95 transition-all duration-300
        ${props.className} 
      `}
    >
      {props.content}
    </button>
  )
}

export default Btnn