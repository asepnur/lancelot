import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {actorRequest} from '../../action/action'
import {Navbar, Newsbar, LayoutUser} from '../index.js'

import {base_url} from '../../env/Environment'

class AssignmentDetail extends Component {
    constructor(){
        super()
        this.state = {
            data:[]
        }
    }
    componentDidMount(){
        const id = this.props.match.params.id

        fetch(base_url + '/api/v1/assignment/' + id, {
            method: 'GET',
            credentials: 'include',
            crossDomain: true
        }).then((res) => {
            return res.json()
        }).then((data) => {
            return data.code === 200
                ? this.setState({data: data.data})
                : null
        })
    }
    render() {
        const {is_logged_in} = this.props
        const data = this.state.data

        return (is_logged_in
            ? <LayoutUser>
                    {
                        console.log(this.state.data.Assignment)
                    //<Navbar match={this.props.match}/> 
                    }
                    <div className="_cn">
                        <div className="_ro">
                            <div className="_pd5m3n _c5m312 _c5x312">
                                <h1 className="_he3b">My Activity</h1>
                            </div>
                        </div>
                    </div>
                    <div className="_cn">
                        <div className="_ro">
                            <div className="_c5m38 _pd5n _pd3cl _pd5m3n">
                                <div className="_ta">
                                    <div className="_ta5c">
                                        <div className="_se _se3a">
                                            <div className="_ro _pd3l3t">
                                                <div className="_c5x312 _c5m312">
                                                    <h1 className="_he3m3bk"></h1>
                                                    <p className="_ct _pd3l3t">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                        Etiam non sagittis tortor. Mauris mattis sem vitae tellus fringilla lacinia.
                                                        Etiam suscipit leo ac ligula pretium, nec aliquet purus dapibus. Ut consectetur
                                                        libero metus, sit amet interdum justo egestas in. Suspendisse velit leo,
                                                        venenatis at elementum eu, venenatis non mi. Aliquam dignissim dignissim erat,
                                                        at tincidunt nisi commodo nec. Pellentesque nec elit interdum, accumsan ligula
                                                        nec, vehicula ex. Nam et ultricies sus, quis varius elit.</p>
                                                </div>
                                            </div>
                                            <div className="_ro _pd3l3t">
                                                <div className="_c5m312 _c5x312">
                                                    <table className="_tb">
                                                        <thead>
                                                            <tr>
                                                                <th>Status</th>
                                                                <th>Grade</th>
                                                                <th>Time</th>
                                                                <th>File</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>No Attempt</td>
                                                                <td>No Grade</td>
                                                                <td>4 Hours</td>
                                                                <td>No Attempt</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="_ro _pd3l3t">
                                                <div className="_c5x35 _c5x3o7 _c5m33 _c5m3o9">
                                                    <button className="_bt5m3b">Add submition</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Newsbar/>
                        </div>
                    </div>
                </LayoutUser>
            : <Redirect to={`/login`}/>)
    }
}
const mapStatetoProps = (state) => {
    return {is_logged_in: state.is_logged_in, request_status: state.request_status, error_message: state.error_message}
}
const mapDispatchtoProps = (dispatch) => {
    return {
        dispatcherRequest: (is_logged_in, request_status, error_message) => dispatch(actorRequest(is_logged_in, request_status, error_message))
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(AssignmentDetail)