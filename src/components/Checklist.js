import React from 'react'
import { addItem } from '../actions'
import { connect } from 'react-redux'
import ChecklistItem from './ChecklistItem'

let Checklist = ({ items, onChecklistSubmit, onSectionSubmit }) => {
    return (
        <ul>
            {items.map((item, i) =>
                <ChecklistItem
                    key={i}
                    items={item.items}
                    {...item.items}
                    onSectionSubmit={onSectionSubmit}
                />
            )}
        </ul>
    )
}

export default Checklist