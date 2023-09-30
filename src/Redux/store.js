
import {configureStore} from '@reduxjs/toolkit'
import rootReducer from "./rootReducer";

const store=configureStore({reducer:rootReducer});
console.log('data in store is', store);
export default store;