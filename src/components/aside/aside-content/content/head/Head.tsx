import './head.css'
import { Link, useLocation } from 'react-router-dom'
import sideBarData from '../../aside-content-items/asideData'
import {sideBarType} from '../../aside-content-items/asideData'

function Head({slideIn}:any) {

  const location = useLocation()
  var params = location.pathname.match(/(?<=\/).*/)?.[0] || '/'

  return (
    <div className='aside_icons-container'>
					{sideBarData.map((item) => {
					return (
						<div key={item.id} className={item.url && params?.startsWith(item.url)?'aside_icons-main testlink':'aside_icons-main'}>
								<Link className='aside_svg_div-wrap' to="#">
								  <div className='aside_icon'>{item.icon}</div>
								  <div className={item.subItem && !slideIn?`${'aside_text sudo'}`:item.subItem?`${'aside_text sudo-mobile'}`:`${'aside_text'}`}>{item.label}</div>
								</Link>
								<div className='sub_item'>
                  {item.subItem && 'yes'}
                </div>
						</div>
          )
            
            })}
        </div>
  )
}

// Hoisted 

export default Head