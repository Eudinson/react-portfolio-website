import React, { useState } from 'react';
import './Skills.scss';

const Skills = () => {

    const [animationEnd, setAnimationEnd] = useState(false)

    const animationDidEnd = () => {
        setAnimationEnd(state => state = true)
    }

    return (
        <div className="skills-container">

            <h1 className="skills-heading" onAnimationEnd={animationDidEnd}>Knowledge & Skills</h1>
            <br />

            <div className={animationEnd ? "skills" : "hide skills"}>

                <h2 className="skills-title">Primary Skills</h2>
                <p className="skills-content">ReactJs, Redux, NodeJs, ExpressJs, PostgreSQL</p>

                {/* <p className="skills-content">ReactJs, HTML, CSS, Bootstrap, Scss, Javascript</p> */}

                <br />

                <h2 className="skills-title">Others</h2>
                <p className="skills-content">RESTful API, Git, GitHub</p>
                <p className="skills-content">Material UI, HTML, CSS, Bootstrap, Scss, Javascript</p>
                <p className="skills-content">C#, SQL, SQLite, SQL Server, MySQL, Firebase</p>
                <p className="skills-content">CMS WordPress, Web Hosting, Website Migration, Web Host Manager, Cpanel, SEO</p>
                <p className="skills-content">Adobe Photoshop, Adobe After Effects, Filmora</p>

            </div>

        </div>
    )
}

export default Skills;