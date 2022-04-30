import './payments.css'
import React from 'react'
import { useLocation } from 'react-router-dom'

function Payments() {

    let location = useLocation()
    console.log(location.state)
  return (
    <div>Payments</div>
  )
}

export default Payments