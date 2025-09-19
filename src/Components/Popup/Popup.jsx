import React,{useState, useEffect} from 'react'

const Popup = ({closeActivityPopup, setShowActivity}) => {
  const [activity, setActivity] = useState([]);

  const handleChange = (e) =>{
    const {name, value} = e.target;
    let getActivity = []
    getActivity = localStorage.getItem('activity') ? JSON.parse(localStorage.getItem('activity')) : [];
    const genNum =  Math.floor(1000 + Math.random() * 9000);;
    //console.log("sss",genNum);
    
    getActivity.push({['id']:genNum,[name]:value})
    setActivity(getActivity)
  }

  const handleSubmit = (e) =>{  
    e.preventDefault();
    localStorage.setItem('activity', JSON.stringify(activity));
    setShowActivity(false) 
  }

  useEffect(()=>{
    const value = localStorage.getItem('activity');
    console.log(JSON.parse(value));
  },[])

  return (
    <div className='absolute z-10 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-shining-black rounded-lg w-1/2 h-1/2'>
       <form className='flex flex-col w-4/5 m-auto'  onSubmit={handleSubmit}>
        <h2 className='text-white text-left my-4'>Activity</h2>
        <input className='form-control mt-[10px]' type='text' name='activity' placeholder='Activity name' onChange={handleChange} />

         <input className='form-control mt-[10px]' type='time' step="1" name='settime' placeholder='Set Time' onChange={handleChange} />

        <button className='primary-btn fixed bottom-[25px] right-[25px]'>Submit</button>
       </form>
        <button className='primary-btn fixed bottom-[25px] left-[25px]' onClick={closeActivityPopup}>Cancel</button>
    </div>
  )
}

export default Popup