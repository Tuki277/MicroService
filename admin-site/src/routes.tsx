import React from 'react'
import { Route, Routes } from 'react-router';
import Home from './pages/home';
import Login from './pages/login/login';

const routes = () => {
  return (
    <Routes>
        <Route path='/login' element={ <Login /> }/>
        <Route path='/' element={ <Home /> }/>
    </Routes>
  )
}

export default routes