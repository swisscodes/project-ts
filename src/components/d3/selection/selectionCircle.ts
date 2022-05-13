import { RefObject } from "react";
import { select } from 'd3'

function selectionChart(svgRef:RefObject<HTMLElement>, data:[], dimension:object):void {
  let currentSvg = select(svgRef.current)
  
  // currentSvg.selectAll('*').remove()
  currentSvg.append('circle').attr('r', 50).attr('cx', 55).attr('cy', 55)
  currentSvg.append('circle').attr('r', 50).attr('cx', 155).attr('cy', 55)
  currentSvg.append('circle').attr('r', 50).attr('cx', 255).attr('cy', 55)
  currentSvg.append('circle').attr('r', 50).attr('cx', 355).attr('cy', 55)
}

export default selectionChart