import { DATA_MOVIE } from '../actions/movieAction'

const initialState = { 
    data : []
}


export const movies = (state = initialState, action) => {
    switch (action.type) {
        case DATA_MOVIE:
            return {
                ...state,
                data : action.payload
            }
    
        default:
            return state
    }
}