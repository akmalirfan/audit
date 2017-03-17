export default (state = [], action) => {
    switch (action.type) {
        case 'MAKE_IT_PASS':
            return {
                ...state,
                value: 'passed'
            };
        case 'MAKE_IT_FAIL':
            return {
                ...state,
                value: 'failed'
            };
        default:
            return state;
    }
};