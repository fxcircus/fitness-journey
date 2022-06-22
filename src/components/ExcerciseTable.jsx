import { useState, useEffect } from "react"
import LogTime from './LogTime'

export default function ExcerciseTable ({ routine, render, setRender }) {
    const [ session, setSession ] = useState(null)
    const temp = [{excercise: "Tricep curl", reps: "15"}]
    
    useEffect(() => {
        setSession(routine.exercises)
    }, [])

    const loaded = () => {
        return (
            <div>
                <table>
                    <tr>
                        <th>Excercise</th>
                        <th>Reps</th>
                    </tr>
                    {session.map((set, idx) => {
                        return (
                            <tr key={idx}>
                                <td>{set.excercise}</td>
                                <td>{set.reps}</td>
                            </tr>
                        )
                    })}
                </table>
                <LogTime render={render} setRender={setRender} session={session} isSession='true' />
            </div>
        )
    }

    const loading = () => {return (<h1>loading</h1>)}

    return session ? loaded() : loading()
}