import { useState } from "react"

export default function ExcerciseTable (props) {
    return (
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
    )
}