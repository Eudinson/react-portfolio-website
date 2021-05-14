import React, { useState } from 'react';
import './Sections.scss';

const Contact = () => {

    const [fade, fadeState] = useState(false)

    const fadeEvent = () => {
        fadeState(state => state = true)
    }

    const onSubmit = (e) => {
        e.preventDefault()
    }

    

    return (
        <div className='section'>
            <div className="section-title-container" onAnimationEnd={fadeEvent}>
                <h1 className="section-title">Contact</h1>
            </div>
            <div className={fade ? 'set-section-content' : 'section-content'}>
                <p className="content">Need a Website for your business, Ecommerce Website, Hosting Services, Domain, SSL Certificate?</p>
                <p className="content"><b>Let's talk</b></p>

                <form action="" className="form" onSubmit={onSubmit}>
                    Name:
                    <input type="text" name="name" required className="email"/>
                    Email:
                    <input type="email" name="email" required className="name"/>
                    Message
                    <textarea name="message" id="" cols="30" rows="10" required className="message"></textarea>
                    <button className="btn-send">Send message</button>
                </form>
                
               <p className="content">Connect with with on <a href="https://github.com/Eudinson" target="_blank" rel="noreferrer" style={{color:'red'}}>Github</a>, <a href="https://www.linkedin.com/in/eudinson-uy-6970a1128/" target="_blank" rel="noreferrer" style={{color:'red'}}>LinkedIn</a>.</p>
            </div>

        </div>
    )
}

export default Contact;