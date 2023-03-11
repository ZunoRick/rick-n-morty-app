import { combineReducers } from 'redux'
import characters from './session-reducer'

const rootReducer = combineReducers({
    characters
})
export default rootReducer