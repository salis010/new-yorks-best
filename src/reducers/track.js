import * as actionTypes from '../constants/action-types'

const initialState = []

export default function (state = initialState, action) {
    switch(action.type) {
        case actionTypes.TRACKS_SET:
            return setTracks(state, action)
        default:
            return state
    }
}

function setTracks(state, action) {
    const { tracks } = action
    
    return [ ...state, ...tracks ]
}