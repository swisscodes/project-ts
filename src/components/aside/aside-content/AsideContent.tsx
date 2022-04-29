import './asidecontent.css'
import AsideWrap from './content/AsideWrap'

type Tprop = {
  slideIn:boolean
  isMobile:boolean
  toggleClick:Function
  subState:boolean,
  setSubState:Function
}

function AsideContent({slideIn, isMobile, toggleClick, subState, setSubState}:Tprop) {
  return (
    <div className='aside-content-wrap'>
      <div className={slideIn?`${'nav-content-main-cut'}`:`${'nav-content-main'}`}>
        <AsideWrap slideIn={slideIn} isMobile={isMobile} toggleClick={toggleClick} subState={subState} setSubState={setSubState}/>
      </div>
    </div>
  )
}



export default AsideContent