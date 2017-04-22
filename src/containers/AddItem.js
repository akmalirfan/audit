import React from 'react'
import { connect } from 'react-redux'
import { addItem } from '../actions'

let AddItem = ({ section, dispatch }) => {
    let input
    let inp2

    return (
        <form
            onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    console.log('asdasd')
                    return
                }
                dispatch(addItem(input.value.trim(), section, inp2.value.trim()))
                input.value = ''
                inp2.value = ''
            }}
        >
            <input ref={node => input = node} placeholder="text" />
            
            <input ref={node => inp2 = node} placeholder="severity" />
            
            <button type="submit">
                Add Item
            </button>
        </form>
    )
}

AddItem = connect()(AddItem)

export default AddItem