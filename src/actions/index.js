let id = 0;
export const addSection = (section) => ({
    type: 'ADD_SECTION',
    section
})

export const addItem = (text, section, severity) => ({
    type: 'ADD_CHECKLISTITEM',
    section,
    id:id++,
    text_ms: text,
    info: [],
    severity
})

export const addInfo = (text, section, id) => ({
    type: 'ADD_INFO',
    section,
    id,
    text
})

export const makeItPass = (section, id) => ({
    type: 'MAKE_IT_PASS',
    section,
    id
})

export const makeItFail = (section, id) => ({
    type: 'MAKE_IT_FAIL',
    section,
    id
})

export const requestChecklist = () => ({
    type: 'REQUEST_CHECKLIST'
})

export const receiveChecklist = (checklistid, json) => ({
    type: 'RECEIVE_CHECKLIST',
    checklistid,
    checklist: json
})

const fetchChecklist = checklistid => dispatch => {
    dispatch(requestChecklist())
    return fetch(`http://localhost/audit_all/load.php?editing&checklistid=${checklistid}`)
        .then(response => response.json())
        .then(json => dispatch(receiveChecklist(checklistid, json)))
}

const shouldFetchChecklist = (state, checklistid) => {
    if (!state.checklist.length && state.editing && state.checklistid) {
        return true
    }
    return !state.isFetching && state.editing
}

export const fetchChecklistIfNeeded = checklistid => (dispatch, getState) => {
    if (shouldFetchChecklist(getState(), checklistid)) {
        return dispatch(fetchChecklist(checklistid))
    }
}

export const saveChecklist = (checklistid, scheme, editing, checklist) => dispatch => {
    dispatch({ type: 'SAVE_CHECKLIST' })
    return fetch(`http://localhost/audit_all/save_checklist.php`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            checklistid,
            scheme,
            checklist,
            editing
        })
    })
    .then(response => response.json())
    .then(json => dispatch({ type: 'SAVE_CHECKLIST' }))
}