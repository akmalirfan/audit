import React from 'react'
import ChecklistItem from './ChecklistItem'

let input;
export default ({ items, store }) => (
    <div>
        <form
            onSubmit={(e) => {
                e.preventDefault();
                store.dispatch({
                    type: 'ADD_SECTION',
                    section: input.value
                });
                input.value = '';
            }}>
            <input
            ref={node => {
                input = node;
            }}/>
        </form>
        <ul>
            {items.map((item, i) =>
                <ChecklistItem
                    key={i}
                    {...item}
                />
            )}
        </ul>
    </div>
)