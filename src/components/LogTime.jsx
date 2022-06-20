import { useState, useEffect } from 'react'
import { createSession } from '../utilities/api/session-api'

export default function LogTime (props) {
    
    const sendData = async () => {
        const timestamp = Date.now()
        console.log(timestamp)
        const payload = { "sessionTimestamp": timestamp}
        const res = await createSession(payload)
        props.setRender(!props.render)
    }

    useEffect(() => {
        
    },[props.render])

    return(
        <button onClick={(e) => {sendData(e)}}>
            Log time
        </button>
    )
}