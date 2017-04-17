import { addItem } from '../actions'
import React from 'react'
import { connect } from 'react-redux'

let ChecklistItem = ({ section, items, onSectionSubmit }) => {
    let input

    return (
        <li>
            {items}
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    onSectionSubmit(input.value)
                    input.value = ''
                }}>
                <input
                ref={node => {
                    input = node
                }}/>
            </form>
            <ul>
            {items.map((item, i) =>
                <li
                    key={i}
                >{item}</li>
            )}
            </ul>
        </li>
    )
}

export default ChecklistItem