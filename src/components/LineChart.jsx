// https://react-chartjs-2.js.org/examples/line-chart
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';
import { useEffect } from 'react';
import { useState } from 'react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function LineChart({ dates, excs }) {

  const [ excData, setExcData ] = useState([])

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Sessions over time',
      },
    },
  };
  
  const labels = dates
  const colors = {
      "red" : 'rgb(255, 99, 132)',
      "white" : 'rgb(255, 255, 255)',
      "blue": 'rgb(53, 162, 235)',
      "green": 'rgb(60, 179, 113)',
      "orange": 'rgb(255, 165, 0)',
      "purple": 'rgb(106, 90, 205)'
  }

  // const numList = [10, 20, 1, 50, 1, 20, 100]
  // const data = {
  //   labels,
  //   datasets: [
  //     {
  //       label: 'Calories',
  //       data: labels.map((label, idx) => {return (numList[idx])}),
  //       borderColor: colors.red,
  //       backgroundColor: colors.white,
  //     },
      // {
      //     label: 'Time',
      //     data: labels.map((label, idx) => {return (numList[idx])}),
      //     borderColor: colors.blue,
      //     backgroundColor: 'rgba(255, 255, 255, 255)',
      // },
      // {
      //     label: 'Setting',
      //     data: labels.map((label, idx) => {return (numList[idx])}),
      //     borderColor: colors.green,
      //     backgroundColor: colors.white,
      // }
  //   ]
  // }

  const data = {
    labels,
    datasets: excData
  }

  var randomProperty = function (obj) {
    var keys = Object.keys(obj);
    return obj[keys[ keys.length * Math.random() << 0]];
  }

  const getDataSets = (sessionData) => {
    // console.log(`sessionData=`)
    // console.log(sessionData)
    const arr = []
    sessionData.forEach(fullSession => {
      fullSession.forEach((set, index) => {
          const randomColor = randomProperty(colors)
          const obj = {
            label: set.excercise,
            data: labels.map((label, idx) => {return (set.reps)}),
            // data: set.reps,
            borderColor: randomColor,
            backgroundColor: randomColor
          }
          arr.push(obj)
      })
    })

    setExcData(arr)
  }

  useEffect(()=> {
    getDataSets(excs)
  },[])

  return <Line options={options} data={data} />;
}
