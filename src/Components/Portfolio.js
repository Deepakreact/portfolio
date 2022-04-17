import React,{useState} from 'react'
import { portfolio } from '../data/pdata'
import './p.css'
import Zoom from 'react-reveal/Zoom'


import Modal from 'react-modal'


function Portfolio() {
    const [obj, setObj] = useState(null)


    const openModal=(x)=>{
        setObj({...x})


    }
    return (
        <div className="p">
        <h1 className="p-h1">Portfolio</h1>
        <div className="p-c">
        {
            portfolio.map((x)=>
            <div className="p-card">
            <Zoom>
            <img src={x.image} alt="" className="p-card-img"></img>
            </Zoom>
            <div className="p-card-overlay">
            <div  className="p-card-overlay-c">
            <h3>Technology</h3>
            <h1>{x.tech}</h1>

            <a href={x.link}>
            <button className="po-btn">view site</button>
            </a>
            <button className="po-btn" onClick={()=>openModal(x)}>details</button>
            
            
     
            
            </div>
         
    
            
            
            </div>

            {
                obj&&(<Modal isOpen={true}>
                    <h1>this is model</h1>
                    
                    
                    </Modal>)
            }
            
            
            </div>
            
            )
        }


            
        </div>
        </div>
    )
}

export default Portfolio
