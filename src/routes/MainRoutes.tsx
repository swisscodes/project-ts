import React from 'react'
import {Routes, Route} from 'react-router-dom';
import HomePage from 'pages/HomePage';

function MainRoutes() {
  return (
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='*' element={"Page not found"} />
    </Routes>
  )
}

export default MainRoutes