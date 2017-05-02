import React from 'react'
import { connect } from 'react-redux'
import { addInfo } from '../actions'

let AddInfo = ({ sectionname, itemid, dispatch }) => {
    let input

    return (
        <div>
            <input ref={node => input = node} placeholder="text" />
            
            <button
                onClick={e => {
                    e.preventDefault()
                    if (!input.value.trim()) {
                        return
                    }
                    dispatch(addInfo(input.value.trim(), sectionname, itemid))
                    input.value = ''
                }}
            >
                Add Info
            </button>
        </div>
    )
}

AddInfo = connect()(AddInfo)

export default AddInfo