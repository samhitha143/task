import React,{useState} from 'react'

const Callback = () => {
    const [num,setNum]=useState(0);
    console.log("clicked");
    return (
        <div>
            <h2>Number:{num}</h2>
            <button onClick={()=>setNum(num+1)}>Click</button>
        </div>
    )
}

export default Callback
