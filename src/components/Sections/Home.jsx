import React, { useState } from 'react';
import './Sections.scss';
import Head from '../../assets/Programmer/head.svg';
import LeftArm from '../../assets/Programmer/leftarm.svg';
import Body from '../../assets/Programmer/prog.svg';

const Home = () => {

    const [fade, fadeState] = useState(false);

    const fadeEvent = () => {
        fadeState(state => state = true)
    }

    return (
        <div className='section'>
            <div className="home-content">
                <h1 className='fade' onAnimationEnd={fadeEvent}>Hello World,</h1>
                <span className={ fade ? 'show showNow' : 'show'}>how are you today?</span>
                <div className="img-container">
                    <img src={Head} alt="head" className="head" />
                    <img src={LeftArm} alt="left-arm" className="left-arm" />
                    <img src={Body} alt="body" className="body" />
                </div>
            </div>
        </div>
    )
}

export default Home;