import React, { Component } from 'react'
import { connect } from 'react-redux'
import AddSection from '../containers/AddSection'
import Checklists from '../containers/Checklists'
import { fetchChecklistIfNeeded, saveChecklist } from '../actions'

class App extends Component {
    componentDidMount() {
        const { dispatch, checklistid } = this.props
        dispatch(fetchChecklistIfNeeded(checklistid))
    }

    render() {
        const { checklistid, editing, checklist, dispatch } = this.props
        return (
            <form>
                <AddSection/>
                <Checklists/>
                <input
                    type="submit"
                    onClick={(e) => {
                        e.preventDefault()
                        dispatch(saveChecklist(checklistid, editing, checklist))
                    }}
                />
            </form>
        )
    }
}

const mapStateToProps = state => state

App = connect(mapStateToProps)(App)

export default App