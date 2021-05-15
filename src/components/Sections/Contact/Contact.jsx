import React, { useState, useEffect } from 'react';
import githubImg from '../../../assets/github.png';
import linkedIn from '../../../assets/linkedin.png';
import emailjs from 'emailjs-com';
import './Contact.scss';

const Contact = () => {

    const [ids, setIds] = useState({})

    useEffect(() => {
        setIds({
            serviceId: process.env.REACT_APP_SERVICE_ID,
            templateId: process.env.REACT_APP_TEMPLATE_ID,
            userID: process.env.REACT_APP_USER_ID
        })
    }, [])

    const [animationEnd, setAnimationEnd] = useState(false)
    const [transitionEnd, setTransitionEnd] = useState(false)
    const [messageSent, setMessageSent] = useState('');

    const animationDidEnd = () => {
        setAnimationEnd(state => state = true)
    }

    const transitionDidEnd = () => {
        setTransitionEnd(state => state = true)
    }

    const sendEmail = async (e) => {

        e.preventDefault();

        await emailjs.sendForm(ids.serviceId, ids.templateId, e.target, ids.userID)
        .then((result) => {
            
            console.log(result.text);
            setMessageSent(message => message = 'Message was successfully sent.')

        }, (error) => {
            console.log(error.text);
        });

        e.target.reset()
    }

    return (
        <div className='contact-container'>

            <h1 className="contact-heading" onAnimationEnd={animationDidEnd}>Contact</h1>
            <p className={animationEnd ? "contact-content" : "hide contact-content"}>Need a Website for your business, Ecommerce, Hosting Services, Domain, SSL Certificate?</p>

            <br />

            <p className={animationEnd ? "contact-content" : "hide contact-content"} onTransitionEnd={transitionDidEnd}><b>Let's talk</b></p>

            <div className={transitionEnd ? "form-container" : "hide form-container"}>

                <form action="" className="form" onSubmit={sendEmail}>
                    Name:
                    <input type="text" name="name" required className="email" />
                    Email:
                    <input type="email" name="email" required className="name" />
                    Message
                    <textarea name="message" id="" cols="30" rows="10" required className="message"></textarea>
                    <button className="btn-send">Send message</button>
                </form>

                <p className="contact-content">Connect with with on 

                <br />

                <a href="https://github.com/Eudinson" target="_blank" rel="noreferrer"><img src={githubImg} alt="github"/></a>
                <a href="https://www.linkedin.com/in/eudinson-uy-6970a1128/" target="_blank" rel="noreferrer"><img src={linkedIn} alt="linkedin"/></a>
                
                </p>

            </div>

        </div>
    )
}

export default Contact;