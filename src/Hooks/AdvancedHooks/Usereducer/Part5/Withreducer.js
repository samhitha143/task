import React,{useReducer,useEffect} from 'react'
import axios from 'axios'
const initialState={
    Loading:true,
    Post:{},
    Error:""
}
const reducer=((state,action)=>{
switch (action.type) {
    case 'AXIOS_SUCCESS':
        return{
    Loading:false,
    Post:action.payload,
    error:""
        }
        case 'AXIOS_Error':
            return{
        Loading:false,
        Post:{},
        error:"something went wrong"
            }
    default:
        return state;
}
})
const Withreducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/posts/1")
      .then(
          responce=>{
              dispatch({type:'AXIOS_SUCCESS',payload:responce.data})
          }
      )
      .catch(
          error=>{
              dispatch({type:'AXIOS_ERROR'})
          }
      )
        
    }, [])
    return (
        <div>
            {state.Loading ? "Loading" :state.Post.title }
            {state.error? state.error :null}
        </div>
    )
}

export default Withreducer
