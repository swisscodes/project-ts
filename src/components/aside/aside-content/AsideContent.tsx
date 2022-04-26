import './asidecontent.css'
import React from 'react'
import AsideWrap from './content/AsideWrap'
import sideBarData from './aside-content-items/asideData'

type Tprop = {
  slideIn:boolean
}

function AsideContent({slideIn}:Tprop) {
  return (
    <div className='aside-content-wrap'>
      <div className={slideIn?`${'nav-content-main-cut'}`:`${'nav-content-main'}`}>
        <AsideWrap slideIn={slideIn}/>
      </div>
    </div>
  )
}



export default AsideContent