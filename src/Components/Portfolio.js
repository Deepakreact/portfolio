import React, { useState } from 'react'
import { portfolio } from '../data/pdata'
import './p.css'
//import Zoom from 'react-reveal/Zoom'

import Modal from 'react-modal'






function Portfolio() {

    const [open, setOpen] = useState(false)

    const [proj, setProj] = useState({})




    const openDetail=(x)=>{

        setOpen(true)

        setProj(x)

    }

    const closeModal=()=>{
        setOpen(false)
    }

    const customStyles = {
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          width:'700px'
        },
      };
    


  
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

            <div style={{width:'100%' , display:'flex'}}>

            <a href={x.link}>
            <button className="po-btn">visit</button>
            </a>

            
            
            <button className="po-btn"
            onClick={()=>openDetail(x)}
            
            >detail</button>
            
            </div>

       
            
            
            
            
     
            
            </div>
         
    
            
            
            </div>

          
            
            
            </div>
            
            )
        }


        {
            open && (
                <Modal isOpen={open}  onRequestClose={closeModal} style={customStyles}>
           

                <div className='scrool'>

                <table  class="table-responsive" style={{width:'100%'}}>

                <thead>
                <tr>
                <th><h4>Name</h4></th>
                <th><h4>Frontend</h4></th>
                <th><h4>Backend</h4></th>
                <th><h4>Database</h4></th>
                <th> <h4>Detail</h4></th>
                <th> <h4>Team</h4></th>
                
                </tr>
              
                
                </thead>

                <tbody>
                <tr>
                <td>
                <p>
                {proj.name}
                
                </p>
          
                
                </td>
                <td> 
                <p>
                {proj.frontend}
                
                </p>
              
                
                </td>
                <td>
                <p>
                {proj.backend}
                
                </p>
                
            
                
                </td>
                <td>
                <p>
                {proj.database}
                
                </p>
                
            
                
                </td>
                <td>
                <p>

                {proj.detail}
                
                </p>
                
              
                
                </td>

                <td>
                <p>

                {proj.team}
                
                </p>
                
              
                
                </td>
                
                </tr>
                
                </tbody>
                
                </table>
                
                </div>

              
                
                </Modal>
            )
        }


            
        </div>
        </div>
    )
}

export default Portfolio
