import './d3.css'
import React from 'react'
import { useLocation, Link } from 'react-router-dom'

function D3() {
  
  let location = useLocation()
  let state = location.state
  console.log(state)

  return (
    <div className='d3-container'>
      <div className='d3-main util-15px-pad'>
        <div className='d3-selection-main'>
          <Link to='selection'>Selections</Link>
        </div>
      </div>
    </div>
  )
}

export default D3