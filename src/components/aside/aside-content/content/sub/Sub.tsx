import './sub.css'
import React, { MutableRefObject } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {sideBarType} from '../../aside-content-items/asideData'
import asideIcons, {TasideIcons} from '../../aside-content-items/icons/asideIcons'
import {TrefObj} from '../head/Head'


type TsupProps = {
  slideIn:boolean,
  data:sideBarType,
  currentObj:number|undefined,
  subState:boolean,
  currentRef:MutableRefObject<TrefObj>|undefined
  setSubState:Function
  isMobile:boolean
  toggleClick:Function
}

function Sub({slideIn, data, currentObj, subState, currentRef, setSubState, isMobile, toggleClick}:TsupProps) {

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
    console.log(currentRef)
    let a = currentRef?.current[data.label as keyof TrefObj]
    console.log(a)
    a.classList.toggle('rrr')
    setSubState((subState:boolean)=> !subState)
    isMobile && toggleClick((slideIn:boolean)=> !slideIn)
    

   
  }
}
//

export default Sub