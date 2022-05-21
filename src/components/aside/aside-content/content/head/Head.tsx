import './head.css'

import {MutableRefObject, useState} from 'react'
import { useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import sideBarData from '../../aside-content-items/asideData'
import {sideBarType} from '../../aside-content-items/asideData'
import Sub from '../sub/Sub'
import asideIcons, {TasideIcons} from '../../aside-content-items/icons/asideIcons'



export type TrefObj = {
  label?:any
}

function Head({slideIn, isMobile, toggleClick, subState, setSubState}:any) {
  
  const [currentObj, setCurrentObj] = useState<number>()
  const [currentRef, setCurrentRef] = useState<MutableRefObject<TrefObj>>()
  // const [paramsClicked, setParamsClicked] = useState<string>()

  const labelsRef = useRef<TrefObj>({})
  const dropRef = useRef<TrefObj>({})
  const location = useLocation()
  const  params = location.pathname.match(/(?<=\/).*/)?.[0] || '/'
  // if( paramsClicked) {
  //   params = paramsClicked
  // }


  return (
    <div className='aside_icons-container'>
					{sideBarData.map((item) => {
             
					return (
						<div  key={item.id} 
                  className='aside_icons-main'
            >
              <Link className={item.url && params?.startsWith(item.url)?'aside_svg_div-wrap activelink':'aside_svg_div-wrap'} 
                to="#"
                onClick={(e) => clickedLink(e, item)}
              >
                <div className='aside_icon'>{asideIcons[item.icon as keyof TasideIcons]}</div>
                <div className={item.subItem && !slideIn?
                  `${'aside_text sudo'}`:
                  item.subItem && slideIn && isMobile?`${'aside_text sudo-mobile'}`:`${'aside_text'}`}
                  ref={(el) => giveRef(el, item, labelsRef) }
                >
                  {item.label}
                </div>
              </Link>
              <div ref={(el) => giveRef(el, item, dropRef)}>
                {item.subItem && (!slideIn || isMobile) && (
                  <Sub data={{...item}} slideIn={slideIn} currentObj={currentObj} subState={subState} setSubState={setSubState} currentRef={currentRef} isMobile={isMobile} toggleClick={toggleClick}/>)
                }
              </div>
						</div>
          )
            
            })}
        </div>
  )

  //Hoisted
  function clickedLink(e:React.SyntheticEvent, item:sideBarType) {
    e.preventDefault()

    
    setCurrentObj(item.id)
    // if(!subState) {
    //   setSubState((subState:boolean) => !subState)
    // }
    setSubState((subState:boolean) => !subState)

    let getIcon = labelsRef.current[item.label as keyof TrefObj]
    setCurrentRef(labelsRef)
    // let b = dropRef.current[item.label as keyof refObj]
    
    if(slideIn && !isMobile) {
      toggleClick((slideIn:boolean)=> !slideIn)
    }

    if((getIcon.classList.contains('sudo')) || ((getIcon.classList.contains('sudo-mobile')) && slideIn)) {
      getIcon.classList.toggle('folder-indicator')
    }
    else {
      setSubState((subState:boolean) => !subState)
      if(isMobile) {
        toggleClick((slideIn:boolean)=> !slideIn)
      }
    }
    
    for(const [, v] of Object.entries(labelsRef.current)) {
      if(getIcon !== v) {
        if(v.classList.contains('folder-indicator')) {
          v.classList.remove('folder-indicator')
          setSubState((subState:boolean) => !subState)
        }

      }
      
    }

  }

  function giveRef(el:any, item:any, ref:any) {
    
    ref.current = {...labelsRef.current, [item.label]:el}
  }
  
}

export default Head