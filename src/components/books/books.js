import React from 'react'
import { Book } from './book'

export const Books = ({ books }) =>
    
        <React.Fragment>
            {books.map((book, i) => <Book key={book.primary_isbn10} book={book} /> )}
        </React.Fragment>
