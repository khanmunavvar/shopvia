import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
    return (
        <footer className='bg-zinc-100 py-15'>
            <div className='max-w-[1400] flex flex-wrap gap-12 mx-auto px-10'>
                <div className='flex-1 basis-[300px]'>
                    <a href="#" className="text-3xl font-bold">
                        sho<span className="text-blue-400">P</span>via
                    </a>
                    <p className='text-zinc-600 mt-6 max-w-[350px]'>
                        Your ultimate destination for premium brands. We bring global fashion and lifestyle right to your doorstep.
                    </p>
                    <p className='text-zinc-800 mt-6'>
                        2025 &copy; all right reserved
                    </p>
                </div>



                <ul className='flex-1'>
                    <li>
                        <h5 className='text-zinc-800 text-2xl font-bold'>
                            Company
                        </h5>

                    </li>
                    <li className='mt-6'>
                        <a href='#' className='text-zinc-800 hover:text-blue-500'>
                            About
                        </a>

                    </li>

                    <li className='mt-6'>
                        <a href='#' className='text-zinc-800  hover:text-blue-500'>
                            FAQ'S
                        </a>

                    </li>
                </ul>


                <ul className='flex-1'>
                    <li>
                        <h5 className='text-zinc-800 text-2xl font-bold'>
                            Support
                        </h5>

                    </li>
                    <li className='mt-6'>
                        <a href='#' className='text-zinc-800 hover:text-blue-500'>
                            Customer Support
                        </a>

                    </li>

                    <li className='mt-6'>
                        <a href='#' className='text-zinc-800  hover:text-blue-500'>
                            FeedBack
                        </a>

                    </li>
                    <li className='mt-6'>
                        <a href='#' className='text-zinc-800  hover:text-blue-500'>
                            Contact Us
                        </a>

                    </li>
                </ul>

                <div className='flex-1'>

                    <h5 className='text-zinc-800 text-2xl font-bold'>
                        Stay Connected
                    </h5>
                    <p className='mt-6 text-zinc-600'>
                        Question or Feedback?<br></br>We'd love to hear from you.
                    </p>
                    <div className=' flex bg-white   p-1 rounded-lg mt-6'>
                        <input type="email" name="email" id="email" placeholder='Enter Email Address' autoComplete='on' className='[h-5vh] pl-4 flex-1 focus:outline-none '></input>
                        <button className='bg-blue-500 p-2 rounded-lg text-white text-2xl cursor-pointer'>
                            <IoIosArrowForward />
                        </button>
                    </div>
                </div >

            </div>


        </footer>
    )
}

export default Footer
