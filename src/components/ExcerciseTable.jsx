import { useState, useEffect } from "react"
import LogTime from './LogTime'

export default function ExcerciseTable ({ routines, render, setRender }) {
    const [ session, setSession ] = useState(null)
    const temp = [{excercise: "Tricep curl", reps: "15"}]
    
    useEffect(() => {
        setSession(routines.exercises)
        // console.log(routines)
    }, [])

    return (
        <div className="ExcerciseTable">
            <table>
                <tr>
                    <th>Excercise</th>
                    <th>Reps</th>
                </tr>
                {session ? 
                session.map((set, idx) => {
                    return (
                        <tr key={idx}>
                            <td>{set.excercise}</td>
                            <td>{set.reps}</td>
                        </tr>
                    )
                })
                :
                "loading sessions"}
            </table>
            <LogTime render={render} setRender={setRender} session={session} isSession='true' />
        </div>
    )
}