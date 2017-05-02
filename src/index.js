import React from 'react'
import { render } from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'
require('./css/style.css')

/*let xhr = new XMLHttpRequest();
xhr.open('GET', 'http://gmm-student.fc.utm.my/~aibnm/data.php')
xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const store = createStore(checklist, JSON.parse(xhr.responseText))

        render(
            <Provider store={store}>
                <App/>
            </Provider>,
            document.getElementById('root')
        )
    }
}
xhr.send()*/
let checklistid = window.location.search.substr(1).split('=')[1]
const store = createStore(
    reducer,
    {
        checklistid,
        checklist: []
    },
    applyMiddleware(logger)
)

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)