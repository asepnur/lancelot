import React, {Component} from 'react'
import axios from 'axios'

class Newsbar extends Component {
    constructor(){
        super()
        this.state = {
            data:[]
        }
    }
    componentDidMount(){
        axios.get(`/api/v1/information`, {
            validateStatus: (status) => {
                return status === 200
            }
        }).then((res) => {
            this.setState({data: res.data.data.last})
        }).catch((err) => {
            console.log(err)
        })
    }
    render() {
        return (
            <div className="_c5m34 _c5x312 _pd3cr">
                <div className="_he3b">Last News</div>
                <Content data={this.state.data}/>
            </div>

        )
    }
}

const Content = (props)=>{
    return props.data.length===0?<div>kosong</div>
    :<table className="_se3inf">
    <tbody>
        {
            props.data.map((data, i) =>(
                <tr key={i}>
                <td><img src="/img/course.png" alt="informations"/></td>
                <td>
                    <p>{data.title}</p>
                    <p>{data.description}</p>
                    <p className="_pd3m3t">{data.date}</p>
                </td>
                <td>
                    <i className="fa fa-angle-double-right _ic __wr" aria-hidden="true"></i>
                </td>
            </tr>
            ))
        }
    </tbody>
</table>
}
export default Newsbar