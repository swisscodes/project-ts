
import {useEffect} from 'react';



export const useD3Ref = (renderChartFn:Function, dependencies:[]) => {


    useEffect(() => {
        renderChartFn();
        return () => {};
      }, [dependencies, renderChartFn,]);
}
