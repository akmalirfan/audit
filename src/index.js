import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

// Run tests
import checklist from './reducers/checklist';
import testChecklist from './reducers/checklist.spec';
testChecklist(checklist);

import checklistItems from './reducers/checklistItems';
import testChecklistItems from './reducers/checklistItems.spec';
testChecklistItems(checklistItems);

import checklistItem from './reducers/checklistItem';
import testChecklistItem from './reducers/checklistItem.spec';
testChecklistItem(checklistItem);

import Checklist from './components/Checklist';

const store = createStore(checklist);

const render = () => {
    ReactDOM.render(
        <Checklist
            store={store}
            items={store.getState()}
        />,
        document.getElementById('root')
    );
};

store.subscribe(render);
render();