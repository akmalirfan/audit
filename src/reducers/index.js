import { combineReducers } from 'redux'
import checklist from './checklist'

const auditApp = combineReducers({
  checklist
})

export default auditApp