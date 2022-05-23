import './movielist.css'
import React, { SyntheticEvent } from 'react'

function MovieList({item, setCurrentMovie}:any) {
  return (
    <>
			<div className='m-list-item' onClick={(e)=> clickedMovie(e)}>{item.name}</div>
    </>
  )
	
	//HOISTED
	function clickedMovie(e:SyntheticEvent) {
		setCurrentMovie(item)
	}
}

export default MovieList