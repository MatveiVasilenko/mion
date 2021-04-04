import { USER_TOKEN } from './creators';

const ReducerApp = (state, action) => {
    switch (action.type) {
        case USER_TOKEN:
        console.log(action.payload)
        return {
            ...state,
            user: action.payload
        }

        default:
        return state
    }
}
export default ReducerApp