import * as actionTypes from '../constants/action-types'

const initialState = [
        { title: 'aaaaa' },
        { title: 'bbbbb' },
    ]


export default function (state = initialState, action) {
    console.log('Reducer:', state)
    switch(action.type) {
        case actionTypes.BOOKS_SET:
            return setBooks(state, action)
        default:
            return state
    }
}

function setBooks(state, action) {
    const { books } = action
    
    return Object.assign({}, state, action)
}