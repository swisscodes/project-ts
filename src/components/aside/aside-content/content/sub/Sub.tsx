import './sub.css'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import {sideBarType} from '../../aside-content-items/asideData'
import asideIcons, {TasideIcons} from '../../aside-content-items/icons/asideIcons'


type TsupProps = {
  data:sideBarType,
  currentObj:number|undefined,
  subState:boolean,
}

function Sub({data, currentObj, subState}:TsupProps) {

  let location = useLocation()
  const  params = location.pathname.match(/(?<=\/).*/)?.[0] || '/'

  return (
    <div className={subState && currentObj === data.id?`${'show'}`:`${'dont_show'}`}>
      {data.subItem?.map((item) => 
        (
        <div key={item.id} className='subitems-main'>
          <Link className={item.url && 
            params?.startsWith(item.url)?'aside_svg_div-wrap-sub activelink-sub':'aside_svg_div-wrap-sub'} 
            to={item.url} state={{...item}} onClick={(e)=>subLink(e, data)}
          >
            <div className='aside_icon-sub'>{asideIcons[item.icon as keyof TasideIcons]}</div>
            <div className='aside_text-sub'>{item.label}</div>
          </Link>
        </div>
        )
      )}
    </div>
  )

  //Hoisted
  function subLink(e:React.SyntheticEvent, data:sideBarType) {

  }
}
//

export default Sub