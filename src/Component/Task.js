import React, { useState } from 'react'
import {TiTickOutline} from 'react-icons/ti';
import {TiEdit} from 'react-icons/ti';
import {AiTwotoneDelete} from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import './Task.css';
import { editTask, removeTask ,taskCompleted} from '../Redux/action';
import EditTask from './EditTask';
import Input from './Input';
const Task = ({data}) => {
    console.log(data);
    const [edit,setEdit]=useState(0);
    const dispatch=useDispatch();
  return (
    <div className='task'>
       <div className='taskName' style={data.isCompleted?{backgroundColor:'green'}:{}}>
         {data.toDo}
       </div>
       <div className='taskfunction'>
        <div className='edit' onClick={()=>{
           setEdit(1);
        }}>
            <TiEdit/>
            {(edit===1)?<Input list={data} editingTask setEdit={setEdit}/>:null}
        </div>
        <div className='complete' onClick={()=>{
          dispatch(taskCompleted(data))
        }}>
            <TiTickOutline/>
        </div>
        <div className='delete' onClick={()=>{
          dispatch(removeTask(data));
        }}>
            <AiTwotoneDelete/>
        </div>
       </div>
    </div>
  )
}

export default Task