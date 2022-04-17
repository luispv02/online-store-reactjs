
import { useDispatch, useSelector } from 'react-redux'
import { addProductsFilterName } from '../../actions/products'
import { showShoppingCart } from '../../actions/shoppingCard'
import { openSidebar } from '../../actions/sidebar'
import useForm from '../../hooks/useForm'
import ShoppingCart from '../products/shoppingCart/ShoppingCart'



const Header = () => {

    const {productsCart} = useSelector(state => state.shoppingCart);

    const dispatch = useDispatch();
    const [{search}, handleChange] = useForm({
        search: '',
    });

    const handleShowSidebar = () => {
        dispatch(openSidebar())
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        dispatch(addProductsFilterName(search))
    }

    const handleShowShoppingCart = () => {
        dispatch(showShoppingCart())
    }
    
  return (
    <div className="header">
        <div className="header__content">
            <div className="header__content__hamburger">
                <i 
                    className="fa-solid fa-bars"
                    onClick={handleShowSidebar}
                ></i>
            </div>

            <div className="header__content__search">
                <form
                    onSubmit={handleSubmit}
                >
                    <input 
                        type="text" 
                        placeholder='search'
                        name="search"
                        onChange={handleChange}
                    />
                </form>
            </div>

            <div className="header__content__car">
                <i
                    className="fa-solid fa-cart-shopping"
                    onClick={handleShowShoppingCart}
                ></i>
                <span>{productsCart.length !== 0 && productsCart.length}</span>
            </div>

            <div className="header__content__shopping-cart">
                <ShoppingCart />
            </div>
        </div>
    </div>
  )
}

export default Header