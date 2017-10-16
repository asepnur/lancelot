import React from 'react'
import registerServiceWorker from './registerServiceWorker'
import ReactDOM from 'react-dom'

import Main from './Main.js'

ReactDOM.render(
        <Main />
, document.getElementById('root'))
registerServiceWorker()