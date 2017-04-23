const checklistItem = (item = [], action) => {
    switch (action.type) {
        case 'MAKE_IT_PASS':
            return {
                ...item,
                value: 'passed'
            }
        case 'MAKE_IT_FAIL':
            return {
                ...item,
                value: 'failed'
            }
        case 'ADD_INFO':
            return {
                ...item,
                info: [
                    ...item.info,
                    {
                        text: action.text
                    }
                ]
            }
        default:
            return item
    }
}

const section = (section = {}, action) => {
    switch (action.type) {
        case 'MAKE_IT_PASS':
        case 'MAKE_IT_FAIL':
            return section.items.map(item => {
                return (item.id === action.id) ?
                    checklistItem(item, action) : item
            })
        case 'ADD_INFO':
            return (section.section === action.section) ? {
                section: action.section,
                items: section.items.map(item => {
                    return (item.id === action.id) ?
                        checklistItem(item, action) : item
                })
            } : section
        case 'ADD_CHECKLISTITEM':
            return (section.section === action.section) ? {
                section: action.section,
                items: [
                    ...section.items,
                    {
                        id: action.id,
                        text_ms: action.text_ms,
                        info: action.info,
                        severity: action.severity
                    }
                ]
            } : section
        case 'REMOVE_CHECKLISTITEM':
            let i = 0
            for (let item of section.items) {
                if (item.id === action.id)
                    return [
                        ...section.items.slice(0, i),
                        ...section.items.slice(i + 1)
                    ]
                i++
            }
        default:
            return section
    }
}

const checklist = (state = [], action) => {
    switch (action.type) {
        case 'MAKE_IT_PASS':
        case 'MAKE_IT_FAIL':
            return state.map(sec => {
                return (sec.section === action.section) ?
                    section(sec, action) : section
            })
        case 'ADD_SECTION':
            return [
                ...state,
                {
                    section: action.section,
                    items: []
                }
            ]
        case 'ADD_CHECKLISTITEM':
        case 'ADD_INFO':
            return state.map(sec => {
                return (sec.section === action.section) ?
                    section(sec, action) : sec
            })
        case 'REMOVE_SECTION':
            let i = 0
            for (let section of state) {
                if (section.section === action.section)
                    return [
                        ...state.slice(0, i),
                        ...state.slice(i + 1)
                    ]
                i++
            }
        default:
            return state
    }
}

export default checklist