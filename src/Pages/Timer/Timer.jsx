import React, { useState, useRef } from 'react'
import { useParams } from 'react-router';

const Timer = () => {
  const [time, setTime] = useState(0); // time in milliseconds
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);
  const params = useParams();

   const startTimer = () => {
    if (running) return;
    setRunning(true);
    const startTime = Date.now() - time;

    intervalRef.current = setInterval(() => {
      setTime(Date.now() - startTime);
    }, 10);
  };

   const stopTimer = () => {
    const getActivity = JSON.parse(localStorage.getItem('activity'));
    let loadData = getActivity.map((data)=>
        data.id == params.id ? {...data, ['time']: hrs+':'+mins+':'+secs+':'+ms} : data
    )

    localStorage.setItem('activity',JSON.stringify(loadData))
    

    setRunning(false);
    clearInterval(intervalRef.current);
  };

 const formatTime = (time) => {
    const hrs = Math.floor(time / 3600000);
    const mins = Math.floor((time % 3600000) / 60000);
    const secs = Math.floor((time % 60000) / 1000);
    const ms = time % 1000;

    return {
      hrs: String(hrs).padStart(2, '0'),
      mins: String(mins).padStart(2, '0'),
      secs: String(secs).padStart(2, '0'),
      ms: String(ms).padStart(3, '0'),
    };
  };

   const { hrs, mins, secs, ms } = formatTime(time);

  return (
    <div className='w-full h-[90%]'>
        <div className='w-full h-[15%] flex justify-between items-center px-3'>
        <h2 className='text-white text-2xl font-bold'>Story</h2>

        <div className='flex gap-3'>
             <button className='primary-btn'>
                Back
            </button>
            <button className='primary-btn'>
                Edit
            </button>
            <button className='primary-btn'>
                Delete
            </button>
        </div>
        </div>

        <div className='w-full h-[85%] bg-shining-black'>
            <div className='h-[80%] w-full flex justify-around items-center'>
                <div className='bg-black h-[50%] w-1/4 text-center'>
                    <span className='text-white font-extrabold text-9xl'>{hrs}</span>
                </div>
                <div className='bg-black h-[50%] w-1/4 text-center'>
                    <span className='text-white font-extrabold text-9xl'>{mins}</span>
                </div>
                <div className='bg-black h-[50%] w-1/4 text-center'>
                    <span className='text-white font-extrabold text-9xl'>{secs}</span>
                </div>
                <div className='bg-black h-[50%] w-1/4 text-center'>
                    <span className='text-white font-extrabold text-9xl'>{ms}</span>
                </div>
            </div>

            <div className='flex justify-center'>
               {!running ? <button className='primary-btn w-xl' onClick={startTimer} >
                    Start
                </button>:<button className='primary-btn w-xl' onClick={stopTimer}>
                    Stop
                </button>}
            </div>

        </div>
    </div>
  )
}

export default Timer