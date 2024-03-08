
import React, { useState } from 'react';
import './Todo.css';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const TodoForm = () => {
  const [InputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvents = (e) => {
    setInputList(e.target.value);
  };

  const listOfItems = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    if (InputList.trim() !== "") {
      setItems((oldItems) => {
        return [...oldItems, InputList];
      });

      setInputList("");
    }
  };

  return (
    <>
      <form className='from' onSubmit={listOfItems}>
        <input placeholder='Enter new Todo...' className='input' onChange={itemEvents} value={InputList}></input>
        <DoneOutlineIcon onClick={listOfItems} />
      </form>
      <ol className="todo-list">
        {items.map((itemval, index) => (
          <li className='' key={index}>
            {itemval} <DeleteForeverIcon className='DelIcon' style={{fontSize:41, marginLeft:500}} />
          </li>
        ))}
      </ol>
    </>
  );
};

export default TodoForm;