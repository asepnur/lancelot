import React, {Component} from 'react'

class TextareaContent extends Component {
    render() {
        return ( this.props.disabled === 'true'
            ? <div className={this.props.classWraper}>
                    <textarea
                        type={this.props.type}
                        name={this.props.name}
                        placeholder={this.props.placeholder}
                        onChange={this.props.onChangeState}
                        value={this.props.value}/>
                </div>
            : <div className={this.props.classWraper}>
                <textarea
                    type={this.props.type}
                    name={this.props.name}
                    placeholder={this.props.placeholder}
                    onChange={this.props.onChangeState}
                    value={this.props.value}/>
            </div>)
    }
}

export default TextareaContent
