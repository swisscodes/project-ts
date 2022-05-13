import './selection.css'
import React, {SyntheticEvent, useRef, useState} from 'react'
import selectionCircle from './selectionCircle'
import selectionSquare from './selectionSquare'
import {useD3Ref} from '../../utils/useD3Ref'
import { selectedElement } from './tools/d3SelectFunc'



export type TsquareDimemsion = {
  first:{
    x:number,
    y:number,
    width:number,
    height:number,
  },
  second:{
    x:number,
    y:number,
    width:number,
    height:number,
  },
  third:{
    x:number,
    y:number,
    width:number,
    height:number,
  },
  fourth:{
    x:number,
    y:number,
    width:number,
    height:number,
  }
}

function Selection() {

  const [buttonPressed, setButtonPressed] = useState<string | null>(null)

  const data:[] = []
  const dimemsion = [{}]
  const square1Dimemsion:TsquareDimemsion = {
    first:{x:10,y:10,width:90, height:90},
    second:{x:110,y:10,width:90, height:90},
    third:{x:210,y:10,width:90, height:90},
    fourth:{x:310,y:10,width:90, height:90}
  }// the viewport is 410 so = 90*4 + 10*4 and the rest of the 5 was emtpy used like padding

  const square2Dimemsion:TsquareDimemsion = {
    first:{x:5,y:7.5,width:400, height:20},
    second:{x:5,y:32.5,width:400, height:20},
    third:{x:5,y:57.5,width:400, height:20},
    fourth:{x:5,y:82.5,width:400, height:20}
  }

  const svgRefCircle = useRef(null);
  const svgRefSquare1 = useRef(null);
  const svgRefSquare2 = useRef(null);

  const renderCircle = () => selectionCircle(svgRefCircle, data, dimemsion)
  const renderSquare1 = () => selectionSquare(svgRefSquare1, data, square1Dimemsion)
  const renderSquare2 = () => selectionSquare(svgRefSquare2, data, square2Dimemsion)
  

  

  useD3Ref(renderCircle, data)
  useD3Ref(renderSquare1, data)
  useD3Ref(renderSquare2, data)

  return (
    <div className='d3_select-container'>
      <div className='d3_select-main util-15px-pad'>
        <div className='select-h1'><h1>Coloring Elements</h1></div>
        <div className='select-btn-group'>
          <div className='select-btns'><button type='submit' value='select' onClick={(e)=> buttonClicked(e)}>select</button></div>
          <div className='select-btns'><button type='submit' value='select-all' onClick={(e)=> buttonClicked(e)}>select all</button></div>
          <div className='select-btns'><button type='submit' value='filter-odd' onClick={(e)=> buttonClicked(e)}>filter odd</button></div>
          <div className='select-btns'><button type='submit' value='filter-even' onClick={(e)=> buttonClicked(e)}>filter even</button></div>
        </div>

        <div className='svg-wrapper'>
            
            <div className='svgselection-wrap'>
              <svg ref={svgRefCircle} className='svgselection circles' viewBox='0 0 410 110'>
              </svg>
            </div>
          
            <div className='svgselection-wrap'>
              <svg ref={svgRefSquare1} className='svgselection squares' viewBox='0 0 410 110'>
              </svg>
            </div>
         

            <div className='svgselection-wrap'>
              <svg ref={svgRefSquare2} className='svgselection rectangles' viewBox='0 0 410 110'>
              </svg>
            </div>
          

        </div>

        <div className='select-output'>
          <h3>{buttonPressed && <p>Pressed Butoon: {buttonPressed}</p>}</h3>
        </div>
      </div>
    </div>
  )

  //
  function buttonClicked(e:SyntheticEvent) {
    const target = e.target as HTMLButtonElement
    let bottonValue = target.value

    setButtonPressed(() => bottonValue )
    selectedElement({circles:svgRefCircle, squares:svgRefSquare1, rectangles:svgRefSquare2},bottonValue)

  }
}

export default Selection