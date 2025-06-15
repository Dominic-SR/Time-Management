import React from 'react'
import { useNavigate } from 'react-router';

const Card = ({cardDetails}) => {
const navigate = useNavigate();
  console.log("ccc",cardDetails);
  

      let itemWidthClass = 'w-full';

     if (cardDetails?.length === 2) itemWidthClass = 'w-1/2';
  else if (cardDetails?.length === 3) itemWidthClass = 'w-1/3';
  else if (cardDetails?.length === 4) itemWidthClass = 'w-1/4';
  else if (cardDetails?.length > 4) itemWidthClass = 'w-1/2 md:w-1/4';

  return (
    <div className='flex flex-wrap justify-around gap-x-[10px] gap-y-[20px] py-[50px] px-[50px] h-full w-full'>
        {
        cardDetails?.length > 0? cardDetails?.map((item,index)=>(
        <div className={`${itemWidthClass} flex flex-col justify-center items-center bg-shining-black rounded-lg cursor-pointer`} key={item.id} onClick={()=>navigate(`/timer/${item.id}`)}>
            <h2 className='text-white font-bold text-lg'>{item.activity}</h2>
            <span className='text-white'>00:00:00</span>
        </div>)):
         <div className={`w-full flex flex-col justify-center items-center bg-shining-black rounded-lg`}>
            <h2 className='text-white font-bold text-lg'>No Data Found !</h2>
        </div>
        }
    </div>
  )
}

export default Card