import * as types from '../actions/action-types'

export default function userReducer(state = {}, action) {
    switch (action.type) {
        case types.GET_PRODUCT_DETAILS_SUCCESS:
            return { ...state, ...action.product }
        case types.GET_PRODUCT_DETAILS_FAILURE:
            return { ...state, ...action.error }
        default:
            return state
    }
}
