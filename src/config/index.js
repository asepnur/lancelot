//--------------------------------------------;
//                  INIT and STORE;
//--------------------------------------------;
import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {createStore} from 'redux'
import {initAction} from '../action/action'
import Reducers from '../reducer/index'
import {Loading} from '../component/index.js'

import {base_url} from '../env/Environment'

class Init extends React.Component {

    componentWillMount() {
        fetch(base_url + "/api/v1/role", {
            method: "GET",
            credentials: "include",
            crossDomain: true
        }).then(res => {
            
            if (res.ok) {
                return res.json()
            }
        }).then((data) => {
            data.data.is_logged_in
                ? this.props.onInitialize(true, data.data.modules)
                : this.props.onInitialize(false,'')
        })
        
    }

    render() {
        const {is_loading} = this.props
        return (is_loading
            ? <Loading />
            : this.props.children)
    }
}

Init.PropTypes = {
    is_loading: PropTypes.bool.isRequired,
    logged_in: PropTypes.bool.isRequired,
    onInitialize: PropTypes.func.isRequired
}

const mapStatetoProps = (state) => {
    return {
        is_loading: state.is_loading, 
        is_logged_in: state.is_logged_in
    }
}
const mapDispatchtoProps = (dispatch) => {
    return {
        onInitialize: (is_logged_in, module_access) => dispatch(initAction(is_logged_in,module_access))
    }
}
export const Initialize = connect(mapStatetoProps, mapDispatchtoProps)(Init)
export let store = createStore(Reducers)