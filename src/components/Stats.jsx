import { useState, useEffect } from 'react'
import { getSessions } from '../utilities/api/session-api'
import { LineChart } from './LineChart'
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import { Doughnut } from 'react-chartjs-2';
// ChartJS.register(ArcElement, Tooltip, Legend);

export default function Stats (props) {
    const [ numOfSessions, setNumOfSessions ] = useState(0)
    const [ sessions, setSessions ] = useState([])
    const [ datesThisMonth, setDatesThisMonth ] = useState([])

    const filterThisMonthSessions = (dateArr) => {
        const res = []
        dateArr.forEach(date => {
            console.log(date.sessionTimestamp)
        })
    }

    const getAllSessions = async () => {
        const res = await getSessions()
        setSessions(res)
        setNumOfSessions(res.length)
        filterThisMonthSessions(res)
        // console.log(res)
    }

    useEffect(() => {
        getAllSessions()
    }, [props.render])

    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      }

    return (
        <div className='Stats'>
            <h3>Completed {numOfSessions} sessions!</h3>
            {/* <Doughnut data={data} /> */}
            <LineChart />
        </div>
    )
}