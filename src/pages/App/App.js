import { useState } from 'react'
import ExcerciseTable from '../../components/ExcerciseTable'
import LogTime from '../../components/LogTime'
import Stats from '../../components/Stats'
import { workoutA } from '../../utilities/data/routines'


export default function App() {
    const [ render, setRender ] = useState(false)
    return(
        <main>
            <h1>Workout</h1>
            <ExcerciseTable routine={workoutA} render={render} setRender={setRender} />
            <Stats render={render} setRender={setRender} />
        </main>
    )
}