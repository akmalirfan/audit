import React from 'react'
import { connect } from 'react-redux'
import { addInfo } from '../actions'

let AddInfo = ({ sectionname, itemid, dispatch }) => {
    let input

    return (
        <div className="info row">
            <input
                className="col s7 offset-s1"
                ref={node => input = node}
                placeholder="Info"
            />
            
            <button
                className="btn col s3"
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