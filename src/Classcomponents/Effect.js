import React,{useEffect,useState} from 'react'
const Effect = () => {
  
 const[display,setDisplay]=useState(true)
 const[count,setCount]=useState(0);
 console.log(`updated`)
 useEffect(() => {
   console.log("inserted"); 
 }, [])

    return (
        <div>
            {display && <h3>New Function Component</h3>}
            <button onClick={()=>setDisplay(!display)}>Delete</button>
            <h2>count:{count}</h2>
            <button onClick={()=>setCount(count+1)}>Increment</button>
        </div>
    )
}


export default Effect
