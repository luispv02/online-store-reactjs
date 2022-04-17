import { useDispatch, useSelector } from "react-redux";
import { deleteProducts, increase, reduce } from "../../../actions/shoppingCard";


const ProductCart = ({image, price, id, precioUnidad}) => {


    const dispatch = useDispatch();


    const {productsCart} = useSelector(state => state.shoppingCart);
    const cantidad = productsCart.map(product => product.id === id ? product.cantidad  ? product.cantidad < 1 ? 1 : product.cantidad : 1 : null);


    const handleDelete = () => {
      dispatch(deleteProducts(id))
    }

    const increaseQuantity = () => {
      dispatch(increase(id))
  
    }

    const reduceAmount = () => {
      dispatch(reduce(id, precioUnidad))
    }

  return (
    <tr>
        <td className="delete">
          <i 
            className="fa-solid fa-xmark"
            onClick={handleDelete}
          ></i>
        </td>

        <td className="image">
          <img
            src={image}
            alt='product cart'
          />
        </td>

        <td className="amount">
          <button 
            className="addition" 
            disabled={productsCart.find(product => product.id === id).cantidad === 1 ? true : false}
            onClick={reduceAmount}
          >-</button>
            
          <span>{cantidad}</span>
            
          <button 
            className="subtraction" 
            onClick={increaseQuantity}
          >+</button>

        </td>
        
        <td className="price">${price}</td>
    </tr>
  )
}

export default ProductCart