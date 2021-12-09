import React,{useState,useEffect} from 'react';
const Useeffect = () => {
    const [count,setCount]=useState(0)
    const[name,setName]=useState("")
//this is consoled  for each and every render
useEffect(()=> {
  console.log("started")
})
// this is consoled only once (for first render) bcoz of empty dependencies
useEffect(() => {
    console.log("Im like componentDidMount")
}, [])
// this is cleanup function it will cleap up the searching things if u want to see that use getEventListeners(window) to see the result.
useEffect(() => {
    window.addEventListener("name",setName);
   return()=>{
       window.removeEventListener("name",setName);
   }
  }, [name]);
    return (
        <div>
            <input
            type="text"
            value={name}
            onChange={(e)=>setName(e.target.value)}/><br/>
             <h2>{count}</h2>
            <button onClick={()=>setCount(0)}>Reset</button>
            <button onClick={()=>setCount(count+1)}>Add</button>
            <button onClick={()=>setCount(count-1)}>Delete</button>
        </div>
    )
}
export default Useeffect
