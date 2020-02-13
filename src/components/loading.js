import React from 'react'
import styled from '@emotion/styled'

const spinnerColor = 'RGB(150, 100, 150)'

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

const Spinner = styled.div`    
        display: inline-block;
        width: 64px;
        height: 64px;
    
    &:after {
        content: " ";
        display: block;
        width: 64px;
        height: 64px;
        
        border-radius: 50%;
        border: 6px solid ${spinnerColor};
        border-color: ${spinnerColor} transparent ${spinnerColor} transparent;
        animation: spinner 1.2s linear infinite;
    }

    @keyframes spinner {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
  }  
`



export const Loading = () =>
    <Wrapper>
        <Spinner />
    </Wrapper>
