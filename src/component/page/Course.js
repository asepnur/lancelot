import React, {Component} from 'react'
import {connect} from 'react-redux'
import ReactDOM from 'react-dom'
import {Redirect, Link} from 'react-router-dom'

import {actorRequest} from '../../action/action'
import {Navbar, Newsbar, LayoutUser} from '../index.js'

import {Pro as base_url} from '../../env/Environment'

class Course extends Component {
    constructor(){
        super()
        this.state = {
            data: [
                {
                    id: '',
                    name: '',
                    description: '',
                    class: '',
                    semester: ''    
                }
            ]
        }
    }
    componentDidMount () {
      fetch(base_url + '/api/v1/course?payload=current', {
        method: 'GET',
        credentials: 'include',
        crossDomain: true
      }).then((res) => {
        return res.json()
      }).then((data) => {
        if(data.code === 200){
            this.setState({data: data.data})
        }
      })
    }

    handleLast = () => {
        let last = document.getElementById('last')
        let current = document.getElementById('current')
        let all = document.getElementById('all')

        let dom = ReactDOM.findDOMNode
        dom(last).className = "_ta5l3a"
        dom(current).className = ""
        dom(all).className = ""

        fetch(base_url + '/api/v1/course?payload=last', {
          method: 'GET',
          credentials: 'include',
          crossDomain: true
        }).then((res) => {
          return res.json()
        }).then((data) => {
          if(data.code === 200){
              this.setState({data: data.data})
          }
        })
    }
    handleCurrent = () => {
        let last = document.getElementById('last')
        let current = document.getElementById('current')
        let all = document.getElementById('all')

        let dom = ReactDOM.findDOMNode
        dom(last).className = ""
        dom(current).className = "_ta5l3a"
        dom(all).className = ""

        fetch(base_url + '/api/v1/course?payload=current', {
          method: 'GET',
          credentials: 'include',
          crossDomain: true
        }).then((res) => {
          return res.json()
        }).then((data) => {
          if(data.code === 200){
              this.setState({data: data.data})
          }
        })
    }
    handleAll = () => {
        let last = document.getElementById('last')
        let current = document.getElementById('current')
        let all = document.getElementById('all')

        let dom = ReactDOM.findDOMNode
        dom(last).className = ""
        dom(current).className = ""
        dom(all).className = "_ta5l3a"

        fetch(base_url + '/api/v1/course?payload=all', {
          method: 'GET',
          credentials: 'include',
          crossDomain: true
        }).then((res) => {
          return res.json()
        }).then((data) => {
          if(data.code === 200){
              this.setState({data: data.data})
          }
        })
    }
    handleRedirect = () =>{
        window.location = '/admin/course'
    }
    render() {
        const {is_logged_in} = this.props
        const data = this.state.data
        return (is_logged_in
            ? <LayoutUser>
                    <Navbar match={this.props.match}/>
                    <div className="_cn">
                        <div className="_ro">
                            <div className="_pd5m3n _c5m312 _c5x38">
                                <h1 className="_he3b _ma3m3t">My Courses</h1>
                            </div>
                            <div className="_c5x34">
                                <button className="_bt5m3b" onClick={ e=> {
                                    e.preventDefault();
                                    this.handleRedirect()
                                }}>Manage <i className="fa fa-cog" aria-hidden="true"></i> </button>
                            </div>
                        </div>
                    </div>
                    <div className="_cn">
                        <div className="_ro">
                            <div className="_c5x312 _c5m312 _pd5m3n">
                                <div className="">
                                    <div className="_c5x312 _c5m312 _pd3n3lr _ta">
                                        <ul className="_ta5l">
                                            <li>
                                                <Link 
                                                    id="last" 
                                                    onClick= 
                                                    { e => {e.preventDefault(); this.handleLast()}} 
                                                    to="#">Last</Link>
                                            </li>
                                            <li>
                                                <Link
                                                    id="current"
                                                    onClick=
                                                    { e => {e.preventDefault(); this.handleCurrent()}}
                                                    className="_ta5l3a"
                                                    to="#">Current</Link>
                                            </li>
                                            <li>
                                                <Link 
                                                    id="all" 
                                                    onClick= 
                                                    { e => {e.preventDefault(); this.handleAll()}} 
                                                    to="#">All</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ListCourse data={data}/>
                        <Newsbar/>
                    </div>
                </LayoutUser>
            : <Redirect to={`/login`}/>);
    }
}

const ListCourse = (props) => {
   return (
      <div className="_ro _c5m38 _c5x312 _pd5m3n">
      <div className="_c5x312 _c5m34 _pd3n3lr">
             {props
             .data
             .map((data) => (
               <div className="_se _se3a" key={data.id}>
               <div className="_ro" >
                  <div className="_c5x312 _c5m312">
                      <div className="_c5x312 _c5m312">
                          <p className="_he3x3bk">{data.name}</p>
                      </div>
                      <div className="_c5x312 _c5m312">
                          <p className="_ct3s">{data.description}</p>
                      </div>
                      <div className="_c5x312 _c5m312 _ma3m3t">
                          <a className="_ct3mb" href="">[Read More]</a>
                      </div>
                  </div>
              </div>
              </div>
               )
             )
             }
      </div>
  </div>
   )
}
const mapStatetoProps = (state) => {
    return {is_logged_in: state.is_logged_in, request_status: state.request_status, error_message: state.error_message}
}
const mapDispatchtoProps = (dispatch) => {
    return {
        dispatcherRequest: (is_logged_in, request_status, error_message) => dispatch(actorRequest(is_logged_in, request_status, error_message))
    }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(Course)