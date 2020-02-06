import React from 'react'

export const Books = ({ books }) => { 
   
    return (
        <>
            <ul>
                {books.map((book, i) => <li key={i}>{book.title}</li> )}
            </ul>
        </>
    )
}