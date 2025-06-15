import React,{useState} from 'react'
import Popup from '../Popup/Popup'
const Header = () => {

  const [showActivity, setShowActivity] = useState(false);

  const closeActivityPopup = (e) =>{
    setShowActivity(false)
  }

  return (
    <div className='flex items-center justify-between h-[10%] py-4 px-4 bg-shining-black'>
        {showActivity && <Popup closeActivityPopup={closeActivityPopup} />}
        <h1 className='text-white'>Time management</h1>

        <div className='flex gap-1'>
           <button className='border-1 rounded-lg p-2 cursor-pointer text-white' onClick={()=>{setShowActivity(true)}}>Start Activity</button>
        </div>
    </div>
  )
}

export default Header