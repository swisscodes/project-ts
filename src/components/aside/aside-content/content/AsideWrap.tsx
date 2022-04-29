import './asidewrap.css'
import Head from './head/Head'


function AsideWrap({slideIn, isMobile, toggleClick, subState, setSubState}:any) {
  return (
		<Head slideIn={slideIn} isMobile={isMobile} toggleClick={toggleClick} subState={subState} setSubState={setSubState}/>
	)
}

export default AsideWrap