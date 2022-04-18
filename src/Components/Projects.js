import React from 'react'
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { portfolio } from '../data/pdata';
import './project.css'

function Projects() {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

  return (
    
    
    <div className='project'>
    
    <Carousel responsive={responsive} autoPlaySpeed={300000} className='project-crousel'>

    {
        portfolio.map((x)=>
        <div className='pr-card'>
        <a href={x.link}>
        <img src={x.image} alt='' className='pr-img'></img>
        
        </a>
     
        
        </div>
        
        )
    }
    
    </Carousel>
    
    </div>
  )
}

export default Projects