import React from 'react'

const RightCard = (props) => {
  return (
    <div className='h-110 overflow-hidden relative w-60 bg-amber-600 rounded-4xl'>
<img  className='h-full object-cover' src={props.img} ></img>

<div className='absolute top-0 left-0 h-full w-full p-2 flex flex-col justify-between'>
    <h2 className='bg-white rounded-full h-10 w-10 flex justify-center items-center'>{props.id+1}</h2>
    <div>
        <p className='text-black mb-10 leading-normal'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores ipsam quod, unde vel repudiandae porro!</p>
        <div>
       <button className='bg-blue-600 text-white font-medium px-4 py-2  rounded-full text-lg'>{props.tag}</button> 
       <button className='bg-blue-600 text-white font-medium px-4 py-2  rounded-full text-lg'><i className="ri-arrow-right-line"></i></button>
    </div>
</div>
    </div>
    </div>
  )
}

export default RightCard