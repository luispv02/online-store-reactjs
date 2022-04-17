import { types } from "../types/types"

const initialState = {
    products: [],
    productsFilter: [],
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.addProducts:
            return {
                ...state,
                products: action.payload
            }

        case types.addProductsFilterCategory:
            return {
                ...state,
                productsFilter:state.products.filter(product => ((!action.payload) || (product.category === action.payload))),
            }

        case types.addProductsFilterName:
            return {
                ...state,
                productsFilter:state.products.filter(product => (!action.payload || product.type === action.payload)),
            }

        default:
            return state
    }
}