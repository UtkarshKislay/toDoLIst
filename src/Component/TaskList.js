import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import Task from './Task';
import { initalize } from '../Redux/action';
const TaskList = () => {
      const dispatch=useDispatch();
      useEffect(()=>{
          dispatch(initalize());
      },[]);
    let list = useSelector(state => state.toDoList);

    return (
        <div className='tasklist'>
            {
                list.map((item) => {
                    return <Task key={item.id} data={item} />
                })
            }
        </div>
    )
}

export default TaskList