import * as actionTypes from '../constants/action-types'

export const setLoading = isLoading =>  (
    {
        type: actionTypes.LOADING_STOPPED,
        payload: isLoading,
    }
)