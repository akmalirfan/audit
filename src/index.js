import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'

// Run tests
import checklist from './reducers/checklist'
import testChecklist from './reducers/checklist.spec'
testChecklist(checklist);

import checklistItems from './reducers/checklistItems'
import testChecklistItems from './reducers/checklistItems.spec'
testChecklistItems(checklistItems);

import checklistItem from './reducers/checklistItem'
import testChecklistItem from './reducers/checklistItem.spec'
testChecklistItem(checklistItem);

import Checklist from './components/Checklist'

const store = createStore(checklist)

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)

// store.subscribe(render);
// render();