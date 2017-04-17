import React from 'react'
import { connect } from 'react-redux'
import { addItem } from '../actions'
import ChecklistItem from './ChecklistItem'

let Section = ({ items, onChecklistSubmit, onSectionSubmit, dispatch }) => {
    let input
    let inp2

    return (
        <div className="sectionlist">
            {items.map((item, i) =>
                <div
                    className="section"
                    key={item.section}
                >
                    {item.section}
                    <form
                        onSubmit={e => {
                            e.preventDefault()
                            if (!input.value.trim()) {
                                console.log('asdasd')
                                return
                            }
                            dispatch(addItem(input.value.trim(), item.section))
                            input.value = ''
                            {/*inp2.value = ''*/}
                        }}
                    >
                        <input ref={node => input = node} placeholder="text" />
                        
                        {/*<input ref={node => inp2 = node} placeholder="severity" />*/}
                        
                        <button type="submit">
                            Add Item
                        </button>
                    </form>
                    {item.items.map((citem, i) => {
                        return (
                            <p key={citem.id}>{citem.text_ms}{citem.severity}</p>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

Section = connect()(Section)

export default Section