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

export const addInfo = (text, section, itemid) => ({
    type: 'ADD_INFO',
    section,
    id:itemid,
    text
})

export const setVisibilityFilter = (filter) => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})

export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id
})