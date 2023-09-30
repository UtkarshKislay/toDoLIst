import { combineReducers } from "redux";
import { toDoList } from "./reducer";

const rootReducer=combineReducers({toDoList});

export default rootReducer;