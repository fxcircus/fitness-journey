import { useState, useEffect } from "react"
import LogTime from './LogTime'
import { workoutA } from '../utilities/data/routines'

export default function ExcerciseTable (props) {
    const [ session, setSession ] = useState([])

    useEffect(() => {
        setSession(workoutA)
    }, [])

    return (
        <div>
            <table>
                <tr>
                    <th>Excercise</th>
                    <th>Reps</th>
                </tr>
                {props.routine.map((set, idx) => {
                    return (
                        <tr key={idx}>
                            <td>{set.excercise}</td>
                            <td>{set.reps}</td>
                        </tr>
                    )
                })}
            </table>
            <LogTime render={props.render} setRender={props.setRender} session={session} isSession='true' />
        </div>
    )
}