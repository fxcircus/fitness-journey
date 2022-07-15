import { useState, useEffect } from 'react'
import { LineChart } from './LineChart'
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import { Doughnut } from 'react-chartjs-2';
// ChartJS.register(ArcElement, Tooltip, Legend);

export default function Stats ({ render, numOfSessions, sessions}) {
    const [ sessionDays, setSessionDays ] = useState([])
    const [ sessionExcs, setSessionExcs ] = useState(null)

    const filterSessionData = (sessionArr) => {
        const datesArr = []
        const excArr = []
        // Instead of object with daily session, I want object with 1 ex on all dates
        // Need to redo the object
        sessionArr.forEach(curSession => {
            // console.log(curSession)
            const newDate = curSession.sessionTimestamp.slice(0,10)
            const newExc = curSession.exercises
            if (!datesArr.includes(newDate)) {
                datesArr.push(newDate)
                if (newExc.length !== 0){
                    newExc.timestamp = newDate
                    excArr.push(newExc)
                }
                // console.log(`pushing ${newExc}`)
            }
        })
        setSessionDays(datesArr)
        setSessionExcs(excArr)
        console.log(`excArr = `,excArr)
    }

    useEffect(() => {
        filterSessionData(sessions)
    }, [render])

    const loaded = () => {
        return (
            <div className='Stats'>
                <h3>Completed {numOfSessions} sessions!</h3>
                {/* <Doughnut data={data} /> */}
                <div className='charts'>
                    <LineChart dates={sessionDays} excs={sessionExcs}/>
                    {/* <LineChart /> */}
                </div>
            </div>
        )
    }

    const loading = () => {
        return
    }

    return sessionExcs ? loaded() : loading()
}