import React,{useEffect,useRef} from 'react'
import './tskill.css'
import lottie from 'lottie-web'

function TSkills() {
    useEffect(() => {
        lottie.loadAnimation({
            container:ref.current,
            loop:true,
            autoplay:true,
            renderer:'svg',
            animationData:require('../tskill.json')

        })
  

        
        return () => {
            //
        }
    }, [])
    const ref = useRef(null)
    return (
        <div className="tskill">
        <h1 className="tskill-h1">Technical Skills</h1>
        <div className="tskill-m">
        <div className="tskill-c">
        <p>Comprehencive Knowledge 
        of Reactjs platform and core principle</p>
        <p> Command over 
        HTML CSS3, Flex Box,Media quaries, Javascript fundamentals,+ES6 </p>
        <p>Node Package manager npm,Redux State Management,Git Repository</p>
        <p>Command over developing reuseble React JS Components</p>
        <p> Redux State Management</p>
        <p>UI/UX Design and development</p>
        <p>Django RestFramework </p>
        <p>Knowledge of continues testing,trubleshooting,integration</p>
        </div>
        <div  className="tskill-lottie" ref={ref}>
        
        
        </div>
        </div>
            
        </div>
    )
}

export default TSkills
