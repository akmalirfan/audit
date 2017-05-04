export default (state = -1, action) => {
    switch (action.type) {
        case 'RECEIVE_CHECKLIST':
            return action.checklistid
        default:
            return state
    }
}