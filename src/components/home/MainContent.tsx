import './maincontent.css'
import React from 'react'
import vvz from './static/img/vvz.jpg'
import vvz1 from './static/img/vvz1.gif'
import ddd from './static/img/ddd.jpg'

function MainContent() {
  return (
    <div className='main-content-container'>
      <div className='content-wrap util-15px-pad'>
        <div className='side-a'><img src={ddd} alt="" /></div>
        
      </div>
    </div>
  )
}

export default MainContent