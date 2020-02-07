import * as actionTypes from '../constants/action-types'

export const setBooks = books =>  (
    {
        type: actionTypes.BOOKS_SET,
        payload: books,
    }
)
