import { RefObject} from 'react';
import {select, selectAll} from 'd3'


interface IrefObjects  {
    circles:RefObject<HTMLElement>,
    squares:RefObject<HTMLElement>,
    rectangles:RefObject<HTMLElement>,
}



function selectedElement(refObjects:IrefObjects, bottonValue:string,) {

    selectAll('.svgselection').selectAll('*').style('fill', 'rgba(248, 248, 248, 0.5)')

    function rgbCodes() {

        return [Math.random()*255, Math.random()*255,Math.random()*255 ]
    }
   
    const [red, green, blue] = rgbCodes();
    let circles, squares, rectangles;

    if(bottonValue === 'select') {
        circles =  select(refObjects.circles.current).select('circle')
        squares =  select(refObjects.squares.current).select('rect')
        rectangles =  select(refObjects.rectangles.current).select('rect')
    }
    else {
        circles =  select(refObjects.circles.current).selectAll('circle');
        squares =  select(refObjects.squares.current).selectAll('rect');
        rectangles =  select(refObjects.rectangles.current).selectAll('rect');
    }

    // console.log(circles, squares, rectangles )

    let elements = [circles, squares, rectangles]

    for(const currentEl of elements) {
        
        currentEl.filter(function(d, i, n):boolean {
            if(bottonValue==='filter-odd') {
                if(i % 2 === 0) {
                    select(this).style('fill',`rgba(${red}, ${green}, ${blue}, ${(i+1) * 0.25}`)
                }
               
            }
            else if(bottonValue==='filter-even') {
                if(i % 2 !== 0) {
                    select(this).style('fill',`rgba(${red}, ${green}, ${blue}, ${(i+1) * 0.25}`,)
                }
                
            }
            else if(bottonValue==='select-all') {
                select(this).style('fill',`rgba(${red}, ${green}, ${blue}, ${(i+1) * 0.25}`)
            }
            else {
                select(this).style('fill',`rgba(${red}, ${green}, ${blue}, ${(i+1) * 0.50}`)
            }
            return true //we use this because type is boolean and we must return something.
           
        }) 
    }
}



export {selectedElement}