import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addToList } from '../Redux/action';
import { useSelector } from 'react-redux';
import { editTask } from '../Redux/action';
import {v4 as uuidv4} from 'uuid';
const Input = ({list,editingTask,setEdit}) => {
    const dispatch=useDispatch();
    const [toDo,setToDo]=useState();
    const handleFormSubmit=(e)=>{
        e.preventDefault();
        if(editingTask){
          const task={
            id:list.id,
            toDo:(toDo)?toDo:list.toDo,
            isCompleted:false
          }
          dispatch(editTask(task));
          setEdit(0);
        }else{
            const task={
                id:uuidv4(),
                toDo:toDo,
                isCompleted:false
            }
            dispatch(addToList(task));
        }
    }
    
  return (
    <div>
        <form onSubmit={handleFormSubmit}>
            <input id='inputValue' onChange={(e)=>setToDo(e.target.value)} />
            <button type='submit'>{editingTask?'EDIT TASK':'ADD TASK'}</button>
        </form>
    </div>
  )
}

export default Input