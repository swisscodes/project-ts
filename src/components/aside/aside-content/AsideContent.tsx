import './asidecontent.css'
import React from 'react'

function AsideContent({slideIn}:any) {
  return (
    <div className='aside-content-wrap'>
      <div className={slideIn?`${'nav-content-main-cut'}`:`${'nav-content-main'}`}>ok</div>
    </div>
  )
}

export default AsideContent