import {useState, useEffect, MouseEvent} from 'react'

type typeUseCheckReturn = [boolean, boolean, (e:MouseEvent)=>void, boolean, Function]

function useCheckToggle(topRef:any, contentRef:any):typeUseCheckReturn {
    const [slideIn, setSlideIn] = useState<boolean>(false)
    const [isMobile, setIsMobile] = useState<boolean>(false)
    const [subState, setSubState] = useState<boolean>(false)

    useEffect(() => {
        
        const addEvent = (e:any) => {
            e.preventDefault()

            if(e.composedPath().includes(topRef.current) || e.composedPath().includes(contentRef.current) ) {
                
            }
            else if(window.innerWidth < 600){
                setSlideIn((slideIn)=>!slideIn)
            }

            
            setTimeout(() => {
                let navImgSlide = document.querySelector(".image-logo");;
                navImgSlide?.classList.add("image-logo-animate")
            },0)
        }
        if(slideIn && window.innerWidth < 600) {
            document.addEventListener('click', addEvent)
            setIsMobile(() => true)

        }
        return () => document.removeEventListener('click', addEvent)
    }, [slideIn, topRef, contentRef])//useEfect end
    
    const setToggle = function(e:MouseEvent) {
        
        setSlideIn((slideIn)=>!slideIn)
        if(subState) {
            setSubState((subState) => !subState)
        }
        setTimeout(() => {
            let navImgSlide = document.querySelector(".image-logo");;
            navImgSlide?.classList.add("image-logo-animate")
        },0)
        
    }

    return [slideIn, isMobile, setToggle, subState, setSubState]
}

export {useCheckToggle}