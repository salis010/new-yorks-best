import { connect } from 'react-redux'
import { Books as Component } from './books'

const mapStateToProps = state => (
    {
        books: state.books
    }
)

export const Books = connect(mapStateToProps)(Component)