import React, {Component} from 'react'
//import {Switch} from 'react-router'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import {actorRequest} from '../../action/action'
import {base_url} from '../../env/Environment'

class Newsbar extends Component {
    constructor() {

        super()
        this.state = {
            news: [
                {
                    avatar:'',
                    author: '',
                    date: '',
                    description: ''
                }
            ]
        }
    }
    componentDidMount() {
        fetch(base_url + '/api/v1/information', {
            method: 'GET',
            credentials: 'include',
            crossDomain: true
        }).then((res) => {
            return res.json()
        }).then((data) => {
            if (data.code === 200) {
                this.setState({news: data.data.news})
            }
        })

    }
    render() {
        const news = this.state.news
        return (
            <div className="_c5m34 _c5x312 _pd3cr">
                <div className="_se _se3n">
                    <div className="_se5m">
                        + VIEW MORE</div>
                    <div className="_ro">
                        <div className="_c5x312">
                            <h1 className="_se5t">News Board</h1>
                            <hr/>
                        </div>
                    </div>
                    <Main data={news}/>
                    {/*<div className="_ro">
                        <div className="_c5x312 _c5m312">
                            <p className="_se5c">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                        </div>
                        <div className="_c5x312 _c5m312">
                            <p className="_de3n"><img
                                className="_i3tb"
                                src="/img/icon/white/logo copy 4.png"
                                alt="profil thumb"/>
                                - September 2017</p>
                        </div>
                    </div>
                    <div className="_ro">
                        <div className="_c5x312">
                            <hr/>
                        </div>
                    </div>
                    <div className="_ro">
                        <div className="_c5x312 _c5m312">
                            <p className="_se5c">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                        </div>
                        <div className="_c5x312 _c5m312">
                            <p className="_de3n"><img
                                className="_i3tb"
                                src="/img/icon/white/logo copy 4.png"
                                alt="profil thumb"/>
                                - September 2017</p>
                        </div>
                    </div>
                    <div className="_ro">
                        <div className="_c5x312">
                            <hr/>
                        </div>
                    </div>
                    <div className="_ro">
                        <div className="_c5x312 _c5m312">
                            <p className="_se5c">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                        </div>
                        <div className="_c5x312 _c5m312">
                            <p className="_de3n"><img
                                className="_i3tb"
                                src="/img/icon/white/logo copy 4.png"
                                alt="profil thumb"/>
                                - September 2017</p>
                        </div>
                    </div>
                    <div className="_ro">
                        <div className="_c5x312">
                            <hr/>
                        </div>
                    </div>
                    <div className="_ro">
                        <div className="_c5x312 _c5m312">
                            <p className="_se5c">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                        </div>
                        <div className="_c5x312 _c5m312">
                            <p className="_de3n"><img
                                className="_i3tb"
                                src="/img/icon/white/logo copy 4.png"
                                alt="profil thumb"/>
                                - September 2017</p>
                        </div>
                    </div>
                    <div className="_ro">
                        <div className="_c5x312">
                            <hr/>
                        </div>
                    </div>*/}
                </div>
            </div>

        )
    }
}

const Main = (props) => {
    return (
        <div>
            {props
                .data
                .map((data, i) => (
                    <div className="_ro" key={i}>
                        <div className="_c5x312 _c5m312">
                            <p className="_se5c">{data.description}</p>
                        </div>
                        <div className="_c5x312 _c5m312">
                            <p className="_de3n"><img
                                className="_i3tb"
                                src={data.avatar}
                                alt={data.author}/>
                                {data.date}</p>
                        </div>
                        <div className="_c5x312">
                            <hr/>
                        </div>
                    </div>
                ))
}
        </div>
    )
}

export default Newsbar