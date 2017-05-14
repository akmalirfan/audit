import React from 'react'
import { connect } from 'react-redux'
import { addSection } from '../actions'

let AddSection = ({ dispatch }) => {
    let input

    return (
        <div className="addsection row">
            <input
                className="input-field col s9"
                placeholder="Section name"
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
