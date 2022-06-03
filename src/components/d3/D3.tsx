import './d3.css'
import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import SelectionCards from './SelectionCards'
import {capture, capture1, capture2, capture3} from './static/img/index'

function D3() {
  
  let location = useLocation()
  let state = location.state
  console.log(state)

  return (
    <div className='d3-container'>
      <div className='d3-main util-15px-pad full-height'>
        <div className='d3-projects-main'>
          <SelectionCards header={'Selections'} to={'selection'} imgFront={capture} imgBack={capture1} alt={'select-image'}/>
          <SelectionCards header={'ImDb Rating'} to={'top-10'}  imgFront={capture2} imgBack={capture3} alt={'solar-system-image'}/>
          <SelectionCards header={'Solar System'} to={'solar-system'} />
        </div>
      </div>
    </div>
  )
}

export default D3