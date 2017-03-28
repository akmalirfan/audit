import React from 'react'
import { connect } from 'react-redux'

let ChecklistItem = ({ section, items, onSectionSubmit }) => {
    let input

    return (
        <li>
            {section}
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
ChecklistItem = connect()(ChecklistItem)

export default ChecklistItem