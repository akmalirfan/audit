const checklistItem = (item = {}, action) => {
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

let xhr = new XMLHttpRequest()
const checklist = (state = [], action) => {
    switch (action.type) {
        case 'MAKE_IT_PASS':
        case 'MAKE_IT_FAIL':
        case 'ADD_CHECKLISTITEM':
        case 'ADD_INFO':
            return state.map(sec => {
                return (sec.section === action.section) ?
                    section(sec, action) : sec
            })
        case 'ADD_SECTION':
            return [
                ...state,
                {
                    section: action.section,
                    items: []
                }
            ]
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
        case 'RECEIVE_CHECKLIST':
            return action.checklist
        case 'SAVE':
            xhr.open('POST', 'http://localhost/audit_all/save.php')
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    console.log(xhr.responseText)
                }
            }
            xhr.send(`auditid=${action.auditid}&jdoc=${JSON.stringify(action.jdoc)}`)

            return state
        case 'SAVE_CHECKLIST':
            xhr.open('POST', `http://localhost/audit_all/save_checklist.php`)
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    console.log(xhr.responseText)
                }
            }
            let editingstring = (action.editing) ? '&editing':''
            xhr.send(`checklistid=${action.checklistid}&scheme=${action.scheme}&jdoc=${JSON.stringify(action.jdoc)}${editingstring}`)

            return state
        default:
            return state
    }
}

export default checklist