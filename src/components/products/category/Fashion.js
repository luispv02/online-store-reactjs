import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../../header/Header'
import Slider from './Slider'
import Product from './Product'
import Sidebar from '../../sidebar/Sidebar'
import { getProducts } from '../../../actions/products'
import { closeSidebar } from '../../../actions/sidebar'

const Fashion = () => {

  const dispatch = useDispatch()

    const {productsFilter} = useSelector(state => state.products)

    useEffect(() => {
        dispatch(closeSidebar())
        dispatch(getProducts('fashion'))
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
                    <h2>Fashion</h2>
                        <div className="product">
                          {
                            productsFilter.map(product => (
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

export default Fashion