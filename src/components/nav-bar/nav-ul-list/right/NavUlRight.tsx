import './navulright.css'
import React from 'react'
import { INavType } from '../../navBarData'
import { navDataRight } from 'components/nav-bar/navBarData'
import NavProfile from './NavProfile'

function NavUlRight() {
  return (
    <div className='navulwrap'> 
      <ul className='navulright'>
          {navDataRight.map((obj:INavType) =>
          <li key={obj.id}>
              {<obj.icon />}
          </li>
          )}
      </ul>
      <div className='profile-div'><NavProfile/></div>
    </div>
  )
}

export default NavUlRight