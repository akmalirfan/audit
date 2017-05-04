const isFetching = (state = false, action) => {
    switch (action.type) {
        case 'REQUEST_CHECKLIST':
            return true
        case 'RECEIVE_CHECKLIST':
            return false
        default:
            return state
    }
}

export default isFetching