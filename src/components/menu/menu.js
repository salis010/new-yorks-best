import React from 'react'
import styled from '@emotion/styled'
import { pruneData } from '../../utils/prune-data'

const Nav = styled.nav`
    display: flex;
    align-items: center;
    height: 5rem;
    background-color: RGB(100, 100, 150);
`

const MenuItem = styled.div`
    display: flex;
    justify-content: center;    
    align-items: center;
    width: 10rem;
    height: 100%;
    font-size: 1.4rem;
    font-weight: 800;
    color: white;   
    background-color: RGB(150, 100, 150);
    cursor: pointer;

    &:hover {
        background-color: RGB(160, 110, 160);
    }
`

export const Menu = ({ setBooks }) => {
    
    const getData = () => {
        const url = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=93RP8JSIdmcLgOM3A2xhU1ntMgkOMlLX'
        
        fetch(url)
        .then(res => res.json())
        .then(data => data.results.books)
        .then(data => pruneData(data))
        .then(data => setBooks(data))  
        //.then(data => console.log(data))  
    }
    
    return (
        <Nav>
            <MenuItem onClick={getData}>Books</MenuItem>
        </Nav>
    )
}