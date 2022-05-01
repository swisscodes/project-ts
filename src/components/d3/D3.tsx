import './d3.css'
import React from 'react'
import { useLocation } from 'react-router-dom'

function D3() {
  
  let location = useLocation()
  let state = location.state
  console.log(state)

  return (
    <div className='d3-container'>
      <div className='d3-main util-15px-pad'>D3</div>
    </div>
  )
}

export default D3