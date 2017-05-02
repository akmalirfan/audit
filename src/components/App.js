import React, { Component } from 'react'
import { connect } from 'react-redux'
import AddSection from '../containers/AddSection'
import Checklists from '../containers/Checklists'

let App = ({ checklistid, checklist, dispatch }) => (
    <form>
        <AddSection/>
        <Checklists/>
        <input
            type="submit"
            onClick={(e) => {
                e.preventDefault()
                dispatch({
                    type:'SAVE_CHECKLIST',
                    checklistid,
                    jdoc: checklist
                })
            }}
        />
    </form>
)

const mapStateToProps = state => state

App = connect(mapStateToProps)(App)

export default App