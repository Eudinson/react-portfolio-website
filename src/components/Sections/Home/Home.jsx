import React, { useState } from 'react';
import './Home.scss';

const Home = () => {

    const [animationEnd, setAnimationEnd] = useState(false)
    const [transitionEnd, setTransitionEnd] = useState(false)
    const [transitionEnd2, setTransitionEnd2] = useState(false)

    const animationDidEnd = () => {
        setAnimationEnd(state => state = true)
    }

    const transitionDidEnd = () => {
        setTransitionEnd(state => state = true)
    }

    const transitionDidEnd2= () => {
        setTransitionEnd2(state => state = true)
    }

    return (
        <div className='home-container'>
            <div className="heading-container">
                <h2 className="sub-heading-1" onAnimationEnd={animationDidEnd}>Hello World</h2>
                <h1 className={animationEnd ? 'heading-1' : 'hide heading-1'} onTransitionEnd={transitionDidEnd}>I'm</h1>
                <h1 className={transitionEnd ? 'heading-2' : 'hide heading-2'} onTransitionEnd={transitionDidEnd2}>Eudin</h1>
                <h2 className={transitionEnd2 ? 'sub-heading-2' : 'hide sub-heading-2'}>I am a freelance web developer</h2>
            </div>
        </div>
    )
}

export default Home;