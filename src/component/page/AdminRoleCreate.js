/* ------------------------------------------------------------------------------
                                          Admin Users
---------------------------------------------------------------------------------*/
import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'

import {actorRequest, loadingRequest} from '../../action/action'
import {Navbar, LayoutUser, AdminNavRole} from '../index.js'

class AdminRoleCreate extends Component {
    constructor() {
        super()
        this.state = {
            name:'',
            modules: [],
            abilities: [],
            id_dropdown: [],
            dropdown: false,
            roles: [],
            active_close: false,
        }
    }
    componentDidMount() {
        this.handleGetListAbilities()
        this.handleGetListModules()
    }
    handleGetListModules = () => {
        axios.get(`/api/admin/v1/list/role`, {
            validateStatus: (status) => {
                return status === 200
            }
        }).then((res) => {
            if (res.data.code === 200) {
                this.setState({modules: res.data.data})
            }
            this.setState({is_loaded: true})
        }).catch((err) => {
            console.log(err)
        })
    }
    handleGetListAbilities = () => {
        axios.get(`/api/admin/v1/list/abilities`, {
            validateStatus: (status) => {
                return status === 200
            }
        }).then((res) => {
            if (res.data.code === 200) {
                this.setState({abilities: res.data.data})
            }
            this.setState({is_loaded: true})
        }).catch((err) => {
            console.log(err)
        })
    }
    handleCreateRole = (e)=>{
        e.preventDefault()
        const {dispatcherRequest, dispatcherLoading} = this.props
        dispatcherLoading(10, false)
        if (this.state.name === ""){
            dispatcherLoading(10, true)
            dispatcherRequest(true, 401, ' Names can not be empty')
            return
        }
        if (this.state.roles.length === 0) {
            dispatcherLoading(10, true)
            dispatcherRequest(true, 401, ' Modules can not be empty')
            return
        }
        let x = {}
        this.state.roles.forEach((module)=>{
            x[module.name] = module.abilities
        })
        let formData = new FormData()
        formData.append('name', this.state.name)
        formData.append('modules', JSON.stringify(x))

        axios.post(`/api/admin/v1/role`, formData, {
            validateStatus: (status) => {
                return status < 500
            }
        }).then((res) => {
            if (res.data.code === 200) {
                dispatcherLoading(100, false)
                dispatcherRequest(true, 200, res.data.message)
            } else {
                dispatcherLoading(10, true)
                dispatcherRequest(true, 401, res.data.error[0])
            }
        }).catch((err) => {
            dispatcherLoading(10, true)
            dispatcherRequest(true, 401, 'Error connection')
        })
    }
    handleChange = (e) => {
        this.setState({
              [e.target.name]: e.target.value
        })
  }
    addModules = () => {
        let x = this.state.roles
        x.push({name: "",dropdown:false, abilities: []})
        this.setState({roles: x})
    }
    deleteModule = (index) =>{
        let x = this.state.roles
        x.splice(index, 1)
        this.setState({roles: x})
    }
    onChangeModule = (value, i)=>{
        let x = this.state.roles
        x[i].name = value
        this.setState({
            roles: x,
        })
    }
    onDropdown = (index)=>{
        let x = this.state.roles
        x[index].dropdown = true
        this.setState({
            roles: x, active_close: true
        })
    }
    offDropdown = ()=>{
        let x = this.state.roles
        x.forEach((data)=>{
            data.dropdown = false
        }, this.setState({
            roles: x,
            active_close: false,
        }))
    }
    handleCheck = (value, i)=>{
        let x = this.state.roles
        if (x[i].abilities.length === 0 ) {
            x[i].abilities.push(value)
            this.setState({roles: x})
        } else {
            let candidate = x[i].abilities.filter(data => {
                    return data === value
                })
            if (candidate.length > 0) {
                let index = x[i].abilities.indexOf(value)
                x[i].abilities.splice(index, 1)
                this.setState({roles: x})
            } else {
                x[i].abilities.push(value)
                this.setState({roles: x})
            }
        }
    }
    /* -----------------------------------------------------------------------------
                                      Render Element
     -----------------------------------------------------------------------------*/
    render() {
        const {is_logged_in} = this.props
        return (is_logged_in
            ? <LayoutUser>
                    <Navbar match={this.props.match} active_navbar={"admin"}/>
                    <div
                        className="__x"
                        style={{
                        zIndex: "9",
                        display: this.state.active_close
                            ? "block"
                            : "none"
                    }}
                        onClick={this.offDropdown}></div>
                    <div className="_ro _ma3mn">
                        <div className="_cn">
                            <div className="_ro _c5m312 _c5x312 _pd5m3n">
                                <div className="_c5x312 _c5m312 _he3b _pd3l3b _pd3n3lr">Mobile Computing</div>
                                <div className="_c5x312 _c5m312 _pd3n3lr  _pd3l3b">
                                    <div className="_pd3n3lr _ta">
                                        <ul className="_ta5p">
                                            <li>
                                                <a href="">Home</a>
                                            </li>
                                            <li className="_active">
                                                <a href="">Users List</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <AdminNavRole active_menu={`btn_add`}/>
                                <div className="_c5x312 _c5m310  _pd3l3lr">
                                    <div className="_ca">
                                        <div className="_ca3h">
                                            <div className="_c5m310 _c5x310">Create Roles</div>
                                        </div>
                                        <div className="_c5m312 _c5x312">
                                            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Role Name*"/>
                                        </div>
                                        <div className="_c5m33 _c5x35">
                                            <button className="_bt5m3g" onClick={this.addModules}>
                                                <i className="fa fa-plus-circle" aria-hidden="true"></i>
                                                Add module</button>
                                        </div>
                                        <div className="_c5m312 _c5x312 ">
                                            <div className="_ro _c5m36 _c5x35 _pd3n3lr">
                                                <p className="_he3x3bk">Modul Name</p>
                                            </div>
                                            <div className="_ro _c5m35 _c5x35">
                                                <p className="_he3x3bk">Abilities</p>
                                            </div>
                                            <div className="_ro _c5m31 _c5x32">
                                                <p
                                                    className="_he3x3bk"
                                                    style={{
                                                    textAlign: "center"
                                                }}>Action</p>
                                            </div>
                                        </div>
                                        <div className="_c5m312 _c5x312 _pd3n3lr">
                                            <form onSubmit={this.handleCreateRole}>
                                            {
                                                //map nihhhhhhhh
                                            }
                                                {this.state.roles.length !== 0
                                                    ? this
                                                        .state
                                                        .roles
                                                        .map((role, index) => (
                                                                <div className="_ro" key={index}>
                                                                    <div className="_c5m36 _c5x35">
                                                                        <select onChange={(e)=>{
                                                                            this.onChangeModule(e.target.value, index)
                                                                        }} value={role.name}>
                                                                            {this.state.modules.length !== 0
                                                                                ? this
                                                                                    .state
                                                                                    .modules
                                                                                    .map((module, i) => (
                                                                                        <option key={i} value={module}>{module}</option>
                                                                                    ))
                                                                                : null
}
                                                                        <option value="">select module</option>
                                                                        </select>
                                                                    </div>

                                                                    <div
                                                                        className="_c5m35 _c5x35"
                                                                        >
                                                                        <div className="_dr">
                                                                            <ul className="_cbx" onClick={()=>{
                                                                                this.onDropdown(index)
                                                                            }}>
                                                                                <li>Abilities
                                                                                    <i className="fa fa-caret-down" aria-hidden="true"></i>
                                                                                </li>
                                                                            </ul>
                                                                            <ul
                                                                                className="_cbx3c"
                                                                                style={{
                                                                                maxHeight: "153px",
                                                                                display: role.dropdown
                                                                                    ? "block"
                                                                                    : "none"
                                                                            }}>
                                                                                {this.state.abilities.length !== 0
                                                                                    ? this
                                                                                        .state
                                                                                        .abilities
                                                                                        .map((data, i) => (
                                                                                            <li key={i}>
                                                                                                <input onChange={
                                                                                                    (e)=>{
                                                                                                        this.handleCheck(e.target.value, index)
                                                                                                    }
                                                                                                } value={data} type="checkbox"/> {data}
                                                                                            </li>
                                                                                        ))
                                                                                    : null
}
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                    <div className="_ro _c5m31 _c5x32 _pd3n3b">
                                                                        <button
                                                                            style={{
                                                                            marginTop: "16px"
                                                                        }}
                                                                        onClick={
                                                                            ()=>{
                                                                                this.deleteModule(index)
                                                                            }
                                                                        }
                                                                            className="_bt5m3r"
                                                                            type="button">
                                                                            <i className="fa fa-trash" aria-hidden="true"></i>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                        ))
                                                    : null
} 
                                                    <div className="_ro">
                                                        <div className="_c5m3o8 _c5x3o6 _c5x33 _c5m32 _pd3r">
                                                            <button type="button" className="_bt5m">Back</button>
                                                        </div>
                                                        <div className="_c5x33 _c5m32 _pd3l">
                                                            <button type="submit" className="_bt5m3b">Save</button>
                                                        </div>
                                                    </div>  
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </LayoutUser>
            : <Redirect to={'/login'}/>)
    }
}
/* ---------------------------------------------------------------------------
                                    Users Menu;
-----------------------------------------------------------------------------*/

/* -----------------------------------------------------------------------------
                            state and dispatch to props
------------------------------------------------------------------------------*/
const mapStatetoProps = (state) => {
    return {is_logged_in: state.is_logged_in, request_status: state.request_status, error_message: state.error_message}
}
const mapDispatchtoProps = (dispatch) => {
    return {
        dispatcherRequest: (is_logged_in, request_status, error_message) => dispatch(actorRequest(is_logged_in, request_status, error_message)),
        dispatcherLoading: (loading_progress, is_loading_error) => dispatch(loadingRequest(loading_progress, is_loading_error))
    }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(AdminRoleCreate)