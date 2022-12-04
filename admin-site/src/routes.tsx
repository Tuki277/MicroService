import React from 'react'
import { Route, Routes } from 'react-router';
import Category from './pages/category';
import Home from './pages/home';
import Login from './pages/login/login';
import Order from './pages/order';
import OrderDetail from './pages/order/orderDetail';
import Product from './pages/product';
import Statistical from './pages/statistical';
import User from './pages/user';

const routes = () => {
  return (
    <Routes>
        <Route path='/login' element={ <Login /> }/>
        <Route path='/' element={ <Home /> }/>
        <Route path='/statistical' element={ <Statistical /> }/>
        <Route path='/product' element={ <Product /> }/>
        <Route path='/category' element={ <Category /> }/>
        <Route path='/order' element={ <Order /> }/>
        <Route path='/order/detail' element={ <OrderDetail /> }/>
        <Route path='/user' element={ <User /> }/>
    </Routes>
  )
}

export default routes