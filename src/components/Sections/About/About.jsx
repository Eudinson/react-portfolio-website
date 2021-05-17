import React, { useState } from 'react';
import './About.scss';

const About = () => {

    const companies = [
        {
            companyName : 'Mittal Facility Management LLC',
            companyAddress : 'Dubai, UAE',
            position : 'Web Developer | IT Support',
            employmentDate : 'March 2019 - October 2020'
        },
        {
            companyName : 'Driven Properties',
            companyAddress : 'Dubai, UAE',
            position : 'Administrative Assistant',
            employmentDate : 'August 2017 – September 2018'
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
                I build dynamic and responsive websites that helps business grow their market profit online, create beautiful logos,
                edit photos and videos, passionate in learning the latest technologies,
                and loves drinking coffee ☕.</p>
            <br />

            <p className={animationEnd ? "about-content" : "hide about-content"} 
            onTransitionEnd={transitionDidEnd}>
                I've been freelancing since 2018 and I am always open to new opportunities.
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