import React from 'react'
import { portfolio } from '../data/pdata'
import './p.css'
//import Zoom from 'react-reveal/Zoom'






function Portfolio() {
    


  
    return (
        <div className="p">
        <h1 className="p-h1">Portfolio</h1>
        <div className="p-c">
        
        {
            portfolio.map((x)=>
            <div className="p-card">
            
            
            <img src={x.image} alt="" className="p-card-img"></img>
            
           
            
            <div className="p-card-overlay">
            <div  className="p-card-overlay-c">
            <h3>Technology</h3>
            <h1>{x.tech}</h1>

            <a href={x.link}>
            <button className="po-btn">visit site</button>
            </a>
            
            
            
     
            
            </div>
         
    
            
            
            </div>

          
            
            
            </div>
            
            )
        }


            
        </div>
        </div>
    )
}

export default Portfolio
