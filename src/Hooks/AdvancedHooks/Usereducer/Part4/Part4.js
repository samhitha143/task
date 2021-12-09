import React, { useContext } from 'react'
import {  countState } from '../../../../App'
const Part4 = () => {
    const count=useContext(countState)
    return (
        <div>
            <h2>count:{count.addState}</h2>
             <button onClick={()=>{count.addDispatch('increment')}}>Increment</button>
            <button onClick={()=>{count.addDispatch('decrement')}}>Decrement</button>
            <button onClick={()=>{count.addDispatch('reset')}}>Reset</button>
        </div>
    )
}

export default Part4
