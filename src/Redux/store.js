import { createStore, combineReducers } from "redux";
import { movies } from './reducers/movieReducer'

const rootReducer = combineReducers({
    movies
})


export default createStore(rootReducer)