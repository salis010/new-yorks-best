/////////////////////////////////////////////////////
// NEXT
// In Menu, the fetch needs to dispatch to Store. Create an index.js and do it




import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './stores/configure-store'
import * as actions  from './actions'
import { Books } from './components/books/index'
import { Menu } from './components/menu'

const store = configureStore()
console.log('Index:', store)

const mountNode = document.getElementById('mountNode')

ReactDOM.render(
    <Provider store={store} >
        <Menu />
        <Books />
    </Provider>, 
    mountNode)
