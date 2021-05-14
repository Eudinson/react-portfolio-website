import React, { useState } from 'react';
import './Sections.scss';

const Skills = () => {

    const [fade, fadeState] = useState(false)

    const fadeEvent = () => {
        fadeState(state => state = true)
    }

    return(
        <div className='section'>
            <div className="section-title-container" onAnimationEnd={fadeEvent}>
                <h1 className="section-title">Knowledge & Skills</h1>
            </div>
            <div className={fade ? 'set-section-content' : 'section-content'}>
                <p className="content"><b>Front-end</b></p>
                <p className="content">ReactJs, HTML, CSS, Bootstrap, Scss, Javascript</p>
                
                <p className="content"><b>Back-end</b></p>
                <p className="content">NodeJs, ExpressJs, C#, Php, SQL</p>
                
                <p className="content"><b>Database</b></p>
                <p className="content">SQLite, SQL Server, MySQL, PostgreSQL, Firebase, MongoDB</p>
                
                <p className="content"><b>Other Tech Skills</b></p>
                <p className="content">Git, CMS WordPress, Web Hosting, Website Migration, WHM, Cpanel, SEO</p>
               
                <p className="content"><b>Editing Skills</b></p>
                <p className="content">Photoshop, Filmora, After Effects</p>
            </div>
        </div>
    )
}

export default Skills;