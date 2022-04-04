import './mainlayout.css'
import React, {useState} from 'react'
import AsideNav from 'components/aside/aside-nav/AsideNav'
import AsideContent from 'components/aside/aside-content/AsideContent'
import NavBar from 'components/nav-bar/NavBar'
import Footer from 'components/footer/Footer'
import MainRoutes from 'routes/MainRoutes'

function MainLayout() {

	const [slideIn, setSlideIn] = useState(false)

  return (
    <div className='whole-wrapper'>

			<div className={slideIn?`${"layout_aside-nav-full"}`:'layout_aside-nav'}>
				<AsideNav slideIn={slideIn} toggleClick={checkToggle}/>
			</div>

			<div className="layout_aside-content">
				<AsideContent slideIn={slideIn}/>
			</div>

			<div className="layout-nav">
				<NavBar slideIn={slideIn}/>
			</div>


			<div className="layout-main_content">
				
				<MainRoutes />
				<Footer />
				
			</div>
			
    </div>
  )
  //Hoisted function
  function checkToggle(e:any) {
	  setSlideIn(()=>!slideIn)
  }
}

export default MainLayout