import React from 'react'
import { connect } from 'react-redux'
import { addSection } from '../actions'

let AddSection = ({ dispatch }) => {
  let input

  return (
    <div>
      <div>
        <input ref={node => {
          input = node
        }} />
        <button
          onClick={e => {
            e.preventDefault()
            if (!input.value.trim()) {
              return
            }
            dispatch(addSection(input.value.trim()))
            input.value = ''
          }}
        >
          Add Section
        </button>
      </div>
    </div>
  )
}
AddSection = connect()(AddSection)

export default AddSection
