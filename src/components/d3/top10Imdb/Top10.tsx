import './top10.css'
import React from 'react'
import {movieData} from './imdbData'
import OnOffCheck from './OnOffCheck'
import MovieList from './movie-list/MovieList'


function Top10() {
  return (
    <div className='top10-container'>
      <div className="top10-main util-15px-pad full-height">

        <div className="head-content">
				  <h1>ImDb Rating</h1>
          <p>Top 10 grossing english movies for 2019</p>
        </div>

        <div className="top10-grid-info-chk">
          <div className="movie-info">
            <div className="movie-list">
              {
                movieData.map((item) => {
                  return (<MovieList item={item}/>)
                })
              }
            </div>
            <div className="movie-post">2A</div>
          </div>

          <form action="" id='m-choices'>

            <div className="check-box-group">
              <OnOffCheck id='u-rated' labelFor='u-rated' contentText='U' className='toggle'/>
              <OnOffCheck id='15-rated' labelFor='15-rated' contentText='15' className='toggle'/>
              <OnOffCheck id='12a-rated' labelFor='12a-rated' contentText='12A' className='toggle'/>
              <OnOffCheck id='pg-rated' labelFor='pg-rated' contentText='PG' className='toggle'/>
            </div>

          </form>
        </div>

        <div id='m-charts'>
          <div id="m-contents"></div>
          <div id="m-legend"></div>
          <div id="m-gross"></div>
          <div id="m-duration"></div>
          <div id="m-votes"></div>
        </div>
			</div>
    </div>
  )
}

export default Top10