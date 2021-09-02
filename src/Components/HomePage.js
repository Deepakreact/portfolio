import React from 'react'
import Education from './Education'
import Experience from './Experience'
import Portfolio from './Portfolio'
import Skills from './Skills'
import Slider from './Slider'
import TSkills from './TSkills'
import WorkHistory from './WorkHistory'

function HomePage() {
    return (
        <div>
            <Slider />
            <Portfolio/>
            <TSkills/>
            <Experience/>
            <Education/>

            <Skills/>
            <WorkHistory/>

        </div>
    )
}

export default HomePage
