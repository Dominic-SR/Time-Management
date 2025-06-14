import React from 'react'

const Card = ({cardDetails}) => {
  return (
    <div className='flex flex-wrap justify-between gap-[10px] py-[50px] px-[40px] h-full w-full'>
        {cardDetails.map((item,index)=>(
        <div className='flex flex-col justify-center items-center bg-shining-black w-2/7 h-1/4 rounded-lg' key={item.id}>
            <h2 className='text-white font-bold text-lg'>{item.count}</h2>
            <span className='text-white'>{item.label}</span>
        </div>))}
    </div>
  )
}

export default Card