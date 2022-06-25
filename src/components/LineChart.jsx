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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function LineChart({ dates }) {

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
  
  // const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const labels = dates
  const numList = [10, 20, 1, 50, 1, 20, 100]
  const colors = {
      "red" : 'rgb(255, 99, 132)',
      "white" : 'rgb(255, 255, 255)',
      "blue": 'rgb(53, 162, 235)',
      "green": 'rgb(60, 179, 113)',
      "orange": 'rgb(255, 165, 0)',
      "purple": 'rgb(106, 90, 205)'
  }

  const data = {
    labels,
    datasets: [
      {
        label: 'Calories',
        data: labels.map((label, idx) => {return (numList[idx])}),
        borderColor: colors.red,
        backgroundColor: colors.white,
      },
      {
          label: 'Time',
          data: labels.map((label, idx) => {return (numList[idx])}),
          borderColor: colors.blue,
          backgroundColor: 'rgba(255, 255, 255, 255)',
      },
      {
          label: 'Setting',
          data: labels.map((label, idx) => {return (numList[idx])}),
          borderColor: colors.green,
          backgroundColor: colors.white,
      }
    ]
  }

  useEffect(()=> {
    console.log(dates)
  })

  return <Line options={options} data={data} />;
}
