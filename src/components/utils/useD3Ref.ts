
import {useEffect, RefObject, useRef} from 'react';



export const useD3Ref = (renderChartFn:Function, dependenciesData:[]) => {
    let chartPainted = useRef<boolean>(false)
    useEffect(() => {
      if(!chartPainted.current) {
        renderChartFn();
        chartPainted.current = true
      }
    },[renderChartFn,dependenciesData]);
}