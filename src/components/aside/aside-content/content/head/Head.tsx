import './head.css'
import {useState} from 'react'
import { useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import sideBarData from '../../aside-content-items/asideData'
import {sideBarType} from '../../aside-content-items/asideData'
import Sub from '../sub/Sub'

type refObj = {
  label?:any
}

function Head({slideIn, isMobile, toggleClick}:any) {
  
  const [subState, setSubState] = useState<boolean>(false)
  const [currentObj, setCurrentObj] = useState<number>()

  const labelsRef = useRef<refObj>({})
  const dropRef = useRef<refObj>({})
  const location = useLocation()
  var params = location.pathname.match(/(?<=\/).*/)?.[0] || '/'

  return (
    <div className='aside_icons-container'>
					{sideBarData.map((item) => {
					return (
						<div  key={item.id} 
                  className='aside_icons-main'
            >
								<Link className={item.url && params?.startsWith(item.url)?'aside_svg_div-wrap activelink':'aside_svg_div-wrap'} 
                  to="#"
                  onClick={(e) => clickedLink(e, item, setSubState, slideIn)}
                >
								  <div className='aside_icon'>{item.icon}</div>
								  <div className={item.subItem && !slideIn?
                    `${'aside_text sudo'}`:
                    item.subItem && slideIn && isMobile?`${'aside_text sudo-mobile'}`:`${'aside_text'}`}
                    ref={(el) => giveRef(el, item, labelsRef) }
                  >
                    {item.label}
                  </div>
								</Link>
								<div ref={(el) => giveRef(el, item, dropRef)}>
                  {item.subItem && (!slideIn || isMobile) && <Sub data={item} currentObj={currentObj} subState={subState}/>}
                </div>
						</div>
          )
            
            })}
        </div>
  )

  //Hoisted
  function clickedLink(e:React.SyntheticEvent, item:sideBarType, setSubState:Function, slideIn:boolean) {
    e.preventDefault()
    
    setCurrentObj(item.id)
    if(!subState) {
      setSubState((subState:boolean) => !subState)
    }
    
    

    let a = labelsRef.current[item.label as keyof refObj]
    let b = dropRef.current[item.label as keyof refObj]
    
    if(slideIn && !isMobile) {
      toggleClick((slideIn:boolean)=> !slideIn)
    }
    

    if((a.classList.contains('sudo')) || ((a.classList.contains('sudo-mobile')) && slideIn)) {
      a.classList.toggle('rrr')
    }
    
    for(const [k, v] of Object.entries(labelsRef.current)) {
      if(a !== v) {
        if(v.classList.contains('rrr')) {
          v.classList.remove('rrr')
          setSubState((subState:boolean) => !subState)
        }

      }
      else {
        if(subState) {
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