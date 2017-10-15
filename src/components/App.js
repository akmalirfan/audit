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
        const { checklistid, scheme, editing, checklist, dispatch } = this.props
        return (
            <form>
                {/*<Image width={38} height={38} viewBox="38 0 38 38" />*/}
                <Checklists/>
                <AddSection/>
                <button
                    id="savebtn"
                    className="btn-large blue right"
                    type="submit"
                    name="action"
                    onClick={(e) => {
                        e.preventDefault()
                        dispatch(saveChecklist(checklistid, scheme, editing, checklist))
                        document.getElementById('savebtn').innerText = 'Saving...'
                    }}
                >
                    SAVE
                    {/*<i className="material-icons right">send</i>*/}
                </button>
            </form>
        )
    }
}

const mapStateToProps = state => state

App = connect(mapStateToProps)(App)

export default App