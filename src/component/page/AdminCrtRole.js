import React, {Component} from 'react'
//import {Link} from 'react-router-dom'

import {NavbarAdmin, LayoutUser, InputContent} from '../index.js'

class AdminCrtRole extends Component {
    constructor() {
        super()

        this.state = {
            rname: '',
            role:'',
            Abilities:''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <LayoutUser>
                <NavbarAdmin/>
                <div className="_cn">
                    <div className="_ro">
                        <div className="_pd5m3n _c5m312 _c5x312">
                            <h1 className="_he3b">Create User</h1>
                        </div>
                    </div>
                </div>
                <div class="_cn">
            <div class="_ro">
                <div class="_c5m312 _pd5m3n _ta">
                    <ul class="_ta5l">
                        <li><a class="" id="btn_attend">Users</a></li>
                        <li><a class="_ta5l3a" id="btn_assign">Create User</a></li>
                    </ul>
                </div>
            </div>
            <div class="_ro">
                <div class="_c5x312 _c5m312 _pd5m3n">
                    <div class="_se _se3a">
                        <div class="_ro _pd3n3b">
                            <div class="_c5m312 _c5x312">
                                <form class="_cn" action="/" method="POST">
                                    <div class="_ro _pd3n3b">
                                        <div class="_c5m312 _c5x312 _pd3l3tb">
                                            <InputContent
                                                classWraper="_c5m312 _c5x312"
                                                type="text"
                                                name="rname"
                                                placeholder="Role Name*"
                                                value={this.state.rname}
                                                disabled="false"/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="_c5x312 _c5m312 _pd5m3n _pd3n3lr">
                    <div>
                        <div class="_ro _pd3n3b _pd3n3lr">
                            <div class="_c5m312 _c5x312 ">
                                <div class="_ro _c5m35 _c5x33">
                                    <p class="_he3x3bk">Modul Name</p>
                                </div>
                                <div class="_ro _c5m34 _c5x35">
                                    <p class="_he3x3bk">Abilities</p>
                                </div>
                                <div class="_ro _c5m33 _c5x34">
                                    <button class="_bt5m3g" type="submit">+Create Module</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="_c5x312 _c5m312 _pd5m3n _ov3y5m">
                    <div class="_se _se3a">
                        <div class="_ro _pd3n3b _ma3l3lr">
                            <div class="_c5m312 _c5x312 _pd3n3lr">
                                <form class="_cn" action="/" method="POST">
                                    <div class="_ro _c5m35 _c5x33 _pd3n3lr">
                                        <select>
                                            <option value="lorem1">Lorem1</option>
                                            <option value="lorem2">lorem2</option>
                                            <option value="lorem3">Lorem3</option>
                                            <option value="lorem4">lorem4</option>
                                        </select>
                                    </div>
                                    <div class="_ro _c5m35 _c5x37 _pd3l3t">
                                        <div class="_c5m34 _c5x36 _pd3n3lr">
                                            <input type="checkbox" name="lorem1" value="lorem1" /> Lorem 1
                                        </div>
                                        <div class="_c5m34 _c5x36 _pd3n3lr">
                                            <input type="checkbox" name="lorem2" value="lorem2" /> Lorem 2
                                        </div>
                                        <div class="_c5m34 _c5x36 _pd3n3lr">
                                            <input type="checkbox" name="lorem3" value="lorem3" /> Lorem 3
                                        </div>
                                        <div class="_c5m34 _c5x36 _pd3n3lr">
                                            <input type="checkbox" name="lorem4" value="lorem4" /> Lorem 4
                                        </div>
                                        <div class="_c5m34 _c5x36 _pd3n3lr">
                                            <input type="checkbox" name="lorem5" value="lorem5" /> Lorem 5
                                        </div>
                                        <div class="_c5m34 _c5x36 _pd3n3lr">
                                            <input type="checkbox" name="lorem6" value="lorem6" /> Lorem 6
                                        </div>
                                    </div>
                                    <div class="_ro _c5m31 _c5x32 _pd3n3b">
                                        <button class="_bt5m3r" type="submit">-</button>
                                    </div>
                                </form>
                            </div>
                            <div class="_c5m312 _c5x312">
                                <hr/>
                            </div>
                        </div>
                        <div class="_ro _pd3n3b _ma3l3lr">
                            <div class="_c5m312 _c5x312 _pd3n3lr">
                                <form class="_cn" action="/" method="POST">
                                    <div class="_ro _c5m35 _c5x33 _pd3n3lr">
                                        <select>
                                            <option value="lorem1">Lorem1</option>
                                            <option value="lorem2">lorem2</option>
                                            <option value="lorem3">Lorem3</option>
                                            <option value="lorem4">lorem4</option>
                                        </select>
                                    </div>
                                    <div class="_ro _c5m35 _c5x37 _pd3l3t">
                                        <div class="_c5m34 _c5x36 _pd3n3lr">
                                            <input type="checkbox" name="lorem1" value="lorem1" /> Lorem 1
                                        </div>
                                        <div class="_c5m34 _c5x36 _pd3n3lr">
                                            <input type="checkbox" name="lorem2" value="lorem2" /> Lorem 2
                                        </div>
                                        <div class="_c5m34 _c5x36 _pd3n3lr">
                                            <input type="checkbox" name="lorem3" value="lorem3" /> Lorem 3
                                        </div>
                                        <div class="_c5m34 _c5x36 _pd3n3lr">
                                            <input type="checkbox" name="lorem4" value="lorem4" /> Lorem 4
                                        </div>
                                        <div class="_c5m34 _c5x36 _pd3n3lr">
                                            <input type="checkbox" name="lorem5" value="lorem5" /> Lorem 5
                                        </div>
                                        <div class="_c5m34 _c5x36 _pd3n3lr">
                                            <input type="checkbox" name="lorem6" value="lorem6" /> Lorem 6
                                        </div>
                                    </div>
                                    <div class="_ro _c5m31 _c5x32 _pd3n3b">
                                        <button class="_bt5m3r" type="submit">-</button>
                                    </div>
                                </form>
                            </div>
                            <div class="_c5m312 _c5x312">
                                <hr/>
                            </div>
                        </div>
                        <div class="_ro _pd3n3b _ma3l3lr">
                            <div class="_c5m312 _c5x312 _pd3n3lr">
                                <form class="_cn" action="/" method="POST">
                                    <div class="_ro _c5m35 _c5x33 _pd3n3lr">
                                        <select>
                                            <option value="lorem1">Lorem1</option>
                                            <option value="lorem2">lorem2</option>
                                            <option value="lorem3">Lorem3</option>
                                            <option value="lorem4">lorem4</option>
                                        </select>
                                    </div>
                                    <div class="_ro _c5m35 _c5x37 _pd3l3t">
                                        <div class="_c5m34 _c5x36 _pd3n3lr">
                                            <input type="checkbox" name="lorem1" value="lorem1" /> Lorem 1
                                        </div>
                                        <div class="_c5m34 _c5x36 _pd3n3lr">
                                            <input type="checkbox" name="lorem2" value="lorem2" /> Lorem 2
                                        </div>
                                        <div class="_c5m34 _c5x36 _pd3n3lr">
                                            <input type="checkbox" name="lorem3" value="lorem3" /> Lorem 3
                                        </div>
                                        <div class="_c5m34 _c5x36 _pd3n3lr">
                                            <input type="checkbox" name="lorem4" value="lorem4" /> Lorem 4
                                        </div>
                                        <div class="_c5m34 _c5x36 _pd3n3lr">
                                            <input type="checkbox" name="lorem5" value="lorem5" /> Lorem 5
                                        </div>
                                        <div class="_c5m34 _c5x36 _pd3n3lr">
                                            <input type="checkbox" name="lorem6" value="lorem6" /> Lorem 6
                                        </div>
                                    </div>
                                    <div class="_ro _c5m31 _c5x32 _pd3n3b">
                                        <button class="_bt5m3r" type="submit">-</button>
                                    </div>
                                </form>
                            </div>
                            <div class="_c5m312 _c5x312">
                                <hr/>
                            </div>
                        </div>
                        <div class="_ro _pd3n3b _ma3l3lr">
                            <div class="_c5m312 _c5x312 _pd3n3lr">
                                <form class="_cn" action="/" method="POST">
                                    <div class="_ro _c5m35 _c5x33 _pd3n3lr">
                                        <select>
                                            <option value="lorem1">Lorem1</option>
                                            <option value="lorem2">lorem2</option>
                                            <option value="lorem3">Lorem3</option>
                                            <option value="lorem4">lorem4</option>
                                        </select>
                                    </div>
                                    <div class="_ro _c5m35 _c5x37 _pd3l3t">
                                        <div class="_c5m34 _c5x36 _pd3n3lr">
                                            <input type="checkbox" name="lorem1" value="lorem1" /> Lorem 1
                                        </div>
                                        <div class="_c5m34 _c5x36 _pd3n3lr">
                                            <input type="checkbox" name="lorem2" value="lorem2" /> Lorem 2
                                        </div>
                                        <div class="_c5m34 _c5x36 _pd3n3lr">
                                            <input type="checkbox" name="lorem3" value="lorem3" /> Lorem 3
                                        </div>
                                        <div class="_c5m34 _c5x36 _pd3n3lr">
                                            <input type="checkbox" name="lorem4" value="lorem4" /> Lorem 4
                                        </div>
                                        <div class="_c5m34 _c5x36 _pd3n3lr">
                                            <input type="checkbox" name="lorem5" value="lorem5" /> Lorem 5
                                        </div>
                                        <div class="_c5m34 _c5x36 _pd3n3lr">
                                            <input type="checkbox" name="lorem6" value="lorem6" /> Lorem 6
                                        </div>
                                    </div>
                                    <div class="_ro _c5m31 _c5x32 _pd3n3b">
                                        <button class="_bt5m3r" type="submit">-</button>
                                    </div>
                                </form>
                            </div>
                            <div class="_c5m312 _c5x312">
                                <hr/>
                            </div>
                        </div>
                        <div class="_ro _pd3n3b _ma3l3lr">
                            <div class="_c5m312 _c5x312 _pd3n3lr">
                                <form class="_cn" action="/" method="POST">
                                    <div class="_ro _c5m35 _c5x33 _pd3n3lr">
                                        <select>
                                            <option value="lorem1">Lorem1</option>
                                            <option value="lorem2">lorem2</option>
                                            <option value="lorem3">Lorem3</option>
                                            <option value="lorem4">lorem4</option>
                                        </select>
                                    </div>
                                    <div class="_ro _c5m35 _c5x37 _pd3l3t">
                                        <div class="_c5m34 _c5x36 _pd3n3lr">
                                            <input type="checkbox" name="lorem1" value="lorem1" /> Lorem 1
                                        </div>
                                        <div class="_c5m34 _c5x36 _pd3n3lr">
                                            <input type="checkbox" name="lorem2" value="lorem2" /> Lorem 2
                                        </div>
                                        <div class="_c5m34 _c5x36 _pd3n3lr">
                                            <input type="checkbox" name="lorem3" value="lorem3" /> Lorem 3
                                        </div>
                                        <div class="_c5m34 _c5x36 _pd3n3lr">
                                            <input type="checkbox" name="lorem4" value="lorem4" /> Lorem 4
                                        </div>
                                        <div class="_c5m34 _c5x36 _pd3n3lr">
                                            <input type="checkbox" name="lorem5" value="lorem5" /> Lorem 5
                                        </div>
                                        <div class="_c5m34 _c5x36 _pd3n3lr">
                                            <input type="checkbox" name="lorem6" value="lorem6" /> Lorem 6
                                        </div>
                                    </div>
                                    <div class="_ro _c5m31 _c5x32 _pd3n3b">
                                        <button class="_bt5m3r" type="submit">-</button>
                                    </div>
                                </form>
                            </div>
                            <div class="_c5m312 _c5x312">
                                <hr/>
                            </div>
                        </div>
                        <div class="_ro _pd3n3b _ma3l3lr">
                            <div class="_c5m312 _c5x312 _pd3n3lr">
                                <form class="_cn" action="/" method="POST">
                                    <div class="_ro _c5m35 _c5x33 _pd3n3lr">
                                        <select>
                                            <option value="lorem1">Lorem1</option>
                                            <option value="lorem2">lorem2</option>
                                            <option value="lorem3">Lorem3</option>
                                            <option value="lorem4">lorem4</option>
                                        </select>
                                    </div>
                                    <div class="_ro _c5m35 _c5x37 _pd3l3t">
                                        <div class="_c5m34 _c5x36 _pd3n3lr">
                                            <input type="checkbox" name="lorem1" value="lorem1" /> Lorem 1
                                        </div>
                                        <div class="_c5m34 _c5x36 _pd3n3lr">
                                            <input type="checkbox" name="lorem2" value="lorem2" /> Lorem 2
                                        </div>
                                        <div class="_c5m34 _c5x36 _pd3n3lr">
                                            <input type="checkbox" name="lorem3" value="lorem3" /> Lorem 3
                                        </div>
                                        <div class="_c5m34 _c5x36 _pd3n3lr">
                                            <input type="checkbox" name="lorem4" value="lorem4" /> Lorem 4
                                        </div>
                                        <div class="_c5m34 _c5x36 _pd3n3lr">
                                            <input type="checkbox" name="lorem5" value="lorem5" /> Lorem 5
                                        </div>
                                        <div class="_c5m34 _c5x36 _pd3n3lr">
                                            <input type="checkbox" name="lorem6" value="lorem6" /> Lorem 6
                                        </div>
                                    </div>
                                    <div class="_ro _c5m31 _c5x32 _pd3n3b">
                                        <button class="_bt5m3r" type="submit">-</button>
                                    </div>
                                </form>
                            </div>
                            <div class="_c5m312 _c5x312">
                                <hr/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="_c5x312 _c5m312 _pd5m3n _pd3n3lr">
                    <div>
                        <div class="_ro _pd3n3b _pd3n3lr">
                            <div class="_c5m312 _c5x312">
                                <div class="_ro _c5m34 _pl5r">
                                    <div class="_c5m34 _c5x34 _pd3n3lr">
                                        <button class="_bt5m" type="">Cencel</button>
                                    </div>
                                    <div class="_c5m38 _c5x38">
                                        <button class="_bt5m3b" type="submit">Save Role</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </LayoutUser>
        )
    }
}

export default AdminCrtRole