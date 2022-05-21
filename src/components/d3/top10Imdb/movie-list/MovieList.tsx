import './movielist.css'
import React from 'react'

function MovieList({item}:any) {
  return (
    <>
			<div className='m-list-item'>{item.name}</div>
    </>
  )
}

export default MovieList