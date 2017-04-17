import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
// import reducer from './reducers'
import checklist from './reducers/checklist'

const store = createStore(checklist)

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)