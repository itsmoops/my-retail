import * as firebase from 'firebase'
import * as types from './action-types'
import { loadingStateChange } from './global-actions'

function getProductDetailsSuccess(product) {
    return {
        type: types.GET_PRODUCT_DETAILS_SUCCESS,
        product
    }
}

function getProductDetailsFailed(error) {
    return {
        type: types.GET_PRODUCT_DETAILS_FAILURE,
        error
    }
}

export function getProductDetails() {
    return (dispatch) => {
        try {
            dispatch(loadingStateChange(true))
            const productRef = firebase
                .database()
                .ref('CatalogEntryView')
                .child('0')
            productRef.on('value', (snapshot) => {
                const productData = snapshot.val()
                dispatch(getProductDetailsSuccess(productData))
                dispatch(loadingStateChange(false))
            })
        } catch (ex) {
            dispatch(getProductDetailsFailed({ msg: 'Product could not be retrieved' }))
            dispatch(loadingStateChange(false))
        }
    }
}
