import React,{useEffect,useRef} from 'react'
import './slider.css'
import lottie from 'lottie-web'
import Fade from 'react-reveal/Fade'

function Slider() {
    useEffect(() => {
        lottie.loadAnimation({
            container:ref.current,
            loop:true,
            autoplay:true,
            renderer:'svg',
            animationData:require('../coding.json')

        })
  

        
        return () => {
            //
        }
    }, [])
    const ref = useRef(null)
    
    return (
        <div className="slider">
        
            <div className="slider-left">
            <Fade top>
                <h1 className="slider-left-h1">Hi I am Deepak Kumar</h1>
                </Fade>
                <Fade bottom>
                <h4 className="slider-left-h4">A passionate Frontend Web Developer 
                having an experience of building
                 Web applications with JavaScript / Reactjs / and some other cool liabraies</h4>
                 </Fade>

            </div>
        
            
            <div className="slider-right">
                <div    ref={ref} className="lottie-img">
                
                </div>

            </div>
    

        </div>
    )
}

export default Slider
