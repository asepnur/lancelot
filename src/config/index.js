//--------------------------------------------;
//                  INIT and STORE;
//--------------------------------------------;
import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {createStore} from 'redux'
import axios from 'axios'

import {initAction, updateTime} from '../action/action'
import Reducers from '../reducer/index'
import {Loading} from '../component/index.js'

class Init extends React.Component {
    constructor() {
        super()
        this.state = {
            time_now: 0
        }
    }

    componentWillMount() {
        fetch("/api/v1/role", {
            method: "GET",
            credentials: "include",
            crossDomain: true
        }).then(res => {
            
            if (res.ok) {
                return res.json()
            }
        }).then((data) => {
            console.log(data)
            data.data.is_logged_in
                ? this.props.onInitialize(true, data.data.modules)
                : this.props.onInitialize(false,'')
        })
        this.handleTimeLoad()
        
    }
    
    handleTimeLoad = () => {
        const {dispatcherTime} = this.props
        axios.get(`/api/v1/util/time`, {
            validateStatus: (status) => {
                return status === 200
            }
        }).then((res) => {
            let time_now = res.data.data * 1000
            dispatcherTime(time_now)
        }).catch((err) => {
            console.log(err)
        })
    }

    handleTimeChange = setInterval(() => {
        const {dispatcherTime, time_now} = this.props
        dispatcherTime(time_now + 1000)
    }, 1000)

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
        is_logged_in: state.is_logged_in,
        time_now: state.time_now
    }
}
const mapDispatchtoProps = (dispatch) => {
    return {
        onInitialize: (is_logged_in, module_access) => dispatch(initAction(is_logged_in,module_access)),
        dispatcherTime: (time_now) => dispatch(updateTime(time_now))
    }
}
export const Initialize = connect(mapStatetoProps, mapDispatchtoProps)(Init)
export let store = createStore(Reducers)