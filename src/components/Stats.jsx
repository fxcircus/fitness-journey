import { useState, useEffect } from 'react'
import { getSessions } from '../utilities/api/session-api'
import { LineChart } from './LineChart'
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import { Doughnut } from 'react-chartjs-2';
// ChartJS.register(ArcElement, Tooltip, Legend);

export default function Stats (props) {

    useEffect(() => {
        // getAllSessions()
    }, [props.render])

    return (
        <div className='Stats'>
            <h3>Completed {props.numOfSessions} sessions!</h3>
            {/* <Doughnut data={data} /> */}
            <div className='charts'>
                <LineChart />
                <LineChart />
            </div>
        </div>
    )
}