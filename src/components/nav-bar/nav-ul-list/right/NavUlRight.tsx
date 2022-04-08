import './navulright.css'
import React from 'react'
import { INavType } from '../../navBarData'
import { navDataRight } from 'components/nav-bar/navBarData'

function NavUlRight() {
  return (
    <ul className='navulright'>
        {navDataRight.map((obj:INavType) =>
        <li key={obj.id}>
            {obj.label}
        </li>
        )}
    </ul>
  )
}

export default NavUlRight