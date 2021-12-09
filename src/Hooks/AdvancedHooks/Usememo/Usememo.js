// usememo is used to return the memorized value
//if u want to use same effect and different values for an input or anyother places u can use usememo.

import React,{useMemo,useState} from 'react';
function name(a,b) {
   for( var i=0;i<1000000;i++){}
    return parseInt(a)+parseInt(b);
}
function Usememo() {
const [a,setA]=useState(0);
const [b,setB]=useState(0);
const [text,setText]=useState();
const words=text;
const sum=useMemo(() => {
return name(a,b);
}, [a,b])

    return (
        <div>
            <input 
            type="number"
            value={a}
           onChange={(e)=>setA(e.target.value)}/>
            <input
            type="number" 
            value= {b}
            onChange={(e)=>setB(e.target.value)}/>
            <h2>sum</h2><br/>
            {sum}<br/><br/>
            <input type="text"
            value={text}
            onChange={(e)=>setText(e.target.value)}/><br/>
            {words}
        </div>
    )
}

export default Usememo
