import React from 'react'
import styled from '@emotion/styled'
import { Book } from './book'

const Wrapper = styled.div`
    margin:auto;
    max-width: 70rem;
`

export const Books = ({ books }) =>
    <Wrapper>
        {books.map((book, i) => <Book key={book.primary_isbn10} book={book} /> )}
    </Wrapper>
