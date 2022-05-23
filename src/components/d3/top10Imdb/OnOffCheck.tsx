import { stringify } from 'querystring'
import React, { useState, SyntheticEvent } from 'react'
import { TmovieDataArray } from './imdbData'
import './onoffcheck.css'

type TOnOffCheckProps = {
    id:string,
    labelFor:string,
		className:string
    contentText:string,
    movieData:TmovieDataArray,
    checkClicked:Function,
}

function OnOffCheck({id, labelFor, contentText, className, movieData, checkClicked }:TOnOffCheckProps) {

  return (
    <>
      <input type="checkbox" id={id} className={className} name={labelFor} onChange={(e) => checkClicked(e)}/>
			<label htmlFor={labelFor}>{contentText}</label>
		</>
  )

  //
  
}

export default OnOffCheck