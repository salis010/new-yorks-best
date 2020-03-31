/////////////////////////////////////////////////////
// NEXT
// add New York Times logo
// import movies too
// Publish to heroku


import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './stores/configure-store'
import { App } from './components/app/index'

const store = configureStore()

const mountNode = document.getElementById('mountNode')

ReactDOM.render(
    <Provider store={store} >
        <App />        
    </Provider>, 
    mountNode)
