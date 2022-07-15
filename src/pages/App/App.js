import { useState, useEffect } from 'react'
import ExcerciseTable from '../../components/ExcerciseTable'
import Stats from '../../components/Stats'
import { workoutA } from '../../utilities/data/routines'
import { getSessions } from '../../utilities/api/session-api'


export default function App() {
    const [ render, setRender ] = useState(false)
    const [ sessions, setSessions ] = useState([])
    const [ numOfSessions, setNumOfSessions ] = useState(0)
    const [ datesThisMonth, setDatesThisMonth ] = useState([])
    const [ routine, setRoutine ] = useState(null)

    const filterThisMonthSessions = (dateArr) => {
        const res = []
        dateArr.forEach(date => {
            // console.log(date.sessionTimestamp)
        })
    }

    const getAllSessions = async () => {
        const res = await getSessions()
        setSessions(res)
        setNumOfSessions(res.length)
        filterThisMonthSessions(res)
        const lastItemIdx = res.length - 1
        setRoutine(res[lastItemIdx])
        console.log(`sessions from DB:`,sessions)
        console.log('current routine',routine)
    }

    useEffect(() => {
        getAllSessions()
    }, [])

    const loaded = () => {
        return(
            <main>
                <h1>Workout</h1>
                <ExcerciseTable routines={routine} render={render} setRender={setRender} />
                <Stats render={render} setRender={setRender} numOfSessions={numOfSessions} sessions={sessions} />
            </main>
        )
    }

    const loading = () => {return (<h1>loading</h1>)}

    return sessions && routine ? loaded() : loading()
}