import './asidewrap.css'
import Head from './head/Head'


function AsideWrap({slideIn, isMobile, toggleClick}:any) {
  return (
		<Head slideIn={slideIn} isMobile={isMobile} toggleClick={toggleClick}/>
	)
}

export default AsideWrap