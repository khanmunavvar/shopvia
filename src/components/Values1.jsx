import React from 'react'
import Heading from './Heading'
import { FaHeart } from "react-icons/fa6";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { MdSentimentVerySatisfied } from "react-icons/md";
import { MdPrivacyTip } from "react-icons/md";
//import MultipleBrands from '../assets/MultipleBrands.jpg'

const Values1 = () => {

  // Left side mapping
  const leftvalues = value.slice(0, 2).map(item => {
    return (
      <div key={item.id} className='flex flex-col lg:flex-row-reverse items-center gap-5 lg:gap-7 text-center lg:text-right'>
        {/* Icon container */}
        <div className='shrink-0'>
          <span className='flex justify-center items-center text-3xl text-white bg-blue-500 w-16 h-16 rounded-full'>
            {item.icons}
          </span>
        </div>
        {/* Text container */}
        <div>
          <h4 className='text-zinc-800 text-2xl lg:text-3xl font-bold'>{item.title}</h4>
          <p className='text-zinc-600 text-sm lg:text-base px-4 lg:px-0'>{item.para}</p>
        </div>
      </div>
    )
  })

  // Right side mapping
  const rightvalues = value.slice(2, 4).map(item => {
    return (
      <div key={item.id} className='flex flex-col lg:flex-row items-center gap-5 lg:gap-7 text-center lg:text-left'>
        {/* Icon container */}
        <div className='shrink-0'>
          <span className='flex justify-center items-center text-3xl text-white bg-blue-500 w-16 h-16 rounded-full'>
            {item.icons}
          </span>
        </div>
        {/* Text container */}
        <div>
          <h4 className='text-zinc-800 text-2xl lg:text-3xl font-bold'>{item.title}</h4>
          <p className='text-zinc-600 text-sm lg:text-base px-4 lg:px-0'>{item.para}</p>
        </div>
      </div>
    )
  })

  return (
    <section className='bg-white'>
      <div className='max-w-[1400px] mx-auto px-6 lg:px-10 py-10'>
        <Heading highlight='What' heading='we Offer' />

        {/* Main Container:
          - Mobile: Column layout
          - Desktop: Row layout (lg:flex-row)
        */}
        <div className='flex flex-col md:flex-row  items-center justify-between gap-12 lg:gap-5 mt-16'>

          {/* Left Side: Order 1 on mobile */}
          <div className='w-full lg:w-1/3 flex flex-col gap-10 lg:gap-y-50 order-1'>
            {leftvalues}
          </div>

          {/* Center Image: Order 2 on mobile, perfect circle */}
          <div className='w-full lg:w-1/3 flex justify-center order-2'>
            <div className='w-64 h-64 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden border-[12px] border-zinc-50 shadow-2xl'>
              <img
                src="/images/MultipleBrands.jpg"
                alt="Our Brands"
                className='w-full h-full object-cover'
              />
            </div>
          </div>

          {/* Right Side: Order 3 on mobile */}
          <div className='w-full lg:w-1/3 flex flex-col gap-10 lg:gap-y-50 order-3'>
            {rightvalues}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Values1

const value = [
  {
    id: 1,
    title: "Trust",
    para: "It's a long established fact that a reader will be distracted by the readable content.",
    icons: <FaHeart />
  },
  {
    id: 2,
    title: "Always Best Quality",
    para: "It's a long established fact that a reader will be distracted by the readable content.",
    icons: <VscWorkspaceTrusted />
  },
  {
    id: 3,
    title: "Customer Satisfaction",
    para: "It's a long established fact that a reader will be distracted by the readable content.",
    icons: <MdSentimentVerySatisfied />
  },
  {
    id: 4,
    title: "Privacy & Security",
    para: "It's a long established fact that a reader will be distracted by the readable content.",
    icons: <MdPrivacyTip />
  },
]