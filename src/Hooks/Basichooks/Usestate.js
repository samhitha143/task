import React,{useState} from 'react'

const Usestate = () => {
    const [count,setCount]=useState(0)
    console.log(count);
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={()=>setCount(0)}>Reset</button>
            <button onClick={()=>setCount(count+1)} >Add</button>
            <button onClick={()=>setCount(count-1)}>Delete</button>
        </div>
    )
}

export default Usestate
