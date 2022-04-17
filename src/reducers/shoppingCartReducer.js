import { types } from "../types/types"

const initialState = {
    showShoppingCart: false,
    productsCart: [],
    totalPrice: 0,
}

export const shoppingCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.showShoppingCart:
            return {
                ...state,
                showShoppingCart: true
            }

        case types.hideShoppingCart:
            return {
                ...state,
                showShoppingCart: false
            }

        case types.addProductsCart:
            return {
                ...state,
                productsCart: state.productsCart.find(product => product.id === action.payload.id) ? state.productsCart : [...state.productsCart, action.payload],

                totalPrice: state.productsCart.find(product => product.id === action.payload.id) ? state.totalPrice : state.totalPrice + action.payload.precioUnidad
            }
    
        case types.deleteProductsCart:
            return {
                ...state,
                productsCart: state.productsCart.filter(product => product.id !== action.payload),
                totalPrice: state.totalPrice - state.productsCart.find(product => product.id === action.payload).price 
            }

        case types.increaseQuantity:{
            return {
                ...state,
  
                productsCart: state.productsCart.map(product =>  product.id === action.payload ? { ...product, cantidad: product.cantidad + 1, price: product.precioUnidad * (product.cantidad + 1)}  : product ),

                totalPrice: state.totalPrice + state.productsCart.find(product => product.id === action.payload).precioUnidad
            }
        }

        case types.reduceAmount:{
            return {
                ...state,
                productsCart: state.productsCart.map(product => product.id === action.payload ? { ...product, cantidad: product.cantidad - 1 < 1 ? 1 : product.cantidad - 1,  price: product.precioUnidad * (product.cantidad - 1) < product.precioUnidad ? product.precioUnidad : product.precioUnidad * (product.cantidad - 1)} : product),

                totalPrice: state.totalPrice - state.productsCart.find(product => product.id === action.payload).precioUnidad 
            }
        }

        default:
            return state
    }
}