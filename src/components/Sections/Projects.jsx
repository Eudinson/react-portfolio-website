import React, { useEffect, useState } from 'react';
import './Sections.scss';
import { projectsData } from '../../Projects-Data/Projects-Data';
import Tilt from 'react-tilt';
import ButtonUp from '../Button-Up/Button-Up';


const Projects = () => {

    const [fade, fadeState] = useState(false);
    const [buttonUp, setButtonUp] = useState('')

    const fadeEvent = () => {
        fadeState(state => state = true)
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setButtonUp(btnState => btnState = window.scrollY)
        })
    }, [])

    return (
        <div className='section'>
            <div className="section-title-container" onAnimationEnd={fadeEvent}>
                <h1 className="section-title">Projects</h1>
            </div>
            {
                projectsData.map(({ id, websiteName, websiteUrl, img, technology, description }) => {
                    return (
                        <div key={id} className={ fade ? "projects-container" : "projects-container-hide"}>

                            <div className="project-detail-container">
                                <h3 className="project-title">{websiteName}</h3>

                                <h3 className="project-subtitle">Project description:</h3>
                                <p className="project-description">{description}</p>

                                <h3 className="project-subtitle">Technology used:</h3>
                                <p className="project-technology">{technology}</p>

                                <a
                                    className="project-url-btn"
                                    href={websiteUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Visit Website
                                    </a>
                            </div>
                            <div className="project-img-container">
                                <Tilt className="Tilt" options={{ max: 25, scale: 1 }} >
                                    <img src={img} alt="project" className="project-img" />
                                </Tilt>
                            </div>

                        </div>
                    )
                })
            }
            {
                buttonUp >= 450 
                && 
                <a href="#">
                    <ButtonUp />
                </a>
            }
        </div>
    )
}

export default Projects;