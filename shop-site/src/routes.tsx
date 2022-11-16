import React from 'react'
import { Route, Routes } from 'react-router'
import Blog from './pages/blog/blog'
import BlogDetail from './pages/blog/blogDetail'
import Cart from './pages/cart/cart'
import Checkout from './pages/checkout/checkout'
import Contact from './pages/contact/contact'
import Home from './pages/home/home'
import Login from './pages/login/login'
import Register from './pages/register/register'
import Shop from './pages/shop/shop'
import ShopDetail from './pages/shop/shopDetail'

const routes = () => {
  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/shop' element={ <Shop /> } />
      <Route path='/product/detail' element={ <ShopDetail /> } />
      <Route path='/cart' element={ <Cart /> } />
      <Route path='/checkout' element={ <Checkout /> } />
      <Route path='/contact' element={ <Contact /> } />
      <Route path='/blog' element={ <Blog /> } />
      <Route path='/blog/detail' element={ <BlogDetail /> } />
      <Route path='/login' element={ <Login /> } />
      <Route path='/register' element={ <Register /> } />
    </Routes>
  )
}

export default routes