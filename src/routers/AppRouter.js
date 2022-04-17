import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AllProducts from '../components/products/category/AllProducts'
import Electronics from '../components/products/category/Electronics'
import Fashion from '../components/products/category/Fashion'
import HomeAppliances from '../components/products/category/HomeAppliances'
import Pets from '../components/products/category/Pets'
import ShoppingCart from '../components/products/shoppingCart/ShoppingCart'




const AppRouter = () => {

  return (
    <BrowserRouter>
        <Routes>
            <Route  path="/" element={ <AllProducts /> }/>
            <Route  path="/electronics" element={ <Electronics /> }/>
            <Route  path="/home" element={ <HomeAppliances /> }/>
            <Route  path="/fashion" element={ <Fashion /> }/>
            <Route  path="/pets" element={ <Pets /> }/>
            <Route  path="/car" element={ <ShoppingCart /> }/>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter