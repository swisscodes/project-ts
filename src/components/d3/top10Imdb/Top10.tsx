import './top10.css'
import React, {useState, SyntheticEvent, useEffect} from 'react'
import {movieData, TmovieData, TmovieDataArray} from './imdbData'
import OnOffCheck from './OnOffCheck'
import MovieList from './movie-list/MovieList'



type Tselect = {
  'u-rated'?:Trated,
  '15-rated'?:Trated,
  '12a-rated'?:Trated,
  'pg-rated'?:Trated,
}

type Trated  = {
  checked?:boolean,
  [key:string]:any,
}


function Top10() {

  const [currentMovie, setCurrentMovie] = useState<TmovieData>()
  const [selectedItems, setSelectedItems] = useState<Tselect>({})
  const [moviesArr, setMoviesArr] = useState<TmovieDataArray>([])

  useEffect(() => {
    let allMovies:any[] = []
    
    for(let [key, value] of Object.entries(selectedItems)) {
        value.movies = []
        movieData.filter((item:TmovieData) => {
          if(selectedItems[key as keyof Tselect]?.checked  && key === item.contentRating) {
            value.movies.push(item)
            return item
          }
          return null
        })
        allMovies.push(...selectedItems[key as keyof Tselect]?.movies)
        
    }
    setMoviesArr(()=> [...allMovies])
  },[selectedItems])
  

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
                  return (<MovieList item={item} key={item.name} setCurrentMovie={setCurrentMovie}/>)
                })
              }
            </div>
              <div className="movie-post">
                {currentMovie && 
                  <>
                    <h2>{currentMovie?.name}</h2>
                    <p>Content Rating: <span>{currentMovie?.contentRating}</span></p>
                    <p>Duration (minutes): <span>{currentMovie?.duration}</span></p>
                    <p>Star Rating(out of 10): <span>{currentMovie?.starRating}</span></p>
                    <p>Total Votes: <span>{currentMovie?.votes}</span></p>
                    <p>Gross Collection(USD Mln): <span>{currentMovie?.gross}</span></p>
                  </>
                  }
              </div>
          </div>

          <form action="" id='m-choices'>

            <div className="check-box-group">
              <OnOffCheck id='u-rated' labelFor='u-rated' contentText='U' className='toggle' movieData={movieData} checkClicked={checkClicked}/>
              <OnOffCheck id='15-rated' labelFor='15-rated' contentText='15' className='toggle' movieData={movieData} checkClicked={checkClicked}/>
              <OnOffCheck id='12a-rated' labelFor='12a-rated' contentText='12A' className='toggle' movieData={movieData} checkClicked={checkClicked}/>
              <OnOffCheck id='pg-rated' labelFor='pg-rated' contentText='PG' className='toggle' movieData={movieData} checkClicked={checkClicked}/>
            </div>

          </form>
        </div>

        <div id='m-charts'>
          <div id="m-selected">
            <div className='m-selected-items'>{selectedItems['u-rated']?.movies?.length}</div>
            <div className='m-selected-items'>{selectedItems['15-rated']?.movies?.length}</div>
            <div className='m-selected-items'>{selectedItems['12a-rated']?.movies?.length}</div>
            <div className='m-selected-items'>{selectedItems['pg-rated']?.movies?.length}</div>
          </div>
          <div id="m-legend"></div>
          <div id="m-gross"></div>
          <div id="m-duration"></div>
          <div id="m-votes"></div>
        </div>
			</div>
    </div>
  )

  //
  function checkClicked(e:SyntheticEvent): void {
    let target = e.target as HTMLInputElement
    setSelectedItems(() => ({...selectedItems, [target.name]:{checked:target.checked}}))
    
  }
    
}

export default Top10