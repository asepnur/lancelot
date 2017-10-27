import React, {Component} from 'react'
import {ErrorMessage} from '../index'
//import {Switch} from 'react-router'

class LayoutUser extends Component{
    render(){
        return(
        <div className="_f5m">
            <ErrorMessage />
            <div className="_bl">
                {this.props.children}
            </div>
        </div>
        )   
    }
}
export default LayoutUser
