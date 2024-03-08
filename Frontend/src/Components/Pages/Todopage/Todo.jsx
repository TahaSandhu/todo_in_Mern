import React from 'react';
import './Todo.css';
import TodoForm from './TodoForm';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import EditIcon from '@mui/icons-material/Edit';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
const Todo = () => {
  return (
    <>

      <h1 className='mainDiv'>

        <PlaylistAddCheckIcon style={{ fontSize: 85 }}></PlaylistAddCheckIcon>
        Todo <span className="mainSpan">List</span>
      </h1>
      <div className='signImg'>
       <EditIcon className='icon' style={{ fontSize: 40, color:"blue", cursor:"pointer" }}></EditIcon>
        <MenuBookIcon className='icon' style={{ fontSize: 40, color:"darkorange", cursor:"pointer" }}></MenuBookIcon>
        <WorkHistoryIcon className='icon' style={{ fontSize: 40, color:"green", cursor:"pointer" }}></WorkHistoryIcon>
      </div>




      <TodoForm></TodoForm>
    </>
  );
}

export default Todo;