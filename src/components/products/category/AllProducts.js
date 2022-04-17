
import { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import Slider from './Slider'
import Product from './Product'
import Sidebar from '../../sidebar/Sidebar'
import { getProducts } from '../../../actions/products'
import { closeSidebar } from '../../../actions/sidebar'
import Header from '../../header/Header'


const AllProducts = () => {

    const dispatch = useDispatch()
    
    const {productsFilter} = useSelector(state => state.products)

    useEffect(() => {
        dispatch(closeSidebar())
        dispatch(getProducts(''))
    }, [dispatch])

  return (
    <div className="container">
        <div className="sidebar">
            <Sidebar />
        </div>    
        
        <div className="products">
        <Header />
            <div className="products__content">
                <div className="products__content__slider">
                    <Slider />
                </div>  
                
                <div className="products__content__all-products">
                    <h2>All Products</h2>
                        <div className="product">

                            {
                                productsFilter.length === 0 
                                ? <h3>No products found</h3>
                                : productsFilter.map(product => (
                                    <Product 
                                        key={product.id}
                                        {...product}
                                    />
                                ))

                            }

                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AllProducts