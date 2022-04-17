
import { useSelector } from "react-redux";
import ProductCart from "./ProductCart";

const ProductsCart = () => {

  
  const {productsCart} = useSelector(state => state.shoppingCart);
  const {totalPrice} = useSelector(state => state.shoppingCart);


  return (
    <div className="aggregate-products__content__products-buy">
      <table >
        <thead>
          <tr>
            <th></th>
            <th>Product</th>
            <th>Amount</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>       
          {
            productsCart.map(product => (
              <ProductCart 
                key={product.id}
                {...product}
              />
            ))
          }
        </tbody>
      </table>

              
      <div className="aggregate-products__content__total">
          <p>Total:  <span>{totalPrice}</span></p>
          <button
          >Continue</button>
      </div>
    </div>
  );
};

export default ProductsCart;
