import React from 'react'
import styled from '@emotion/styled'

const TrackWrapper = styled.div`
    display: flex;
    height: 5rem;
    border: 1px solid grey;
`

export const Stream = ({ tracks = [] }) => 
    <React.Fragment>
        {tracks.map(track => <TrackWrapper key={track.title}>
                {track.title}
            </TrackWrapper>)}
    </React.Fragment>
