import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Projects() {
  return (
      <>
				<div><Link to='d3'>d3</Link></div>
				<div><Link to='other-sample'>sample</Link></div>
			</>
  )
}

export default Projects