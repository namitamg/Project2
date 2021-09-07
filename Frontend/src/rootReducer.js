import { combineReducers } from "redux"
import { productsReducer } from "./Components/Cards/reducer"



// import {productsReducer} from './Products/reducer'




export const rootReducer = combineReducers({
    productsReducer
})