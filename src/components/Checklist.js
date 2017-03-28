import React from 'react'
import { connect } from 'react-redux'
import ChecklistItem from './ChecklistItem'

let Checklist = ({ items, onChecklistSubmit, onSectionSubmit }) => {
    let input

    return (
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    onChecklistSubmit(input.value)
                    input.value = ''
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
                        items={items}
                        {...item}
                        onSectionSubmit={onSectionSubmit}
                    />
                )}
            </ul>
        </div>
    )
}
Checklist = connect()(Checklist)

export default Checklist