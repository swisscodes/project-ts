import './solarsytem.css'
import React, {SyntheticEvent, useEffect, useState, useRef, useLayoutEffect} from 'react'
import { solarData, TsolarObj} from './solarData'
import {BaseType, select} from 'd3'



function SolarSystem() {
	
	const [sortState, setSortState] = useState<string>('Ascending')
	const [toShow, setToShow] = useState<boolean>(true)

	const [showText, setShowText] = useState<string>()
	let svgDiameterRef = useRef(null)
	let svgDensityRef = useRef(null)

	let sortedSolarDataDiameter = [...solarData].sort((a,b) => {
		return sortState === 'Ascending'? 
			a.diameter - b.diameter
			:
			b.diameter - a.diameter
	})
	
	let sortedSolarDataDensity = [...solarData].sort((a,b) => {
		return sortState === 'Ascending'? 
			a.density - b.density
			:
			b.density - a.density
	})


	useEffect(() => {
		
		const timeToSort = setTimeout(()=>setShowText(()=>''), 1500)
		
		let cxValue = 0
		let diameterSvg = select(svgDiameterRef.current)
		let densitySvg = select(svgDensityRef.current)
		
		diameterSvg.selectAll('circle')
			.data(sortedSolarDataDiameter, (d,i,n) => {
				let obj = d as TsolarObj
				return obj.name
			})
			.join('circle')
			.attr('r', (d) =>  d.diameter / 1000)
			.attr('cx', (d,i, n) => {
				if(i === 0) {
					cxValue = d.diameter / 1000;
				}
				else {
					let prevRadius = Number(select(n[i -1]).attr('r'))
					cxValue = cxValue + prevRadius + d.diameter / 1000
				}
				return (75 * (i + 1)) + cxValue
			})
			.attr('cy', '150')
			.style('fill' , (d) => d.color)

			
		diameterSvg.selectAll('text')
			.data(sortedSolarDataDiameter, (d) => {
				let obj = d as TsolarObj
				return obj.name
			})
			.join('text')
			.attr('x', (d, i, n) =>  {
				let aaaa = diameterSvg.selectAll('circle').nodes()[i]
				return select(aaaa).attr('cx')
			})
			.attr('y', (d, i, n) => {
				return i % 2 === 0? '330':'15'
			})
			.text((d) => `${d.name}, ${d.diameter}`)

			densitySvg.selectAll('rect')
				.data(sortedSolarDataDensity,(d) => {
					let obj = d as TsolarObj 
					return obj.name
				})
				.join('rect')
				.attr('width', (d)=> d.density / 10)
				.attr('height', '30')
				.attr('y', (d, i, n) => i*40 )
				.style('fill', (d) => d.color)

			densitySvg.selectAll('text')
				.data(sortedSolarDataDensity, (d) => {
					let obj = d as TsolarObj 
					return obj.name
				})
				.join('text')
				.attr('x', (d) => (d.density / 10) + 20)
				.attr('y', (d, i, n) => (i*40) + 20)
				.text((d) => `${d.name}, ${d.density}`)
				.style('text-anchor', 'start')

		return () => clearTimeout(timeToSort)

	},)

	

  return (
    <div className='solar-container util-15px-pad'>
      <div className="solar-main">

        <div>
					<h1 title= 'Solar system' className='solar-title'>Planets of our Solar System</h1>
					<div className='solar-p-wrap'>
						<p>Some basic details of the planets in the solar system, 'Pluto' has been considered
								as a planet for our analysis.
						</p>
						</div>
        </div>

				<div className='solar-charts'>
					<div className='solar-btn-msg'>
						<button className="solar-btn-main" onClick={(e)=>sortButton(e)}>SORT</button>
						<p className="solar-btn-p">{showText}</p>
					</div>
				</div>

				<div className="solar-diameter">
					<p>Diameter of the planets in kilometer, sorted in {sortState} order</p>
					<svg ref={svgDiameterRef} viewBox='0 0 1500 350'></svg>
				</div>

				<div className="solar-density">
					<p>Density of the planets in kilogram per meter cube, sorted in {sortState} order</p>
					<svg ref={svgDensityRef} viewBox='0 0 680 350'></svg>
				</div>
      </div>

    </div>
  )

	//Hoisted
	function sortButton(e:SyntheticEvent) {

		if(toShow) {
			setSortState(() => 'Descending')
			setShowText(()=> 'Descending')
		}
		else {
			setSortState(() => 'Ascending')
			setShowText(()=> 'Ascending')
		}
		setToShow(() => !toShow)
		

	}

}

export default SolarSystem