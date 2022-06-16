import { useState } from 'react'
import ExcerciseTable from '../../components/ExcerciseTable'
import { workoutA } from '../../utilities/routines'

export default function App() {

    return(
        <ExcerciseTable routine={workoutA} />
    )
}