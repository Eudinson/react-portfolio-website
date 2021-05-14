import React, { useState } from 'react';
import './Sections.scss';

const About = () => {

    const [fade, fadeState] = useState(false)

    const fadeEvent = () => {
        fadeState(state => state = true)
    }

    return (
        <div className='section'>
            <div className="section-title-container" onAnimationEnd={fadeEvent}>
                <h1 className="section-title">About</h1>
            </div>
            <div className={fade ? 'set-section-content' : 'section-content'}>
                <p className="content">I am a freelance web developer and I am always open to new opportunities.</p>

                <p className="content">I build dynamic and responsive websites, create beautiful logos,
                edit photos and videos, passionate in learning the latest technologies,
                and loves drinking coffee ☕.</p>

                <p className="content"><b>Companies I worked with:</b></p>

                <p className="content"><span style={{ color: 'red' }}>Mittal Facility LLC, Dubai, UAE </span> - IT Support | Web Developer from March 2019 - October 2020.</p>

                <p className="content"><span style={{ color: 'red' }}>Driven Properties LLC, Dubai, UAE </span> - Administrative Assistant from August 2017 – September 2018.</p>

                <p className="content"><span style={{ color: 'red' }}>Provincial Information and Communication Technology Office, Lucena City, Philippines </span> - IT Support from November 2015 – March 2016.</p>

            </div>
        </div>
    )
}

export default About;