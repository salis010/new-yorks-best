import React from 'react'
import styled from '@emotion/styled'

const buttonColor = 'RGB(150, 150, 205)'
const buttonColorHover = 'RGB(125, 125, 180)'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 4rem;
    padding-bottom: 4rem;
    border-bottom: 1px solid grey
`

const H2 = styled.h2`
    font-family: 'times new roman';
    font-size: 3rem;
    margin-bottom: 1rem;
    color: RGB(50, 50, 50);
`
const Author = styled.p`
    font-size: 1.8rem;
    margin-top: 0;
    color: RGB(150, 150, 150);
`

const ImageWrapper = styled.div`
    display: flex;
`

const RankWrapper =styled.div`
    display: flex;    
    flex-direction: column;
    justify-content: center;
    width: 100%;
    padding-left: 6rem;
`

const Img = styled.img`
    max-width: 15rem;
    object-fit: cover;
`

const Rank = styled.span`
    font-size: 1.8em;
    font-weight: 800;
    padding-left: 0.5rem;
    color: RGB(150, 150, 150);
`

const MidP = styled.p`
    font-size: 1.4rem;
`
const SmallP = styled.p`
    font-size: 1.2rem;
    margin: 0;
`

const Isbn = styled.span`
    font-family: 'Courier New';
`

const Button = styled.button`
    max-width: 15rem;
    height: 3.6rem;
    margin-bottom: 2rem;
    font-size: 1.4rem;
    color: RGB(250, 250, 250);
    background-color: ${buttonColorHover};
    border: none;
    border-radius: 6px;
    outline: none;
    cursor: pointer;

    &:hover {
        background-color: ${buttonColor};
    } 
`

export const Book = ({ book }) => {
    
    return (
        <Wrapper>
            <H2>{book.title}</H2>
            <Author>{book.author}</Author>
            <ImageWrapper>
                <Img src={book.book_image} alt={book.title} />
                <RankWrapper>
                    <p>Rank: <Rank>{book.rank}</Rank></p>
                    <p>Rank last week: <Rank>{book.rank_last_week}</Rank></p>
                    <p>No. of weeks in top list: <Rank>{book.weeks_on_list}</Rank></p>
                </RankWrapper>
            </ImageWrapper>   
            <MidP>{book.description}</MidP>
            <Button onClick={() => window.open(book.book_review_link)}>Read Review</Button>
            <Button onClick={() => window.open(book.amazon_product_url)}>Purchase from Amazon</Button>
            <SmallP>Publisher: {book.publisher}</SmallP>
            <SmallP>ISBN10: <Isbn>{book.primary_isbn10}</Isbn></SmallP>
            <SmallP>ISBN13: <Isbn>{book.primary_isbn13}</Isbn></SmallP>
        </Wrapper>
    )
}