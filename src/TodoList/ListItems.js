import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import FlipMove from 'react-flip-move';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

function ListItems(props){
    const items = props.items;
    const listItems = items.map(item =>
   {
       return <div className="list" key={item.key}>
     <p>
         <TextField  
         variant="outlined"
          id={item.key}
          value={item.text}
          InputProps={{ endAdornment:<InputAdornment position="end">
          <CloseIcon className="faicons" onClick={() => {
              props.deleteItem(item.key)
          }} icon="trash" />
          </InputAdornment>}}
         />
     </p>
     
    </div>})
    return <div>
        <FlipMove duration={300} easing="ease-in-out">
        {listItems}
        </FlipMove>
    
    </div>;
  }

  export default ListItems;