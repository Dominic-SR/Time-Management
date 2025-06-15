import React,{useState,useEffect, useRef} from 'react'
import ReactApexChart from "react-apexcharts";
import Card from '../../Components/Card/Card';


const Dashboard = () => {
 const pieElement = useRef(null); 
 const [pieChartHeight, setPieChartHeight] = useState(0)
 const [cardDetails, setCardDetails] = useState([])
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
    setPieChartHeight(Math.round(pieElement.current.getBoundingClientRect().height - 100))

    const getActivity = localStorage.getItem('activity')
    setCardDetails(...cardDetails, JSON.parse(getActivity))
  },[])
  

  return (
    <div className='flex justify-between w-full h-[90%]' ref={pieElement}>
      <div className='flex items-center justify-center w-[50%] h-full '>
        <div className='block w-[90%]'>
        {pieChartHeight !== 0 && <ReactApexChart options={options} series={series} type="pie" height={pieChartHeight} />}
        </div>
      </div>
      <div className='relative w-[50%] h-[100%]'>
        <div className='block h-full w-full'>
          <Card
          cardDetails={cardDetails}
          />
        </div>
      </div>    
    </div>
  )
}

export default Dashboard