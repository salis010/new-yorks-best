import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './stores/configure-store'
import * as actions  from './actions'
import Stream from './components/stream'

const tracks = [
    { title: 'title1' },
    { title: 'title2' },
]

const store = configureStore()
store.dispatch(actions.setTracks(tracks))

const mountNode = document.getElementById('mountNode')

ReactDOM.render(
    <Provider store={store} >
        <Stream />
    </Provider>, 
    mountNode)
