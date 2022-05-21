import React from 'react'
import { Link } from 'react-router-dom'
import './selectioncard.css'

type Tprops = {
    header:string,
    to:string,
    imgFront?:string,
    imgBack?:string,
    alt?:string
}

function SelectionCards({header, to, imgFront, imgBack, alt }:Tprops) {
  return (
    <div className='selections-wrap'>
            <div className='selection-h'><h2>{header}</h2></div>
            <div className='project-card'>
              <div className='project-card-inner'>
                <div className='project-card-inner-front'>
                  <Link to={to}><img src={imgFront} alt={alt}/></Link>
                </div>
                <div className='project-card-inner-back'>
                  <Link to={to}><img src={imgBack} alt={alt}/></Link></div>
              </div>
            </div>
          </div>
  )
}

export default SelectionCards