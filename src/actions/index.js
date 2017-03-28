export const addSection = (section) => ({
    type: 'ADD_SECTION',
    section
})

export const addItem = (item) => ({
    type: 'ADD_CHECKLISTITEM',
    item,
    id:1,
    text_ms: 'adsf',
    info: [],
    severity: 'sadf'
})

export const setVisibilityFilter = (filter) => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})

export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id
})