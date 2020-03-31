import { connect } from 'react-redux'
import { App as Component } from './app'

const mapStateToProps = state => {
   return  (
        {
            isLoading: state.ui.isLoading,
        }
    )
}

export const App = connect(mapStateToProps)(Component)