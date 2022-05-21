import './d3.css'
import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import SelectionCards from './SelectionCards'
import {capture, capture1} from './static/img/index'

function D3() {
  
  let location = useLocation()
  let state = location.state
  console.log(state)

  return (
    <div className='d3-container'>
      <div className='d3-main util-15px-pad full-height'>
        <div className='d3-projects-main'>
          <SelectionCards header={'Selections'} to={'selection'} imgFront={capture} imgBack={capture1} alt={'select-image'}/>
          <SelectionCards header={'something else not ready2'} to={'top-10'}  />
          <SelectionCards header={'something else not ready3'} to={'coming-soon'} />
        </div>
      </div>
    </div>
  )
}

export default D3