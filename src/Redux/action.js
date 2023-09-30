import { ADD_TASK,REMOVE_TASK,EDIT_TASK,CLEAN_TASK_LIST,TASK_COMPLETED, INITIALIZE_DATA } from "./constant";

export const addToList=(data)=>{
    return{
        type:ADD_TASK,
        data
    }
}
export const removeTask=(data)=>{
    return{
        type:REMOVE_TASK,
        data
    }
}

export const taskCompleted=(data)=>{
   return{
    type:TASK_COMPLETED,
    data
   }
}

export const editTask=(data)=>{
    return{
        type:EDIT_TASK,
        data
    }
}

export const cleanTaskList=()=>{
    return{
        type:CLEAN_TASK_LIST
    }
}

export const initalize=()=>{
    return {
        type:INITIALIZE_DATA
    }
}