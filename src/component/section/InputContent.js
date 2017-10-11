import React, {Component} from 'react'

class InputContent extends Component{
    render(){
        return(
        <div className={this.props.classWraper}>
            <input type={this.props.type} name={this.props.name} placeholder={this.props.placeholder} onChange={this.props.onChangeState}/>
        </div>  
        )   
    }
}
export default InputContent
