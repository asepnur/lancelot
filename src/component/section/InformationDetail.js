import React, {Component} from 'react'

class InformationDetail extends Component {
    render() {
        const {data} = this.props
        return (
            <div
                className="_md"
                style={this.props.modal_detail
                ? {
                    display: "block"
                }
                : {
                    display: "none"
                }}>
                <i
                    className="fa fa-window-close"
                    aria-hidden="true"
                    onClick={this.props.handleClose}></i>
                <div className="__x" onClick={this.props.handleClose}></div>
                <div className="_ro">
                    <div className="_c5x312 _c5m36 _c5m3o3">
                        <div className="_cn _md5inf">
                            <img src={data.image} alt="informations_image"/>
                            <div className="_c5x312 _pd3n3lr">
                                <h1>{data.title}</h1>
                                <p>{data.date}</p>
                                <p>{data.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default InformationDetail