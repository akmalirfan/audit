let React = require('react');
let ReactDOM = require('react-dom');
let Redux = require('redux');

// Reducer
const todo = (state = [], action) => {
    switch (action.type) {
        case 'MAKE_IT_PASS':
            return state.map(section => {
                if (section.section === action.section) {
                    return {
                        ...section,
                        items: section.items.map(item => {
                            if (item.id === action.id) {
                                return {
                                    ...item,
                                    value: 'passed'
                                };
                            }
                            return item;
                        })
                    }
                }
                return section;
            });
        case 'MAKE_IT_FAIL':
            return state.map(section => {
                if (section.section === action.section) {
                    return {
                        ...section,
                        items: section.items.map(item => {
                            if (item.id === action.id) {
                                return {
                                    ...item,
                                    value: 'failed'
                                };
                            }
                            return item;
                        })
                    }
                }
                return section;
            });
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        case 'TOGGLE_TODO':
            return state.map(todo => {
                if (todo.id === action.id) {
                    return {
                        id: todo.id,
                        text: todo.text,
                        completed: !todo.completed
                    }
                }
                return todo;
            });
        default:
            return state;
    }
}

// Run tests
import testTodo from './index.test';
testTodo(todo);

import checklistItem from './reducers/checklistItem';
import testChecklistItem from './reducers/checklistItem.spec';
testChecklistItem(checklistItem);

// Component: App
const App = ({
    value
}) => (
    <button onClick={() =>
            store.dispatch({
                type: 'ADD_TODO',
                id: 1,
                text: 'werqwer'
            })
        }
    >ADD_TODO</button>
);

const { createStore } = Redux;
const store = createStore(todo);

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