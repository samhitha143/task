import React, { Component } from 'react'
import Header from  './Header'
export default class LifeCycle extends Component {
    constructor(props){
        super(props);
        this.state={
            show:true,
            count:0,
        }
    
    }
    delHeader=()=>{
        this.setState({show:false});
    }
    componentDidMount=()=>{
        console.log("componentDidMount");
    }
    componentDidUpdate=()=>{
        console.log("componentDidUpdate");
    }
  
    render() {
        let myheader;
        if(this.state.show){
           myheader= <Header/>
        }
        return (
            <div>
                {myheader}
                <button onClick={this.delHeader}>Delete</button>
                <h3>count :{this.state.count}</h3>
                <button onClick={()=>this.setState({count:this.state.count+1})}>Increment</button>
            </div>
        )
    }
}










// this is like componentDidUpdate,updates everything
// useEffect(() => {
//    console.log(`${name}`)
// }, [name])
// useEffect(() => {
//     console.log("name");
//  window.addEventListener("name",setName)
// // debounce(()=>{console.log(`${name}`)},1000)
// window.removeEventListener("name",setName)
// }, [name])
// const handleChange=e=>setName(e?.target?.value);
// const debounceChange=debounce(handleChange,300);
// console.log("name");