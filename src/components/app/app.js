import React from 'react'
import { Menu } from '../menu/index'
import { Loading } from '../loading'
import { Books } from '../books/index'

export const App = ({ isLoading }) =>
    <React.Fragment>
        <Menu />
        {isLoading && <Loading />}
        <Books />
    </React.Fragment>