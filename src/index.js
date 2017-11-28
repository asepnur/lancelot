//--------------------------------------------;
//                  MAIN;
//--------------------------------------------;
import React from 'react'
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom'
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom'

import registerServiceWorker from './registerServiceWorker'
import {Initialize, store} from './config/index'
import {routes} from './config/routes.js'
import {LoadingBar} from './component/index'

ReactDOM.render(
        <Provider store={store}>
        <Initialize>
            <LoadingBar/>
            <Router>
                <Switch>
                    {routes.map((route, i) => <Route
                        exact={route.exact}
                        path={route.path}
                        component={route.component}
                        key={i}/>)}
                </Switch>
            </Router>
        </Initialize>
    </Provider>
, document.getElementById('root'))
registerServiceWorker()