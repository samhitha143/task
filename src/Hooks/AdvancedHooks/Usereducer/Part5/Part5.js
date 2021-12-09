import React,{useState,useEffect} from 'react'
import axios from 'axios';
const Part5 = () => {
    const [Loading,setLoading]=useState(true);
    const [Error, setError] = useState("");
    const [Post, setPost] = useState({});
useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts/1")
    .then(
        response=>{
            setLoading(false)
            setPost(response.data)
            setError('')
        }
    )
    .catch(
        Error=>{
            setLoading(false)
            setPost({})
            setError("something went wrong")
        }
    )
})
    return (
        <div>
            {Loading ? "loading" : Post.body}
            {Error ? Error :null}
        </div>
    )
}

export default Part5
