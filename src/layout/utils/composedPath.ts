import {useState, useEffect, MouseEvent} from 'react'

function useCheckToggle(topRef:any, contentRef:any) {
    const [slideIn, setSlideIn] = useState(false)

    useEffect(() => {
        const addEvent = (e:any) => {
            e.preventDefault()
            if(e.composedPath().includes(topRef.current) || e.composedPath().includes(contentRef.current) ) {
                
            }
            else if(window.innerWidth < 600){
                setSlideIn(()=>!slideIn)
            }
        }
        if(slideIn && window.innerWidth < 600) {
            document.addEventListener('click', addEvent)
        }
        return () => document.removeEventListener('click', addEvent)
    }, [slideIn, topRef, contentRef])
    
    const setToggle = function(e:MouseEvent) {
        setSlideIn(()=>!slideIn)  
    }

    return [slideIn, setToggle]
}

export {useCheckToggle}