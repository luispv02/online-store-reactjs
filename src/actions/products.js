import { getDataFetch } from "../helpers/fetch";
import { types } from "../types/types"

export const getProducts = (category) => {
    return async(dispatch) => {
        const products = await getDataFetch();

        dispatch(addProducts(products))
        dispatch(addProductFilter(category))
    }
}

export const addProducts = (products) => {
    return {
        type: types.addProducts,
        payload: products
    }
}

export const addProductFilter = (category) => {
    return {
        type: types.addProductsFilterCategory,
        payload: category
    }
}

export const addProductsFilterName = (name) => {
    return {
        type: types.addProductsFilterName,
        payload: name
    }
}

