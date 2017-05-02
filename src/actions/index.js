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

export const addInfo = (text, section, id) => ({
    type: 'ADD_INFO',
    section,
    id,
    text
})

export const makeItPass = (section, id) => ({
    type: 'MAKE_IT_PASS',
    section,
    id
})

export const makeItFail = (section, id) => ({
    type: 'MAKE_IT_FAIL',
    section,
    id
})