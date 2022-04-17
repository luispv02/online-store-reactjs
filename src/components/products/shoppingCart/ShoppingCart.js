
import {useDispatch, useSelector} from 'react-redux'
import { hideShoppingCart } from '../../../actions/shoppingCard'
import ProductsCart from './ProductsCart';


const ShoppingCart = () => {

  const dispatch = useDispatch()

  const {showShoppingCart} = useSelector(state => state.shoppingCart);
  const {productsCart} = useSelector(state => state.shoppingCart)
 
  const handleHideShoppingCart = () => {
    dispatch(hideShoppingCart())
  }

 
  return (
    <div className={showShoppingCart ? 'aggregate-products show' : 'aggregate-products' }>
        
        <div className="icon-hide-shoppingCart">
          <i 
            className="fa-solid fa-xmark"
            onClick={handleHideShoppingCart}
          ></i>
        </div>

        <div className="aggregate-products__content">
            <h3>Shopping Cart</h3>

            {
              productsCart.length === 0
              ? <p>There are no products</p>
              : <ProductsCart />
            }
        </div>
    </div>
  )
}

export default ShoppingCart