import React,{useState,useCallback,useMemo} from 'react'
import Callback from './Callback'
const Sample = () => {
    const [num1,setNum1]=useState(0);
    console.log("yep");
    const call=useCallback(
        () => {
        return <Callback></Callback>
        },[]);
    return (
       
        <div>
             <h2>Number:{num1}</h2>
            <button onClick={()=>setNum1(num1+10)}>Click</button>
            <h4>Callback</h4>
            {call}
            
        </div>
    )
}

export default Sample
