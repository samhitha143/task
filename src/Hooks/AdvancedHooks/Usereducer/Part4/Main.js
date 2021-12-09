import React,{useReducer} from 'react'
import Part4 from './Hooks/AdvancedHooks/Usereducer/Part4/Part4'

export const countState=React.createContext()
const initialState=0
const reducer=(state,action)=>{
    switch (action) {
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
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
<countState.Provider value={{addState:state, addDispatch:dispatch}}>
<Part4/>
</countState.Provider>
    </div>
  )
}

export default App
