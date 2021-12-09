import React, { useReducer } from 'react'
const initialState=0
const reducer=(state,action)=>{
    switch (action.type) {
        case 'increment':
            return state+1
         case 'decrement':
             return state-1            
         case 'reset':
             return initialState
        default:
          return state;
    }
}
const Usereducer = () => {
    const[count,addCount]= useReducer(reducer, initialState)
    return (
        <div>
            <h2>count-{count}</h2>
            <button onClick={()=>{addCount('increment')}}>Increment</button>
            <button onClick={()=>{addCount('decrement')}}>Decrement</button>
            <button onClick={()=>{addCount('reset')}}>Reset</button>
        </div>
    )
}

export default Usereducer
