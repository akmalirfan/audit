import { combineReducers } from 'redux'
import editing from './editing'
import checklistid from './checklistid'
import scheme from './scheme'
import isFetching from './isFetching'
import checklist from './checklist'

const auditApp = combineReducers({
  editing,
  checklistid,
  scheme,
  isFetching,
  checklist
})

export default auditApp