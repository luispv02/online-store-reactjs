import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { productsReducer } from '../reducers/productsReducer';
import { sidebarReducer } from '../reducers/sidebarReducer';
import thunk from 'redux-thunk'
import { shoppingCartReducer } from '../reducers/shoppingCartReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
    sidebar: sidebarReducer,
    products: productsReducer,
    shoppingCart: shoppingCartReducer
})

export const store = createStore(
    reducers, 
    composeEnhancers(
        applyMiddleware(thunk)
    )
);