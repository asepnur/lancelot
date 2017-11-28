import React, {Component} from 'react'
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

import {base_url} from '../../env/Environment'
import {actorRequest} from '../../action/action'

class Navbar extends Component {

   componentDidMount() {
      let path = this.props.match.path
      let id = path.replace('/', '')
      this.handleActiveMenu(id)
   }
   handlerSignOut = (dispatcherRequest) => {
      fetch(base_url+'/api/v1/user/signout', {
         method: 'POST',
         credentials: 'include',
         crossDomain: true
      }).then((res) => {
         return res.json()
      }).then((data) => {
         data.code === 200
            ? dispatcherRequest(false, 0, '')
            : dispatcherRequest(true, 401, 'Error')

      })
   }
   handleActiveMenu = (id_param) => {
      let patt = /\badmin/
      let result = id_param.match(patt)
      
      if (id_param === '') {
         id_param = 'home'
      }

      if(result !== null){
         id_param = result[0]
      }
      if(id_param !== undefined){
         //let id = document.getElementById(id_param)
         let li = document.getElementsByTagName('li')
         let length = li.length
         for (let i = 0; i < length; i++) {
            li[i].className = ''
         }

        // ReactDOM.findDOMNode(id).className = '_n3a'
      }
   }
   render() {
      const {is_logged_in} = this.props
   
      return (is_logged_in
         ? <div className="_ro">
            <div className="_mn">
               <div className="_c5x32">
                  <nav className="_cn5n">
                     <i className="fa fa-bars _i5h" aria-hidden="true"></i>
                     <ul className="_n">
                        <div className="_n51">
                           <li id="home" className="_n3a">
                              <Link to={`/`}><img className="_i3c" src="/img/icon/white/logo copy 4.png" alt="logo"/></Link>
                           </li>
                           <li id="course">
                              <Link to={'/course'}>
                              <i className="fa fa-th-large" aria-hidden="true"></i>
                              </Link>
                           </li>
                           <li id="schedule">
                              <Link to={'/schedule'}>
                              <i className="fa fa-calendar" aria-hidden="true"></i>
                              </Link>
                           </li>
                           <li id="myactivity">
                              <Link to={'/myactivity'}>
                              <i className="fa fa-tasks" aria-hidden="true"></i>
                              </Link>
                           </li>
                           <li id="grade">
                              <Link to={'/grade'}>
                              <i className="fa fa-bar-chart" aria-hidden="true"></i>
                              </Link>
                           </li>
                           <li id="admin" className="_n3a">
                              <Link  to={'/admin/users'}>
                                 <i className="fa fa-users" aria-hidden="true"></i>
                              </Link>
                           </li>
                        </div>
                        <div className="_n52">
                           <li id="information">
                              <Link to={'/information'}>
                                 <i className="fa fa-info-circle" aria-hidden="true"></i>
                              </Link>
                           </li>
                           <li id="user">
                              <Link to={'/user'}>
                              <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                              </Link>
                           </li>
                           <li
                              id="signout"
                              onClick={(e) => {
                              e.preventDefault();
                              this.handlerSignOut(this.props.dispatcherRequest)
                           }}>
                              <Link to={'#'}>
                              <i className="fa fa-sign-out" aria-hidden="true"></i>
                              </Link>
                           </li>
                        </div>
                     </ul>
                  </nav>
               </div>
               <div className="_c5x3o1 _c5x39">
                  <p className="_me5ts _pd3cr">11.59 PM | Monday, September 11, 2017</p>
               </div>
            </div>
            </div>
         : <Redirect to={'/login'}/>)
   }
}
const mapStatetoProps = (state) => {
   return {is_logged_in: state.is_logged_in, modules_access: state.modules_access}
}
const mapDispatchtoProps = (dispatch) => {
   return {
      dispatcherRequest: (is_logged_in, request_status, error_message) => dispatch(actorRequest(is_logged_in, request_status, error_message))
   }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(Navbar)
