import {createStore} from 'redux'

const store = createStore(reducer)
const reducer = (state,action) =>{
    switch (action.type) {
        case "value":
            return state
            break;
        default:
            return state
            break;
    }
}