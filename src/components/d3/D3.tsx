import './d3.css'
import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import {capture, capture1} from './static/img/index'

function D3() {
  
  let location = useLocation()
  let state = location.state
  console.log(state)

  return (
    <div className='d3-container'>
      <div className='d3-main util-15px-pad full-height'>
        <div className='d3-projects-main'>
          <div className='selections-wrap'>
            <h2>Selections</h2>
            <div className='project-card'>
              <div className='project-card-inner'>
                <div className='project-card-inner-front'>
                  <Link to='selection'><img src={capture} alt=""/></Link>
                </div>
                <div className="project-card-inner-back">
                  <Link to='selection'><img src={capture1} alt=""/>
                </Link></div>
              </div>
            </div>
          </div>

          <div className='selections-wrap'>
            <h2>something else not ready</h2>
            <div className='project-card'>
              <div className='project-card-inner'>
               
                <div className='project-card-inner-front'>
                  <Link to='selection'>2</Link>
                </div>

                <div className="project-card-inner-back">hello2</div>
              </div>
            </div>
          </div>

          <div className='selections-wrap'>
            <h2>something else not ready</h2>
            <div className='project-card'>
              <div className='project-card-inner'>
                <div className='project-card-inner-front'>
                  <Link to='selection'>3</Link>
                </div>

                <div className="project-card-inner-back">hello3</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default D3