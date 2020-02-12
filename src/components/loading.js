import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

export const Loading = () =>
    <Wrapper>
        <p>Loading...</p>
    </Wrapper>
