
import {useEffect} from 'react';



export const useD3Ref = (renderChartFn:Function, dependenciesData:[]) => {


    useEffect(() => {
        renderChartFn();
        return () => {};
      }, [dependenciesData, renderChartFn,]);
}
