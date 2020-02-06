import { connect } from 'react-redux'
import { Books as Component } from './books'

const mapStateToProps = state => {
    console.log('Books Index:', state.books)
    return (
        {
            books: state.books
        }
    )
}

export const Books = connect(mapStateToProps)(Component)