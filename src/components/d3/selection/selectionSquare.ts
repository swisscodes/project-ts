import  {RefObject} from 'react'
import { select } from 'd3'
import { TsquareDimemsion } from './Selection'

function selectionSquare(svgRef:RefObject<HTMLElement>, data:[], dimension:TsquareDimemsion):void {
  let currentSvg = select(svgRef.current)
  
  // currentSvg.selectAll('*').remove()
  currentSvg.append('rect').attr('x', dimension?.first?.x).attr('y', dimension?.first?.y).attr('width',  dimension?.first?.width).attr('height',  dimension?.first?.height)
  currentSvg.append('rect').attr('x', dimension?.second?.x).attr('y', dimension?.second?.y).attr('width', dimension?.first?.width).attr('height', dimension?.first?.height)
  currentSvg.append('rect').attr('x', dimension?.third?.x).attr('y', dimension?.third?.y).attr('width', dimension?.first?.width).attr('height', dimension?.first?.height)
  currentSvg.append('rect').attr('x', dimension?.fourth?.x).attr('y', dimension?.fourth?.y).attr('width', dimension?.first?.width).attr('height', dimension?.first?.height)
}


export default selectionSquare