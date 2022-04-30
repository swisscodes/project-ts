import './sub.css'
import React from 'react'
import { Link } from 'react-router-dom'
import {sideBarType} from '../../aside-content-items/asideData'


type TsupProps = {
  data:sideBarType,
  currentObj:number|undefined,
  subState:boolean
}

function Sub({data, currentObj, subState}:TsupProps) {
  return (
    <div className={subState && currentObj === data.id?`${'show'}`:`${'dont_show'}`}>
      {data.subItem?.map((item) => 
        (<div key={item.id} className='subitems-main'><Link to={item.url} state={{...item}}>{item.label}</Link></div>)
      )}
    </div>
  )

  //Hoisted
  function subLink(e:React.SyntheticEvent) {
    
  }
}
//

export default Sub