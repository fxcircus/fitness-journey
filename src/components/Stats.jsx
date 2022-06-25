import { useState, useEffect } from 'react'
import { LineChart } from './LineChart'
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import { Doughnut } from 'react-chartjs-2';
// ChartJS.register(ArcElement, Tooltip, Legend);

export default function Stats ({ render, numOfSessions, sessions}) {
    const [ sessionDays, setSessionDays ] = useState([])

    const filterDays = (sessionArr) => {
        const arr = []
        sessionArr.forEach(curSession => {
            const newDate = curSession.sessionTimestamp.slice(0,10)
            if (!arr.includes(newDate)) {
                arr.push(newDate)
            }
            
        })
        // console.log(arr)
        setSessionDays(arr)
    }

    useEffect(() => {
        filterDays(sessions)
    }, [render])

    return (
        <div className='Stats'>
            <h3>Completed {numOfSessions} sessions!</h3>
            {/* <Doughnut data={data} /> */}
            <div className='charts'>
                <LineChart dates={sessionDays}/>
                {/* <LineChart /> */}
            </div>
        </div>
    )
}