import './mainlayout.css'
import React, {useState, useRef} from 'react'
import { useCheckToggle } from 'layout/utils/composedPath'
import AsideNav from 'components/aside/aside-nav/AsideNav'
import AsideContent from 'components/aside/aside-content/AsideContent'
import NavBar from 'components/nav-bar/NavBar'
import Footer from 'components/footer/Footer'
import MainRoutes from 'routes/MainRoutes'
import Login from 'layout/auth-layout/login/Login'

function MainLayout() {

	const [loggedIn, /*setLoggedIn*/] = useState(true)

	const topNavRef = useRef<HTMLDivElement>(null)
	const navContentRef = useRef<HTMLDivElement>(null)

	const [toggle, isMobile, setToggle, subState, setSubState] = useCheckToggle(topNavRef, navContentRef)

  return (
		<>
		{loggedIn? 
    <div className='whole-wrapper'>

			<div className={toggle?`${"layout_aside-nav-full"}`:'layout_aside-nav'} ref={topNavRef}>
				<AsideNav slideIn={toggle} toggleClick={setToggle} />
			</div>

			<div className="layout_aside-content" ref={navContentRef}>
				<AsideContent slideIn={toggle} isMobile={isMobile} toggleClick={setToggle} subState={subState} setSubState={setSubState}/>
			</div>

			<div className="layout-nav">
				<NavBar slideIn={toggle}/>
			</div>


			<div className="layout-main_content">
				
				<MainRoutes />
				<Footer />
				
			</div>
			
    </div>
		:
		<Login log={loggedIn}/>
		}
		</>
  )
  //Hoisted function
  
}

export default MainLayout