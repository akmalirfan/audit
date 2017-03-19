import checklistItem from './checklistItem';

export default (state = [], action) => {
    switch (action.type) {
        case 'MAKE_IT_PASS':
        case 'MAKE_IT_FAIL':
            return state.map(item => {
                if (item.id === action.id) {
                    return checklistItem(item, action);
                }
                return item;
            });
        case 'ADD_CHECKLISTITEM':
            return [
                ...state,
                {
                    id: action.id,
                    text_ms: action.text_ms,
                    info: action.info,
                    severity: action.severity
                }
            ];
        case 'REMOVE_CHECKLISTITEM':
            let i = 0;
            for (let item of state) {
                if (item.id === action.id)
                    return [
                        ...state.slice(0, i),
                        ...state.slice(i + 1)
                    ];
                i++;
            }
        default:
            return state;
    }
};