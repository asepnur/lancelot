import React, {Component} from 'react'

class InputContent extends Component {
    render() {
        return ( this.props.disabled === 'true'
            ? <div className={this.props.classWraper}>
                    <input 
                        type={this.props.type}
                        name={this.props.name}
                        placeholder={this.props.placeholder}
                        autoComplete={this.props.autoComplete}
                        onChange={this.props.onChangeState}
                        value={this.props.value}
                        disabled={true}/>
                </div>
            : <div className={this.props.classWraper}>
                <input
                    type={this.props.type}
                    name={this.props.name}
                    placeholder={this.props.placeholder}
                    autoComplete={this.props.autoComplete}
                    onChange={this.props.onChangeState}
                    value={this.props.value}/>
            </div>)
    }
}

export default InputContent
