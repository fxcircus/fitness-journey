import { useState } from 'react'
import ExcerciseTable from '../../components/ExcerciseTable'
import LogTime from '../../components/LogTime'
import { workoutA } from '../../utilities/data/routines'


export default function App() {

    return(
        <main>
            <h1>Workout</h1>
            <ExcerciseTable routine={workoutA} />
            <LogTime />
        </main>
    )
}