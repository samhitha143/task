import React, { Component } from 'react'
export default class Header extends Component {
    componentWillUnmount=()=>{
        console.log("componentWillUnmount");
    }
  
    render() {        
        return (
            <div>
               <h2>New to Class Components</h2> 
            </div>
        )
    }
}
