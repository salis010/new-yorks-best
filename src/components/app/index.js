import { connect } from 'react-redux'
import { App as Component } from './app'

const mapStateToProps = state => {
    console.log('index:', state)
   return  (
        {
            isLoading: state.ui.isLoading,
        }
    )
}

export const App = connect(mapStateToProps)(Component)