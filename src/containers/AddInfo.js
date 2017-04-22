import React from 'react'
import { connect } from 'react-redux'
import { addInfo } from '../actions'

let AddInfo = ({ sectionname, itemid, dispatch }) => {
    let input

    return (
        <form
            onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }
                dispatch(addInfo(input.value.trim(), sectionname, itemid))
                input.value = ''
            }}
        >
            <input ref={node => input = node} placeholder="text" />
            
            <button type="submit">
                Add Info
            </button>
        </form>
    )
}

AddInfo = connect()(AddInfo)

export default AddInfo