import React from 'react'

const Heading = (props) => {
    return (
        <div className='w-fit mx-auto  '>
            <h2 className='md:text-5xl text-[2.5rem] font-bold'><span className='text-blue-500'>{props.highlight} </span> {props.heading}
            </h2>
        </div>
    )
}

export default Heading
