import React, { useState } from 'react';
import './About.scss';

const About = () => {

    const companies = [
        {
            companyName : 'F3 Offshore',
            companyAddress : 'Dubai, UAE',
            position : 'Full Stack Web Application Developer',
            employmentDate : 'June 2021 – Current'
        },
        {
            companyName : 'Mittal Facility Management LLC',
            companyAddress : 'Dubai, UAE',
            position : 'Web Developer | IT Support',
            employmentDate : 'March 2019 - October 2020'
        },
        {
            companyName : 'Provincial Information and Communication Technology Office',
            companyAddress : 'Lucena City, Philippines',
            position : 'IT Support',
            employmentDate : 'November 2015 – March 2016'
        }
    ]

    const [animationEnd, setAnimationEnd] = useState(false)
    const [transitionEnd, setTransitionEnd] = useState(false)
    const [transitionEnd2, setTransitionEnd2] = useState(false)

    const animationDidEnd = () => {
        setAnimationEnd(state => state = true)
    }

    const transitionDidEnd = () => {
        setTransitionEnd(state => state = true)
    }

    const transitionDidEnd2 = () => {
        setTransitionEnd2(state => state = true)
    }

    return (
        <div className='about-container'>

            <h1 className="about-heading" onAnimationEnd={animationDidEnd}>About</h1>

            <p className={animationEnd ? "about-content" : "hide about-content"}>
                I am a full stack web application developer and
            </p>
            <p className={animationEnd ? "about-content" : "hide about-content"}>
                passionate in learning new technologies.
            </p>
            <p className={animationEnd ? "about-content" : "hide about-content"}>
                Most of all, I love coffee ☕.
            </p>
            <br />

            <p className={animationEnd ? "about-content" : "hide about-content"} 
            onTransitionEnd={transitionDidEnd}>
                I am always open to new opportunities that will help me grow in my knowledge & skills.
            </p>
            <p className={animationEnd ? "about-content" : "hide about-content"} 
            onTransitionEnd={transitionDidEnd}>
                To GOD be the glory always!
            </p>  
            
            <br />

            <h2 className={transitionEnd ? "about-sub-heading" : "hide about-sub-heading"} onTransitionEnd={transitionDidEnd2}>Companies I worked with</h2>
            
            <br />

            {
                companies.map(({companyName, companyAddress, position, employmentDate}, index) => {
                    return(
                        <div key={index} className={transitionEnd2 ? "companies-container" : "hide companies-container" }>
                
                            <p className="about-companies-content"><b>{companyName}</b></p>
                            <p className="about-companies-content">{companyAddress}</p>
                            <p className="about-companies-content">{position}</p>
                            <p className="about-companies-content">{employmentDate}</p>
                            
                            <br />
                    
                        </div>
                    )
                })
               
            }
            
        </div>
    )
}

export default About;