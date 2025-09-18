import React,{useState,useEffect, useRef} from 'react'
import ReactApexChart from "react-apexcharts";
import Card from '../../Components/Card/Card';


const Dashboard = () => {
 const pieElement = useRef(null); 
 const [pieChartHeight, setPieChartHeight] = useState(0)
 const [cardDetails, setCardDetails] = useState([])
 const [chartPercentage, setChartPercentage] = useState([])
 const [chartLabel, setChartLabel] = useState([])
 console.log("one",chartLabel);
 console.log("two",chartPercentage);
 
 const series= [44, 44, 44, 44, 44]
 const options = {
    chart: {
      type: 'pie',
    },
    labels: chartLabel,
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

//   const timeToPercentage = (timeStr) => {
//   const [hours, minutes, seconds, milliseconds] = timeStr?.split(':')?.map(Number);

//   const totalMs = 
//       (hours * 3600000) +
//       (minutes * 60000) +
//       (seconds * 1000) +
//       milliseconds;

//   const percentage = (totalMs / 86400000) * 100;
//   return percentage.toFixed(5);
// }

  useEffect(()=>{
    setPieChartHeight(Math.round(pieElement.current.getBoundingClientRect().height - 100))
    const getActivity = JSON.parse(localStorage.getItem('activity'))
    getActivity && setCardDetails(...cardDetails, getActivity)

    let getLabel=[]
    let getPercentage=[]
    getActivity?.map((item)=>{
      getLabel.push(item.activity)
      // let getResPercentage = timeToPercentage(item);
      // getPercentage.push(getResPercentage)
    })
      setChartLabel(getLabel)
      setChartPercentage(getPercentage)

  },[])
  

  return (
    <div className='flex justify-between w-full h-[90%]' ref={pieElement}>
      <div className='flex items-center justify-center w-[50%] h-full py-[50px] px-[50px]'>
        <div className='block w-[90%] h-[90%]'>
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