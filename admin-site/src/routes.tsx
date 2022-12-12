import React from 'react'
import { Route, Routes } from 'react-router';
import Category from './pages/Category';
import Code from './pages/Code/code';
import Feedback from './pages/Feedback/feedback';
import Home from './pages/Home';
import Login from './pages/Login/login';
import Order from './pages/Order';
import OrderDetail from './pages/Order/orderDetail';
import Product from './pages/Product';
import Statistical from './pages/Statistical';
import User from './pages/User';
import ProtectedRoute from './utils/ProtectedRoutes';

const routes = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route element={<ProtectedRoute />}>
        <Route path='/' element={<Home />} />
        <Route path='/statistical' element={<Statistical />} />
        <Route path='/product' element={<Product />} />
        <Route path='/category' element={<Category />} />
        <Route path='/order' element={<Order />} />
        <Route path='/code' element={<Code />} />
        <Route path='/feedback' element={<Feedback />} />
        <Route path='/order/detail/:orderId' element={<OrderDetail />} />
        <Route path='/user' element={<User />} />
      </Route>
    </Routes>
  )
}

export default routes