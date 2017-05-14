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
            <input
                ref={node => input = node}
                placeholder="text"
            />
            
            <p>
                <input className="with-gap" id={section + 1} ref={node => rad1 = node} type="radio" name="severity" onClick={() => {
                    severity = 'minor'
                    checkedrad = rad1
                }} />
                <label htmlFor={section + 1}>minor</label>
            </p>

            <p>
                <input className="with-gap" id={section + 2} ref={node => rad2 = node} type="radio" name="severity" onClick={() => {
                    severity = 'major'
                    checkedrad = rad2
                }} />
                <label htmlFor={section + 2}>major</label>
            </p>

            <p>
                <input className="with-gap" id={section + 3} ref={node => rad3 = node} type="radio" name="severity" onClick={() => {
                    severity = 'serious'
                    checkedrad = rad3
                }} />
                <label htmlFor={section + 3}>serious</label>
            </p>
            
            <button
                className="btn"
                onClick={e => {
                    e.preventDefault()
                    if (!input.value.trim() || !checkedrad) {
                        return
                    }
                    dispatch(addItem(input.value.trim(), section, severity))
                    input.value = ''
                    checkedrad.checked = false
                    checkedrad = undefined
                }}
            >
                Add Item
            </button>
        </div>
    )
}

AddItem = connect()(AddItem)

export default AddItem