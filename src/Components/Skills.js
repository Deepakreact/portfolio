import React from 'react'
import { tech } from '../data/pdata'
import './skill.css'

function Skills() {
    return (
        <div className="skill">
        <h1>Skills</h1>
        <p>Passionate Web developer who wants to explore techlogy stack</p>
        <div className="skill-c">
        
        {
            tech.map((x)=>
            <div className="skill-card">
            <img src={x.image} alt="" className="skill-card-img"></img>
            <h4 className="skill-card-name">{x.name}</h4>
            <p className="skill-card-content">{x.content}</p>
            
            
            </div>
            
            
            )

        }

        
        </div>

   
            
        </div>
    )
}

export default Skills
