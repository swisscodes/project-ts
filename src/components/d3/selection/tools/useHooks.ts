import {RefObject, useEffect, useLayoutEffect} from 'react'
import {select} from 'd3'


function useSelectHook(toggleCharts:Function, dependency:any,) {
    

    useEffect(() => {
        toggleCharts()
        return () => {}
    })
       
}

export  {useSelectHook}