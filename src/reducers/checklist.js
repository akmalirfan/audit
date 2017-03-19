import checklistItems from './checklistItems';

export default (state = [], action) => {
    switch (action.type) {
        case 'MAKE_IT_PASS':
        case 'MAKE_IT_FAIL':
            return state.map(section => {
                return (section.section === action.section) ? {
                    ...section,
                    items: checklistItems(section.items, action)
                } : section;
            });
        case 'ADD_SECTION':
            return [
                {
                    section: action.section,
                    items: []
                }
            ];
        case 'REMOVE_SECTION':
            let i = 0;
            for (let section of state) {
                if (section.section === action.section)
                    return [
                        ...state.slice(0, i),
                        ...state.slice(i + 1)
                    ];
                i++;
            }
        default:
            return state;
    }
}