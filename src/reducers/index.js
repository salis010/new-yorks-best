import { combineReducers } from 'redux'
import { uiReducer }from './ui-reducer'
import { bookReducer }from './book-reducer'


export default combineReducers(    
    { 
        ui: uiReducer,
        books: bookReducer,
    }
)