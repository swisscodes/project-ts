import React, { SyntheticEvent } from 'react'
import './onoffcheck.css'

type TOnOffCheckProps = {
    id:string,
    labelFor:string,
		className:string
    contentText:string,
}

function OnOffCheck({id, labelFor, contentText, className }:TOnOffCheckProps) {
  return (
    <>
      <input type="checkbox" id={id} className={className}/>
			<label htmlFor={labelFor} onClick={(e) => checkClicked(e)}>{contentText}</label>
		</>
  )

  //
  function checkClicked(e:any): void {
    console.log(e.target.htmlFor)
  }
}

export default OnOffCheck