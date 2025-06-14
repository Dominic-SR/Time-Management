import React,{useState,useEffect, useRef} from 'react'
import ReactApexChart from "react-apexcharts";


const Dashboard = () => {
 const pieElement = useRef(null); 
 const [pieChartHeight, setPieChartHeight] = useState(0)
 const series= [44, 55, 13, 43, 22]
 const options = {
    chart: {
      type: 'pie',
    },
    labels: ['Apples', 'Bananas', 'Cherries', 'Dates'],
    colors: ['#1E1E1E', '#444', '#777'],
    legend: {
      position: 'bottom',
       labels: {
        colors: ['#fff', '#fff', '#fff', '#fff', '#fff'], 
        useSeriesColors: false, // Set to true if you want legend text to match slice color
      },
    },

    dataLabels: {
      style: {
        colors: ['#ffffff'], // Optional: makes data labels inside the pie white too
      },
    },

    tooltip: {
      style: {
        color: '#ffffff', // Tooltip text (if visible on dark background)
      },
    },
    
  };

  useEffect(()=>{
    setPieChartHeight(pieElement.current.getBoundingClientRect().height)
  },[pieChartHeight !== 0])

  console.log("0000",pieChartHeight);
  

  return (
    <div className='flex justify-between w-[100%] h-[90%]' ref={pieElement}>
      <div className='flex items-center w-[50%] h-[100%] '>
         <ReactApexChart options={options} series={series} type="pie" height={pieChartHeight} />
      </div>
      <div className='relative w-[50%] h-[100%] bg-green-400'>
      </div>    
    </div>
  )
}

export default Dashboard