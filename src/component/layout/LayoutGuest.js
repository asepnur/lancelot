import React, {Component} from 'react'
import {ErrorMessage} from '../index.js'
//import {Switch} from 'react-router'

class LayoutGuest extends Component{
    render(){
        return(
        <div className="_f5a _pd3n3lr _c5m312">
            <ErrorMessage />
            <div className="_bl _c5m3o3 _c5m36">
                {this.props.children}
            </div>
        </div>
        )   
    }
}
export default LayoutGuest
