import { useDispatch } from "react-redux"
import { startAddProductsCart } from "../../../actions/shoppingCard"


const Product = ({name, brand, price, image, id}) => {
    const dispatch = useDispatch()

    const handleAddCart = () => {
        dispatch(startAddProductsCart({price, image, name, id, precioUnidad: price ,cantidad: 1}))
    }
  return (
    
        <div className="product__content__card">
            <div className="card__image">
                <img 
                    src={image}
                    alt='product'
                />
            </div>

            <div className="card__body">
                <p className="name">{name}</p>
                <p className="brand">{brand}</p>
                <p className="price">${price}</p>

                <button
                    onClick={handleAddCart}
                >Add to cart</button>
            </div>
        </div>
  )
}

export default Product