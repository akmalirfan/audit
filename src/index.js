let React = require('react');
let ReactDOM = require('react-dom');
let Redux = require('redux');
import checklistItem from './reducers/checklistItem';

// Run tests
import checklist from './reducers/checklist';
import testChecklist from './reducers/checklist.spec';
testChecklist(checklist);

import checklistItems from './reducers/checklistItems';
import testChecklistItems from './reducers/checklistItems.spec';
testChecklistItems(checklistItems);

import testChecklistItem from './reducers/checklistItem.spec';
testChecklistItem(checklistItem);

// Component: App
const App = ({
    value
}) => (
    <button onClick={() =>
            store.dispatch({
                type: 'ADD_SECTION',
                id: 1,
                text: 'werqwer'
            })
        }
    >ADD_TODO</button>
);

const { createStore } = Redux;
const store = createStore(checklist);

const render = () => {
    ReactDOM.render(
        <App
            value={store.getState()}
        />,
        document.getElementById('root')
    );
};

store.subscribe(render);
render();