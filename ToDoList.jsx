import React from "react";
import ClearIcon from '@mui/icons-material/Clear';
import DeleteIcon from '@mui/icons-material/Delete';

const ToDoList = (props) => {
 
  return (
    <>
      <div className="todo_style">
        <button className="newbtn" onClick={()=>{
            props.onSelect(props.id);
        }}>
          <DeleteIcon/>
        </button>
        <li>{props.text}</li>
      </div>
    </>
  );
};

export default ToDoList;
