import './navprofile.css'
import React from 'react'
import femi from './img/femi.jpg'

function NavProfile({image}:any) {
  return (
      <div className='navprofile-container'>
        <img src={femi} alt="femi face" />
			</div>
  )
}

export default NavProfile