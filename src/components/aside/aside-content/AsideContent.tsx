import './asidecontent.css'
import AsideWrap from './content/AsideWrap'

type Tprop = {
  slideIn:boolean
  isMobile:boolean
  toggleClick:Function
}

function AsideContent({slideIn, isMobile, toggleClick}:Tprop) {
  return (
    <div className='aside-content-wrap'>
      <div className={slideIn?`${'nav-content-main-cut'}`:`${'nav-content-main'}`}>
        <AsideWrap slideIn={slideIn} isMobile={isMobile} toggleClick={toggleClick}/>
      </div>
    </div>
  )
}



export default AsideContent