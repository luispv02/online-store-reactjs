import { types } from "../types/types"


const initialState = {
    showSidebar: false
}

export const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.showSidebar:
            return {
                ...state,
                showSidebar: true
            }

        case types.hideSidebar:
            return {
                ...state,
                showSidebar: false
            }

        default:
            return state
    }
}