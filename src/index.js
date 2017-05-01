import React from 'react'
import { render } from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import { Provider } from 'react-redux'
import App from './components/App'
// import reducer from './reducers'
import checklist from './reducers/checklist'
require('./css/style.css')

/*let xhr = new XMLHttpRequest();
xhr.open('GET', 'http://gmm-student.fc.utm.my/~aibnm/data.php')
xhr.onreadystatechange = (xhr) => {
    if (xhr.target.readyState === 4 && xhr.target.status === 200) {
        const store = createStore(checklist, JSON.parse(xhr.target.responseText))

        render(
            <Provider store={store}>
                <App/>
            </Provider>,
            document.getElementById('root')
        )
    }
}
xhr.send()*/
const store = createStore(
    checklist,
    applyMiddleware(logger)
)

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)