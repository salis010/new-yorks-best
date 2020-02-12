import { connect } from 'react-redux'
import { Menu as Component } from './menu'
import { setBooks, setLoading } from '../../actions/index'


const mapDispatchToProps = dispatch => (
    {
        setBooks: data => {
            dispatch(setBooks(data)) 
            dispatch(setLoading(false))
        }
    }
)

export const Menu = connect(null, mapDispatchToProps)(Component)