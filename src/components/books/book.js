import React from 'react'
import styled from '@emotion/styled'

const buttonColor = 'RGB(150, 150, 205)'
const buttonColorHover = 'RGB(125, 125, 180)'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid grey;

    @media only screen and (min-width: 600px) {
        padding-left: 4rem;
        padding-bottom: 4rem;
    }
`

const H2 = styled.h2`
    font-family: 'times new roman';
    font-size: 2rem;
    margin-bottom: 1rem;
    color: RGB(50, 50, 50);

    @media only screen and (min-width: 600px) {
        font-size: 3rem;
    }
`
const Author = styled.p`
    font-size: 1.8rem;
    margin-top: 0;
    color: RGB(150, 150, 150);
`

const ImageAndRankWrapper = styled.div`
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: 600px) {
        flex-direction: row;
    }
`

const ImageWrapper = styled.div`
    display: flex;
`

const RankWrapper =styled.div`
    display: flex;    
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin-top: 1rem;

    @media only screen and (min-width: 600px) {
        margin-top: 0;
        padding-left: 6rem;
    }
`

const Img = styled.img`
    width: 100%;
    object-fit: cover;

    @media only screen and (min-width: 600px) {
        min-width: 20rem;
    }
`

const RankP = styled.p`
    margin: 0;

    @media only screen and (min-width: 600px) {
        margin: 1rem 0;
    }
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
    min-width: 90%;
    height: 3.6rem;
    margin: auto;
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


    @media only screen and (min-width: 600px) {
        width: 20rem;
        min-width: 20rem;
        margin: 0 0 2rem 0;
    }
`

export const Book = ({ book }) => {
    
    return (
        <Wrapper>
            <H2>{book.title}</H2>
            <Author>{book.author}</Author>
            <ImageAndRankWrapper>
                <ImageWrapper>
                    <Img src={book.book_image} alt={book.title} />
                </ImageWrapper>
                <RankWrapper>
                    <RankP>Rank: <Rank>{book.rank}</Rank></RankP>
                    <RankP>Rank last week: <Rank>{book.rank_last_week}</Rank></RankP>
                    <RankP>No. of weeks in top list: <Rank>{book.weeks_on_list}</Rank></RankP>
                </RankWrapper>
            </ImageAndRankWrapper>   
            <MidP>{book.description}</MidP>
            {book.book_review_link && <Button onClick={() => window.open(book.book_review_link)}>Read Review</Button>}
            {book.amazon_product_url && <Button onClick={() => window.open(book.amazon_product_url)}>Purchase from Amazon</Button>}
            <SmallP>Publisher: {book.publisher}</SmallP>
            <SmallP>ISBN10: <Isbn>{book.primary_isbn10}</Isbn></SmallP>
            <SmallP>ISBN13: <Isbn>{book.primary_isbn13}</Isbn></SmallP>
        </Wrapper>
    )
}