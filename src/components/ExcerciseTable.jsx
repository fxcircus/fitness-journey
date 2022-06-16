import { useState } from "react"

export default function ExcerciseTable (props) {
    return (
        <table>
            {props.routine.map((set, idx) => {
                return (
                    <tr>
                        <td>{set.excercise}</td>
                        <td>{set.reps}</td>
                    </tr>
                )
            })}
        </table>
    )
}