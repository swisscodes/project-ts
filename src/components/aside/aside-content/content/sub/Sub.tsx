import './sub.css'
import React from 'react'
import {sideBarType} from '../../aside-content-items/asideData'

type TsupProps = {
  data:sideBarType,
  currentObj:number|undefined,
  subState:boolean
}

function Sub({data, currentObj, subState}:TsupProps) {
  return (
    console.log(data),
    <>
    <div className={subState && currentObj === data.id?`${'show'}`:`${'dont_show'}`}>
      {data.subItem?.map((item) => item.label)}
    </div>
    </>
  )
}

export default Sub