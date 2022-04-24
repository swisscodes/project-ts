import './asidecontent.css'
import React from 'react'
import { Link } from 'react-router-dom'
import sideBarData from './aside-content-items/asideData'
import { icons } from 'react-icons'

function AsideContent({slideIn}:any) {
  return (
    <div className='aside-content-wrap'>
      <div className={slideIn?`${'nav-content-main-cut'}`:`${'nav-content-main'}`}>
        {sideBarData.map((item) => {
          return <div className='aside_icons-container'>
              <Link className='aside_svg_div-wrap' to="#">
                <div className='kkkk'>{item.icon}</div>
                <div className='aside_text'>{item.label}</div>
              </Link>
          </div>
        })}
      </div>
    </div>
  )
}



export default AsideContent