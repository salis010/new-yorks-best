import * as actionTypes from '../constants/action-types'

export const setTracks = tracks => 
(
    {
        type: actionTypes.TRACKS_SET,
        tracks
    }
)