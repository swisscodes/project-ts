import './asidenav.css'
// import goldenview from './goldenview.jpeg'
import logo from './logo.png'
import React from 'react'

function AsideNav({slideIn, toggleClick=(f:MouseEvent)=> f}:any) {
  return (
    <div className='aside-nav-container'>
			<div className={slideIn?`${'aside-nav-main-full'}`:`${'aside-nav-main'}`}>
        <div className='aside-nav-logo'>
          <div className={slideIn?`${'image-logo-hide'}`:`${'image-logo'}`}><img src={logo} alt="" /></div>
          <div className='aside-svg'>
            <svg className='svg-nav' onClick={(e)=>toggleClick(e)}>
            <g className='grouped-toggle-path'>
              <path className='toggle-path1' d="M5 10 L30 10 "></path>
              <path className='toggle-path2' d="M0 16 L30 16 "></path>
              <path className='toggle-path3' d="M10 22 L30 22 "></path>
            </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AsideNav