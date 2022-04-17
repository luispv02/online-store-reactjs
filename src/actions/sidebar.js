import { types } from "../types/types"

export const openSidebar = () => {
    return {
        type: types.showSidebar
    }
}

export const closeSidebar = () => {
    return {
        type: types.hideSidebar
    }
}