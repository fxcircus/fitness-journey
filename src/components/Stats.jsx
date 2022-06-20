import { useState, useEffect } from 'react'
import { getSessions } from '../utilities/api/session-api'

export default function Stats (props) {
    const [numOfSessions, setNumOfSessions] = useState(0)
    const [sessions, setSessions] = useState([])

    const getAllSessions = async () => {
        const res = await getSessions()
        setSessions(res)
        setNumOfSessions(res.length)
        // console.log(res)
    }

    useEffect(() => {
        getAllSessions()
    })

    return (
        <div>{numOfSessions}</div>
    )
}