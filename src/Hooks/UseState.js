import React, { useState } from 'react'

const UseState = () => {
    const [name,setName]=useState("hi samhitha?")
    return (
        <div>
            <h2>{name}</h2>
            <button onClick={()=>setName("fuck off")}>Change</button>
        </div>
    )
}

export default UseState
