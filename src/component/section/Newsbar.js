import React, {Component} from 'react'
import axios from 'axios'
import {LoadingAnim} from '../index.js'

class Newsbar extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            is_loaded: false
        }
    }
    componentDidMount() {
        axios.get(`http://localhost:3000/api/v1/information?pg=1&ttl=5`, {
            validateStatus: (status) => {
                return status === 200
            }
        }).then((res) => {
            this.setState({data: res.data.data, is_loaded: true})
        }).catch((err) => {
            console.log(err)
        })
    }
    render() {
        return (
            <div className="_c5m34 _c5x312 _pd3cr">
                <div className="_he3b">Last News</div>
                {!this.state.is_loaded
                    ? (
                        <table className="_se3msg3l">
                            <tbody>
                                <tr>
                                    <td>
                                        <LoadingAnim color_left="#333" color_right="#333"/>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    )
                    : <Content data={this.state.data} handleDetail={this.props.handleDetail} />
}
            </div>
        )
    }
}

const Content = (props) => {
    return props.data.length === 0
        ? <div>kosong</div>
        : <table className="_se3inf">
            <tbody>
                {props
                    .data
                    .map((data, i) => (
                        <tr key={i}>
                            <td><img src="/img/course.png" alt="informations"/></td>
                            <td>
                                <p
                                    onClick={() => {
                                    props.handleDetail(data.id)
                                }}>{data.title}</p>
                                <p>@Mobile Computing</p>
                                <p>{data.description}</p>
                                <p className="_pd3m3t">{data.date}</p>
                            </td>
                            <td>
                                <i
                                    className="fa fa-angle-double-right _ic __wr"
                                    aria-hidden="true"
                                    onClick={() => {
                                    props.handleDetail(data.id)
                                }}></i>
                            </td>
                        </tr>
                    ))
}
            </tbody>
        </table>
}
export default Newsbar