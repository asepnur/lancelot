import React from "react";

import {Animation} from './component/index.js'
import Credentials from './Credentials'
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            is_loading : true
        }
    }
    componentWillMount(){
        fetch("https://meikoapp.herokuapp.com/api/v1/role", {
            method: "GET",
            credentials: "include",
            crossDomain: true
        }).then(res => {
            return res.json();
        }).then(data => {
            
            if(data.data.is_logged_in === true){
                Credentials.is_logged_in = true
            } else{
                Credentials.is_logged_in = false
            }
            this.setState({
                is_loading : false
            })
        })
    }
    render() {
        return (this.state.is_loading ? (this.renderLoading()):(this.renderCompleted()))
    }
    renderLoading = () =>{
        return <Animation />
    }
    renderCompleted = () =>{
        return this.props.children
    }
}
export default App;
