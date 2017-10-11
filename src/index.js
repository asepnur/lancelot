import React from 'react'
import registerServiceWorker from './registerServiceWorker'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import Main from './Main.js'

ReactDOM.render(
    <BrowserRouter>
        <Main />
    </BrowserRouter>
, document.getElementById('root'))
registerServiceWorker()