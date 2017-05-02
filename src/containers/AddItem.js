import React from 'react'
import { connect } from 'react-redux'
import { addItem } from '../actions'

let AddItem = ({ section, dispatch }) => {
    let input
    let rad1
    let rad2
    let rad3
    let checkedrad
    let severity

    const setSeverity = (sev, rad) => {
        severity = sev
        checkedrad = rad
    }

    return (
        <div>
            <input ref={node => input = node} placeholder="text" />
            
            <label>
                <input ref={node => rad1 = node} type="radio" name="severity" onClick={() => {
                    severity = 'minor'
                    checkedrad = rad1
                }} />
                minor
            </label>

            <label>
                <input ref={node => rad2 = node} type="radio" name="severity" onClick={() => {
                    severity = 'major'
                    checkedrad = rad2
                }} />
                major
            </label>

            <label>
                <input ref={node => rad3 = node} type="radio" name="severity" onClick={() => {
                    severity = 'serious'
                    checkedrad = rad3
                }} />
                serious
            </label>
            
            <button
                onClick={e => {
                    e.preventDefault()
                    if (!input.value.trim()) {
                        return
                    }
                    dispatch(addItem(input.value.trim(), section, severity))
                    input.value = ''
                    checkedrad.checked = false
                }}
            >
                Add Item
            </button>
        </div>
    )
}

AddItem = connect()(AddItem)

export default AddItem