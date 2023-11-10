import React from 'react'
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from "chart.js";
import "./Home.css"


ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
)

function Home() {
  const data = {
    label:["May 12","May 13","May 14","May 15","May 16","May 17",],
    datasets:[{
      data:[8, 7.8, 6, 7, 5, 6],
      backgroundColor:"transparent",
      borderColor: "#f26c6d",
    }]
  };
  const option = {};
  return (
    <div className='chart-cont overflow-hidden' style={{width: "100%"}}>
      <Line style={{"margin-left":" 5px"}} data = {data} option = {option}></Line>
    </div>
  )
}

export default Home