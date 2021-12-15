import React from 'react';
import './Todo.scss';
import ListItems from './ListItems'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

class Todo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items:[],
      currentItem:{
        text:'',
        key:''
      }
    }
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text !==""){
      const items = [...this.state.items, newItem];
    this.setState({
      items: items,
      currentItem:{
        text:'',
        key:''
      }
    })
    }
  }
  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now()
      }
    })
  }
  deleteItem(key){
    const filteredItems= this.state.items.filter(item =>
      item.key!==key);
    this.setState({
      items: filteredItems
    })

  }
 
 render(){
  return (
    <div className="App">
      <header>
        <form id="to-do-form">
          <TextField id="outlined-basic" label="Outlined" variant="outlined" value= {this.state.currentItem.text} onChange={this.handleInput}/>
          <Button variant="contained" onClick={this.addItem}>Add</Button>
        </form>
        <p>{this.state.items.text}</p>
          <ListItems items={this.state.items} deleteItem={this.deleteItem} />
      </header>
    </div>
  );
 }
}


export default Todo;