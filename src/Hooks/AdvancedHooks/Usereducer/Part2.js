import React, { useReducer } from 'react'
const initialState={
  firstCounter:0,
  secondCounter:10
}
const reducer=(state,action)=>{
    switch (action.type) {
        case 'increment':
            return {...state,firstCounter:state.firstCounter+1}
         case 'decrement':
             return {...state,firstCounter:state.firstCounter-1}
             case 'incrementAD':
                return {...state,secondCounter:state.secondCounter+10}
             case 'decrementAD':
                 return {...state,secondCounter:state.secondCounter-10}
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
            <h2>count-{count.firstCounter}</h2>
            <h2>count-{count.secondCounter}</h2>
            <button onClick={()=>{addCount({type:'increment'})}}>Increment</button>
            <button onClick={()=>{addCount({type:'decrement'})}}>Decrement</button>
            <button onClick={()=>{addCount({type:'incrementAD'})}}>IncrementAD</button>
            <button onClick={()=>{addCount({type:'decrementAD'})}}>DecrementAD</button>
            <button onClick={()=>{addCount({type:'reset'})}}>Reset</button>
        </div>
    )
}

export default Usereducer
