import React, { useEffect, useState } from 'react';
import { projectsData } from './Projects-Data/Projects-Data';
import Tilt from 'react-tilt';
import ButtonUp from '../../Button-Up/Button-Up';
import './Projects.scss';


const Projects = () => {

    const [animationEnd, setAnimationEnd] = useState(false)
    const [buttonUp, setButtonUp] = useState('')

    const animationDidEnd = () => {
        setAnimationEnd(state => state = true)
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setButtonUp(btnState => btnState = window.scrollY)
        })
    }, [])

    return (
        <div className='projects-container'>
            <h1 className="projects-heading" onAnimationEnd={animationDidEnd}>Projects</h1>
            <br />
            {
                projectsData.map(({ id, websiteName, websiteUrl, img, technology, description, integration, status }) => {
                    return (
                        <div key={id}>
                            <div className={animationEnd ? "projects" : "hide projects"}>

                                <div className="projects-detail-container">
                                    <h3 className="project-title">{websiteName}</h3>

                                    <h3 className="project-subtitle">Status:</h3>
                                    <p className="project-description">{status}</p>

                                    <h3 className="project-subtitle">Project Description:</h3>
                                    <p className="project-description">{description}</p>

                                    <h3 className="project-subtitle">Technology:</h3>
                                    <p className="project-technology">{technology}</p>
                                    {
                                        integration &&
                                        <>
                                            <h3 className="project-subtitle">Integration:</h3>
                                            <p className="project-integration">{integration}</p>
                                        </>
                                    }

                                    {
                                        websiteUrl
                                            ?
                                            <a
                                                className="project-url-btn"
                                                href={websiteUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                Visit Link
                                            </a>
                                            :
                                            <span
                                                className="project-url-btn"
                                            >
                                                Link Not Available
                                            </span>
                                    }

                                </div>
                                <div className="projects-img-container">
                                    <Tilt className="tilt" options={{ max: 25, scale: 1 }} >
                                        <img src={img} alt="project" className="project-img" />
                                    </Tilt>
                                </div>
                            </div>

                            <br />
                            <br />
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