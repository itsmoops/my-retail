import * as types from './action-types'

export function checkDeviceSize() {
    const mobileReg = new RegExp(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/)
    return {
        type: types.CHECK_DEVICE_SIZE,
        isSmallDevice: mobileReg.test(window.navigator.userAgent) || window.innerWidth <= 768
    }
}

export function loadingStateChange(loading) {
    return {
        type: types.LOADING_STATE_CHANGE,
        loading
    }
}

export function toggleMenuDropdown(menuOpen) {
    return {
        type: types.TOGGLE_MENU_DROPDOWN,
        menuOpen
    }
}
