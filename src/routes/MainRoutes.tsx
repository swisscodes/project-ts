import React from 'react'
import {Routes, Route} from 'react-router-dom';
import HomePage from 'pages/HomePage';
import Projects from 'pages/Projects';
import D3Page from 'pages/d3Pages/D3Page';
import SelectionPage from 'pages/d3Pages/SelectionPage';
import OrdersPage from 'pages/OrdersPage';
import PaymentsPage from 'pages/PaymentsPage';

function MainRoutes() {
  return (
    <Routes>
        <Route path='/' element={<HomePage />} />
        {/** Projects Routes */}
        <Route path='projects' element={<Projects />} />
          {/** D3 Routes */}
          <Route path='projects/d3' element={<D3Page />} />
            <Route path='projects/d3/selection' element={<SelectionPage />} />
          {/** End D3 Routes */}
        {/** End of Projects Routes */}
        <Route path='/analytics/orders' element={<OrdersPage />} />
        <Route path='/analytics/payments' element={<PaymentsPage />} />
        <Route path='*' element={"Page not found"} />
    </Routes>
  )
}

export default MainRoutes