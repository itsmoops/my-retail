import React from 'react'
import * as firebase from 'firebase'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import routes from './routes'
import common from './styles/common'
import colors from './styles/colors'
import storeConfig from './store/config'
import firebaseConfig from './firebase-config'
import './styles/global'

let store
if (process.env.NODE_ENV === 'production') {
    store = storeConfig.prod()
    firebase.initializeApp(firebaseConfig.prod)
} else {
    store = storeConfig.dev()
    firebase.initializeApp(firebaseConfig.dev)
}

const theme = Object.assign({}, common, colors)

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <Router>{routes}</Router>
        </ThemeProvider>
    </Provider>,
    document.getElementById('app')
)
