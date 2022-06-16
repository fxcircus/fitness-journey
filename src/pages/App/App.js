import { useState } from 'react'
import ExcerciseTable from '../../components/ExcerciseTable'
import { workoutA } from '../../utilities/routines'

export default function App() {

    return(
        <main>
            <h1>Workout</h1>
            <ExcerciseTable routine={workoutA} />
        </main>
    )
}