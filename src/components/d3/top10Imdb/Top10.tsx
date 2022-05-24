import './top10.css'
import React, {useState,useEffect, useRef, SyntheticEvent } from 'react'
import {movieData, TmovieData, TmovieDataArray} from './imdbData'
import OnOffCheck from './OnOffCheck'
import MovieList from './movie-list/MovieList'
import {select} from 'd3'



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

type Trefs = {
  [key:string]:any
}


function Top10() {

  const [currentMovie, setCurrentMovie] = useState<TmovieData>()
  const [selectedItems, setSelectedItems] = useState<Tselect>({})
  const [moviesArr, setMoviesArr] = useState<TmovieDataArray>([])
  const pLengendRefs = useRef<Trefs>({})
  const svgrectRef1 = useRef(null)
  const svgrectRef2 = useRef(null)



  
  useEffect(() => {
    let allMovies:any[] = []
    
    for(let [key, value] of Object.entries(selectedItems)) {
        value.movies = []
        // pLengendRefs.current[key as keyof Trefs].style.backgroundColor = selectedItems[key as keyof Tselect]?.color
        // pLengendRefs.current[key as keyof Trefs].style.width = selectedItems[key as keyof Tselect]?.width
        // pLengendRefs.current[key as keyof Trefs].style.height = selectedItems[key as keyof Tselect]?.height
        // pLengendRefs.current[key as keyof Trefs].style.borderRadius = selectedItems[key as keyof Tselect]?.borderRadius
        
        movieData.filter((item:TmovieData) => {
          item.color = item.color ?? `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
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

  useEffect(()=> {
    select(svgrectRef1.current).selectAll('rect').remove()
    select(svgrectRef1.current).selectAll('text').remove()
    for(let i=0; i<moviesArr.length; i++) {
      select(svgrectRef1.current)
        .append('rect')
        .attr('width', `${moviesArr[i].gross/2}`)
        .attr('height', '20px')
        .attr('x', 0)
        .attr('y', (i*25) + 25)
        .style('fill', `${moviesArr[i].color}`)

      select(svgrectRef1.current)
        .append('text')
        .text(`${moviesArr[i].gross}`)
        .attr('x', `${moviesArr[i].gross/2 + 5}`)
        .attr('y', (i*25) + 40)
        .style('font-size', '16')
        .style('fill', 'rgb(63,63,63')
    }

    select(svgrectRef2.current).selectAll('rect').remove()
    select(svgrectRef2.current).selectAll('text').remove()
    for(let i=0; i<moviesArr.length; i++) {
      select(svgrectRef2.current)
        .append('rect')
        .attr('width', `${moviesArr[i].duration}`)
        .attr('height', '20px')
        .attr('x', 0)
        .attr('y', (i*25) + 25)
        .style('fill', `${moviesArr[i].color}`)

      select(svgrectRef2.current)
        .append('text')
        .text(`${moviesArr[i].duration}`)
        .attr('x', `${moviesArr[i].duration + 5}`)
        .attr('y', (i*25) + 40)
        .style('font-size', '16')
        .style('fill', 'rgb(63,63,63')
    }
  
  }, [moviesArr])

  

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
            <div className='m-selected-items'>
              <h2>{selectedItems['u-rated']?.movies?.length || 0}</h2>
              <p>u-rated selected</p>
              
            </div>
            <div className='m-selected-items'>
              <h2>{selectedItems['15-rated']?.movies?.length || 0}</h2>
              <p>15-rated selected</p>
              
            </div>
            <div className='m-selected-items'>
              <h2>{selectedItems['12a-rated']?.movies?.length || 0}</h2>
              <p>12A rating selected</p>
              
            </div>
            <div className='m-selected-items'>
              <h2>{selectedItems['pg-rated']?.movies?.length || 0}</h2>
              <p>PG-rated selected</p>
              
            </div>
          </div>
          <div id="m-legend">
            {
              moviesArr.map((item, i) => {
                return <div key={i} className='m-legend-items'>
                    <p style={{width:'20px', height:'20px', borderRadius:'10px', backgroundColor:`${item.color}`}}></p>
                    <p>{item.name}</p>
                  </div>
              })
            }
            {/* <p ref={(el) => giveRef(el, 'u-rated', pLengendRefs)}></p>
            <p ref={(el) => giveRef(el, '15-rated', pLengendRefs)}></p>
            <p ref={(el) => giveRef(el, '12a-rated', pLengendRefs)}></p>
            <p ref={(el) => giveRef(el, 'pg-rated', pLengendRefs)}></p> */}
          </div>
          <div id="m-gross">
            <div>
              {moviesArr.length>0 && <p>Gross collection in USD Million</p>}
              <svg ref={svgrectRef1} className="m-gross-svg" viewBox='0 0 500 270'>
              </svg>
            </div>
            <div>
              {moviesArr.length>0 && <p>Duration in Minutes</p>}
              <svg ref={svgrectRef2} className="m-gross-svg" viewBox='0 0 500 270'>
              </svg>
            </div>
          </div>
          <div id="m-duration"></div>
          <div id="m-votes"></div>
        </div>
			</div>
    </div>
  )

  //
  function checkClicked(e:SyntheticEvent): void {
    let target = e.target as HTMLInputElement
    setSelectedItems(() => ({...selectedItems, 
      [target.name]:{
        checked:target.checked,
        color:selectedItems[target.name as keyof Tselect]?.color??`rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`,
        width:'15px',
        height:'15px',
        borderRadius:'10px',

      }
    }))
  }

  function giveRef(el:any, item:any, ref:any) {
    
    ref.current = {...pLengendRefs.current, [item]:el}
  }
  
}

export default Top10