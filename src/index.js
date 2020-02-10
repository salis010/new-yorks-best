/////////////////////////////////////////////////////
// NEXT
// Publish to heroku
// Add ranking arrows comparing to last week
// inlcude test for pruneData
// make an HR separator that stops short from the side edges


import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './stores/configure-store'
import * as actions  from './actions'
import { Books } from './components/books/index'
import { Menu } from './components/menu/index'

const store = configureStore()

const mountNode = document.getElementById('mountNode')

ReactDOM.render(
    <Provider store={store} >
        <Menu />
        <Books />
    </Provider>, 
    mountNode)
