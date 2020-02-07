import { connect } from 'react-redux'
import { Menu as Component } from './menu'
import { setBooks } from '../../actions/index'


const mapDispatchToProps = dispatch => (
    {
        setBooks: data => dispatch(setBooks(data))
    }
)

export const Menu = connect(null, mapDispatchToProps)(Component)