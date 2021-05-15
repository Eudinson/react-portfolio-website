import React, { useState } from 'react';
import './Skills.scss';

const Skills = () => {

    const [animationEnd, setAnimationEnd] = useState(false)

    const animationDidEnd = () => {
        setAnimationEnd(state => state = true)
    }

    return(
        <div className="skills-container">

            <h1 className="skills-heading" onAnimationEnd={animationDidEnd}>Knowledge & Skills</h1>
            <br />

            <div className={animationEnd ? "skills" : "hide skills"}>

                <h2 className="skills-title">Front End</h2>
                <p className="skills-content">ReactJs, HTML, CSS, Bootstrap, Scss, Javascript</p>

                <br />

                <h2 className="skills-title">Back End</h2>
                <p className="skills-content">NodeJs, ExpressJs, C#, Php, SQL</p>
                
                <br />

                <h2 className="skills-title">Database</h2>
                <p className="skills-content">SQLite, SQL Server, MySQL, PostgreSQL, Firebase, MongoDB</p>

                <br />

                <h2 className="skills-title">Other Tech Skills</h2>
                <p className="skills-content">Git, CMS WordPress, Web Hosting, Website Migration, WHM, Cpanel, SEO</p>

                <br />

                <h2 className="skills-title">Editing Skills</h2>
                <p className="skills-content">Photoshop, Filmora, After Effect</p>

            </div>

        </div>
    )
}

export default Skills;