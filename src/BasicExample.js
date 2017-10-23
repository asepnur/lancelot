import {createStore} from 'redux'
import React from 'react'
import PropTypes from 'prop-types'
import {Provider, connect} from 'react-redux'


const increaseAction = {
    type: 'INCREASE'
}
const decreaseAction = {
    type: 'DECREASE'
}
const resetAction = {
    type: 'RESET'
}
const changeAction = {
    type: 'CHANGE',
    
}

const counter = (state = {
    count: 0,
    header: '',
}, action) => {
    const count = state.count
    const header = state.header
    switch (action.type) {
        case 'INCREASE':
            return {
                count: count + 1
            }
        case 'DECREASE':
            return {
                count: count - 1
            }
        case 'RESET':
            return {count: 0}
        case 'CHANGE':
            return {header: header + 'A'}
        default:
            return state
    }
}

let store = createStore(counter)
class Counter extends React.Component {
    render() {
        const {header, value, onIncreaseClick, onDecreaseClick, onResetClick} = this.props
        return (
            <div>
                <h1>{header}</h1>
                <input />
                <br />
                <br />
                <button onClick={onIncreaseClick}>INCREASE</button>
                <button onClick={onDecreaseClick}>DECREASE</button>
                <button onClick={onResetClick}>RESET</button>
                <h1>{value}</h1>
            </div>
        )
    }
}

Counter.PropTypes = {
    value: PropTypes.number.isRequired,
    onIncreaseClick: PropTypes.func.isRequired,
    onDecreaseClick: PropTypes.func.isRequired
}
const mapStatetoProps = (state) => {
    return {value: state.count}
}
const mapDispatchtoProps = (dispatch) => {
    return {
        onIncreaseClick: () => dispatch(increaseAction),
        onDecreaseClick: () => dispatch(decreaseAction),
        onResetClick: () => dispatch(resetAction)
    }
}
const App = connect(mapStatetoProps, mapDispatchtoProps)(Counter)

class BasicExample extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <App/>
            </Provider>
        )
    }
}
export default BasicExample