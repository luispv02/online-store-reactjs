import { types } from "../types/types"

export const showShoppingCart = () => {
    return {
        type: types.showShoppingCart
    }
}

export const hideShoppingCart = () => {
    return {
        type: types.hideShoppingCart
    }
}

export const startAddProductsCart = (product) => {
    return (dispatch) => {

        alert('Product added to cart')

        dispatch(addProductsCart(product))
    }
}

export const addProductsCart = (product) =>{
    return {
        type: types.addProductsCart,
        payload: {
            ...product,
        }
    }
}

export const deleteProducts = (id, cantidad) =>{
    return {
        type: types.deleteProductsCart,
        payload: id
    }
}

export const increase = (id) =>{
    return{
        type: types.increaseQuantity,
        payload: id
    }
}

export const reduce = (id, precioUnidad) =>{
    return{
        type: types.reduceAmount,
        payload: id
    }
}