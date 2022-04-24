import './asidecontent.css'
import React from 'react'
import sideBarData from './aside-content-items/asideData'
import project1 from '../aside-content/aside-content-items/icons/project1.svg'

function AsideContent({slideIn}:any) {
  return (
    <div className='aside-content-wrap'>
      <div className={slideIn?`${'nav-content-main-cut'}`:`${'nav-content-main'}`}>
        {sideBarData.map((item) => {
          return <div className='icons-container'>{item.icon}</div>
        })}
      </div>
    </div>
  )
}



export default AsideContent