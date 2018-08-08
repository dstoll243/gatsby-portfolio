import React from 'react'
import ExperienceSection from '../components/ExperienceSection'
import ProjectsSection from '../components/ProjectsSection'
import About from '../components/Sidebar/About'
import Links from '../components/Sidebar/Links'

import './style.scss'

const IndexPage = () => (
    <div className="index">
      <div className="main">
        <h5>
          Hi, I'm <span className="bold">David Stoll</span>
        </h5>

        <h3>
          I am a Full-Stack Software Developer (MERN Stack) 
          with background in retail banking. <br></br>Driven by a collaborative mindset and a desire to improve lives through technical skills.
        </h3>

        {/* <ExperienceSection /> */}
        <ProjectsSection />
      </div>

      <div className="aside">
        <div className="top">
          <About />
        </div>
        <div className="bottom">
          <Links />
        </div>
      </div>
    </div>
)

export default IndexPage
