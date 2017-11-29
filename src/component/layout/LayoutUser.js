import React, {Component} from 'react'

class LayoutUser extends Component{
    render(){
        return(
        <div className="_f5m">
            <div className="_bl">
                {this.props.children}
            </div>
        </div>
        )   
    }
}
export default LayoutUser
