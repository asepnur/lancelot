import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import {
    Navbar,
    Newsbar,
    LayoutUser,
    InputContent
} from '../index.js'

class User extends Component{
    render(){
        return(
            <LayoutUser>
            <Navbar/>
            <div className="_cn">
            <div className="_ro">
                <div className="_pd3cl _c5m312 _c5x312">
                    <h1 className="_he3m3b _ma3xl3t">Account Setting</h1>
                </div>
            </div>
        </div>
        <div className="_cn">
            <div className="_ro">
                <div className="_c5m38 _pd5n _pd3cl _pd5m3n">
                    <div className="_ta">
                        <ul className="_ta5l">
                            <li><a className="_ta5l3a" href="">Profil</a></li>
                            <li><a href="">Basic</a></li>
                        </ul>
                        <div className="_ta5c _dn">
                            <div className="_se _se3a">
                                <div className="_ro">
                                    <div className="_c5x312 _c5m312 ">
                                        <h1 className="_he3m3b">Profil</h1>
                                    </div>
                                </div>
                                <div className="_ro">
                                    <div className="_c5x33 _c5m31">
                                        <img className="_i3pr _i3ci" src="/img/icon/blue/logo copy 4.png" alt="profil" />
                                        <i className="fa fa-camera _icx" aria-hidden="true"></i>
                                    </div>
                                    <div className="_c5x34 _c5m32 ">
                                        <button className="_bt">change</button>
                                    </div>
                                </div>
                                <div className="_ro">
                                    <div>
                                        <InputContent classWraper="_c5x36 _c5m36" type="text" name="fname" placeholder="First Name" onChangeState={this.onChangeState}/>
                                    </div>
                                    <div>
                                        <InputContent classWraper="_c5x36 _c5m36" type="text" name="lname" placeholder="Last Name" onChangeState={this.onChangeState}/>
                                    </div>
                                </div>
                                <div className="_ro">
                                    <div>
                                        <InputContent classWraper="_c5x36 _c5m36" type="text" name="lorem" placeholder="Lorem Ipsum" onChangeState={this.onChangeState}/>
                                    </div>
                                </div>
                                <div className="_ro">
                                    <div>
                                        <InputContent classWraper="_c5x312 _c5m312" type="text" name="lorem" placeholder="Lorem Ipsum" onChangeState={this.onChangeState}/>
                                    </div>
                                </div>
                                <div className="_ro">
                                    <div className="_c5x312 _c5m312 ">
                                        <textarea name="about" id="" placeholder="Lorem ipsum"></textarea>
                                    </div>
                                </div>
                                <div className="_ro">
                                    <div className="_c5x3o6 _c5m33 _c5x33 _pd3r">
                                        <button className="_bt5m">Cancel</button>
                                    </div>
                                    <div className="_c5m33 _c5x33 _pd3l">
                                        <button className="_bt5m3b">Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="_ta5c">
                            <div className="_se _se3a">
                                <div className="_ro">
                                    <div className="_c5x312 _c5m312 ">
                                        <h1 className="_he3m3b">Basic</h1>
                                    </div>
                                </div>
                                <div className="_ro">
                                    <div>
                                        <InputContent classWraper="_c5x312 _c5m312" type="text" name="email" placeholder="E-Mail" onChangeState={this.onChangeState}/>
                                    </div>
                                </div>
                                <div className="_ro">
                                    <div>
                                        <InputContent classWraper="_c5x312 _c5m312" type="text" name="NPM" placeholder="NPM" onChangeState={this.onChangeState}/>
                                    </div>
                                </div>
                                <div className="_ro">
                                    <div className="_c5x36 _c5m36 ">
                                        <label className="_ct3xb" for="password">Change password</label>
                                        <InputContent classWraper="" type="password" name="opwd" placeholder="Old Password" onChangeState={this.onChangeState}/>
                                    </div>
                                </div>
                                <div className="_ro">
                                    <div>
                                        <InputContent classWraper="_c5x312 _c5m312" type="password" name="npwd" placeholder="New Password" onChangeState={this.onChangeState}/>
                                    </div>
                                    <div>
                                        <InputContent classWraper="_c5x312 _c5m312" type="password" name="cpwd" placeholder="Confirmation Password" onChangeState={this.onChangeState}/>
                                    </div>
                                </div>
                                <div className="_ro">
                                    <div className="_c5x3o6 _c5m33 _c5x33 _pd3r ">
                                        <button className="_bt5m">Cancel</button>
                                    </div>
                                    <div className="_c5m33 _c5x33 _pd3l">
                                        <button className="_bt5m3b">Save</button>
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
        )
    }
}

export default User