import './asidecontent.css'
import React from 'react'
import sideBarData from './aside-content-items/asideData'

function AsideContent({slideIn}:any) {
  return (
    <div className='aside-content-wrap'>
      <div className={slideIn?`${'nav-content-main-cut'}`:`${'nav-content-main'}`}>
        {sideBarData.map((item) => {
          return item.icon
        })}
      </div>
    </div>
  )
}



export default AsideContent