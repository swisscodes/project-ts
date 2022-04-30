import './d3.css'
import React from 'react'
import { useLocation } from 'react-router-dom'

function D3() {
  
  let location = useLocation()
  let state = location.state
  console.log(state)

  return (
    <div>D3</div>
  )
}

export default D3