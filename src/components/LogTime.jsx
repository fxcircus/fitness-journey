import { useState } from "react"

export default function LogTime (props) {
    
    const sendData = () => {
        console.log(Date.now())
    }

    return(
        <button onClick={(e) => {sendData(e)}}>
            Log time
        </button>
    )
}