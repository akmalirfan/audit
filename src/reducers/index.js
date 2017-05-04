import { combineReducers } from 'redux'
import editing from './editing'
import checklistid from './checklistid'
import isFetching from './isFetching'
import checklist from './checklist'

const auditApp = combineReducers({
  editing,
  checklistid,
  isFetching,
  checklist
})

export default auditApp