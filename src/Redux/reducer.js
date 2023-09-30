import { ADD_TASK,REMOVE_TASK,CLEAN_TASK_LIST,EDIT_TASK ,TASK_COMPLETED, INITIALIZE_DATA} from "./constant"
import { getTaskListFromLocalStorage,saveTaskListToLocalStorage } from "../Utility/LocalStorageUtils";
const initialState=getTaskListFromLocalStorage();
console.log('initalState', initialState);
export const toDoList=(data=[],action)=>{
  let newData;
  switch(action.type){
    case INITIALIZE_DATA:
        newData=initialState;
        return newData;
    case ADD_TASK:
        newData=[...data,action.data];
        saveTaskListToLocalStorage(newData);
        return newData;
    case REMOVE_TASK:
         newData=data.filter((item)=>{
            return item.id!==action.data.id;
        });
        saveTaskListToLocalStorage(newData);
        return newData;
    case EDIT_TASK:
         newData=data.map((item)=>{
             if(item.id===action.data.id){
                return {...item,toDo:action.data.toDo,isCompleted:false}
             }
             return item;
        });
        saveTaskListToLocalStorage(newData);
        return newData;
    case TASK_COMPLETED:
        newData=data.map((item)=>{
            if(item.id===action.data.id){
                return { ...item, isCompleted: !item.isCompleted };
            }
            return item;
       });
       saveTaskListToLocalStorage(newData);
       return newData;
    default:
        return [];
  }
}