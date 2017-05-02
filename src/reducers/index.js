import { combineReducers } from 'redux'
import checklistid from './checklistid'
import checklist from './checklist'

const auditApp = combineReducers({
  checklistid,
  checklist
})

export default auditApp