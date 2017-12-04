import React, {Component} from 'react'

class InformationDetail extends Component {
    render() {
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
                            <img src="/img/course.png" alt="informations_image"/>
                            <div className="_c5x312 _pd3n3lr">
                                <h1>Lorem Ipsum Dolor Sit Amet</h1>
                                <p>11 November 2017</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                    sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default InformationDetail