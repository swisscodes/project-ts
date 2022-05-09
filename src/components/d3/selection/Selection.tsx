import './selection.css'
import React, {useRef} from 'react'
import selectionChart from './SelectionChart'
import {useD3Ref} from '../../utils/useD3Ref'

const data:[] = []
const dimemsion = {}


function Selection() {
  const svgRef = useRef(null);

  const renderChart = () => selectionChart(svgRef, data, dimemsion)

  useD3Ref(renderChart, data)

  return (
    <div className='d3_select-container'>
      <div className='d3_select-main util-15px-pad'>
        <svg ref={svgRef}></svg>
      </div>
    </div>
  )
}

export default Selection