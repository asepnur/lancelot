import React, {Component} from 'react'

class SelectContent extends Component {
    render() {
        return (this.props.disabled === 'true'
            ? <div className={this.props.classWraper}>
                    <select
                        type={this.props.type}
                        name={this.props.name}
                        placeholder={this.props.placeholder}
                        onChange={this.props.onChangeState}
                        value={this.props.value}
                        disabled/>
                </div>
            : <div className={this.props.classWraper}>
                <input
                    type={this.props.type}
                    name={this.props.name}
                    placeholder={this.props.placeholder}
                    onChange={this.props.onChangeState}
                    value={this.props.value}/>
            </div>)
    }
}

export default SelectContent
