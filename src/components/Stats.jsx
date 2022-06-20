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

    return (
        <div className='Stats'>
            <h3>Completed {numOfSessions} sessions!</h3>
            {/* <Doughnut data={data} /> */}
            <div className='charts'>
                <LineChart />
                <LineChart />
            </div>
        </div>
    )
}