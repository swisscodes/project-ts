import './navbar.css'
import React from 'react'
import NavUlRight from './nav-ul-list/right/NavUlRight'

function NavBar({slideIn, }:any) {
  return (
    <div className='navbar-container'>
      <div className={slideIn?`${'nav-wrapper-full'}`:`${'nav-wrapper'}`}>
        <div className='nav-left-right-wrap'>
          <div className='navbar-left'><div>ABC Company</div></div>
          <div className="navbar-right"><NavUlRight /></div>
        </div>
      </div>
		</div>
  )
}

export default NavBar