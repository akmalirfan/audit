import React from 'react'
import { connect } from 'react-redux'
import { addSection } from '../actions'

let AddSection = ({ dispatch }) => {
    let input

    return (
        <div className="row">
            <input
                className="input-field col s8"
                ref={node => {
                input = node
            }} />
            <button
                className="btn col s3"
                onClick={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                return
                }
                dispatch(addSection(input.value.trim()))
                input.value = ''
            }} >
                Add Section
            </button>
        </div>
    )
}
AddSection = connect()(AddSection)

export default AddSection
