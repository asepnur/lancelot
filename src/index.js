//--------------------------------------------;
//                  MAIN;
//--------------------------------------------;
import React from 'react'
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom'
import {Switch, Route, Router} from 'react-router-dom'
import history from './history'

import registerServiceWorker from './registerServiceWorker'
import {Initialize, store} from './config/index'
import {routes} from './config/routes.js'
import {LoadingBar, ErrorMessage} from './component/index'
ReactDOM.render(
        <Provider store={store}>
        <Initialize>
            <LoadingBar/>
            <ErrorMessage />
            <Router history={history}>
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