
import './ex.css'
import React,{useEffect,useRef} from 'react'
import lottie from 'lottie-web'

function Experience() {
    useEffect(() => {
        lottie.loadAnimation({
            container:ref.current,
            loop:true,
            autoplay:true,
            renderer:'svg',
            animationData:require('../ex.json')

        })
  

        
        return () => {
            //
        }
    }, [])
    const ref = useRef(null)
    return (
        <div className="ex">
        
        <h1 className="ex-h1">Experience</h1>

        <div className="ex-c">
        <div  ref={ref} className="ex-lottie">
         
         
        </div>
        <div className="ex-c-left">
     
        <p>experience in 
        developing websites in React JS & Django RESTFramework development enviornment</p>
        <p> experience in front-end / backend development & deployement</p>
        <p>experience in 
        integration of React JS with Django RESTFramework</p>
        <p>Develop websites for different domains </p>
        <p>Experience in developing responsive UI/UX</p>
        <p>Experience in customer
         requrement assessment and understanding</p>
         </div>

   
         </div>
         
            
        </div>
    )
}

export default Experience
