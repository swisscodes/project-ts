import React from 'react'
import {Routes, Route} from 'react-router-dom';
import HomePage from 'pages/HomePage';
import D3Page from 'pages/D3Page';
import OrdersPage from 'pages/OrdersPage';
import PaymentsPage from 'pages/PaymentsPage';

function MainRoutes() {
  return (
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/projects/d3' element={<D3Page />} />
        <Route path='/analytics/orders' element={<OrdersPage />} />
        <Route path='/analytics/payments' element={<PaymentsPage />} />
        <Route path='*' element={"Page not found"} />
    </Routes>
  )
}

export default MainRoutes