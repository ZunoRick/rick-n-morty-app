import { SET_CHARACTERS } from '../src/actions/action-types'

const initialState = {
    list : []
}

function characters(state = initialState, action){
    switch (action.type) {
        case SET_CHARACTERS :
            return {...state,...action.payload}
        default:
            return state
    }
}

export default characters