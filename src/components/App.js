import React, { Component } from 'react'
import { connect } from 'react-redux'
import AddSection from '../containers/AddSection'
import Checklists from '../containers/Checklists'
import { fetchChecklistIfNeeded, saveChecklist } from '../actions'
// import Image from '../img/check_radio_sheet.svg'

class App extends Component {
    componentDidMount() {
        const { dispatch, checklistid } = this.props
        dispatch(fetchChecklistIfNeeded(checklistid))
    }

    render() {
        const { checklistid, editing, checklist, dispatch } = this.props
        return (
            <form>
                {/*<Image width={38} height={38} viewBox="38 0 38 38" />*/}
                <AddSection/>
                <Checklists/>
                <input
                    type="submit"
                    className="btn"
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