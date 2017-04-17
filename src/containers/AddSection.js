import React from 'react'
import { connect } from 'react-redux'
import { addSection } from '../actions'

let AddSection = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addSection(input.value.trim()))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Section
        </button>
      </form>
    </div>
  )
}
AddSection = connect()(AddSection)

export default AddSection
