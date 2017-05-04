import React from 'react'
import { render } from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import App from './components/App'
import reducer from './reducers'
require('./css/style.css')

const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
    middleware.push(logger)
}

const searchToObject = (search) => {
    return search.substring(1).split('&').reduce((result, value) => {
        let parts = value.split('=')
        if (parts[0]) {
            result[decodeURIComponent(parts[0])] = (parts[1]) ? decodeURIComponent(parts[1]) : true
        }
        return result
    }, {})
}

let searchObj = searchToObject(window.location.search)
let checklistid = searchObj.checklistid
let editing = searchObj.editing
const store = createStore(
    reducer,
    {
        editing,
        checklistid,
        isFetching: false,
        checklist: []
    },
    applyMiddleware(...middleware)
)

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)