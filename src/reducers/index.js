import { combineReducers } from 'redux'
import global from './global-reducer'
import product from './product-reducer'

// naming here matters, this is how we will reference data in components
const rootReducer = combineReducers({
    global,
    product
})

export default rootReducer
