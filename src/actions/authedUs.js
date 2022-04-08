export const SET_AUTHED_US = 'SET_AUTHED_US'
export const RESET_AUTHED_US = 'RESET_AUTHED_US'
export function setAuthedUs (id) {
    return {
        type: SET_AUTHED_US,
        id,
    }
}
export function resetAuthedUs (id) {
    return {
        type: RESET_AUTHED_US,
        id,
    }
}
