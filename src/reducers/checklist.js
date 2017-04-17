const checklistItem = (state = [], action) => {
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

const checklistItems = (state = [], action) => {
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
            if (state.section !== action.section) {
                return state;
            }

            return {
                section: action.section,
                items: [
                    ...state.items,
                    {
                        id: action.id,
                        text_ms: action.text_ms,
                        info: action.info,
                        severity: action.severity
                    }
                ]
            }
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

const checklist = (state = [], action) => {
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
                ...state,
                {
                    section: action.section,
                    items: []
                }
            ];
        case 'ADD_CHECKLISTITEM':
            return state.map(s => {
                if (s.section !== action.section) {
                    return s;
                }
                
                return checklistItems(s, action)
            })
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

export default checklist