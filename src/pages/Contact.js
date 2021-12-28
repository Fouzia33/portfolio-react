import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contact = () => {
    return (
        <div className='contact'>
            <Navigation />
            <div className="contactContent">
                <div className="header">
                    <div className="contactBox">
                        <h1>Contactez-moi</h1>
                        <ul>
                            <li>
                                <i className='fas fa-map-marker-alt'></i>
                                <span>Bordeaux</span>
                            </li>

                            <li>
                                <i className='fas fa-mobile-alt'></i>
                                <CopyToClipboard text='0671834673'>
                                    <span 
                                        className="clickInput"
                                        onClick={() => { alert('Téléphone copié!');}}
                                    >
                                        06 71 83 46 73    
                                    </span>   
                                </CopyToClipboard>                               
                            </li>

                            <li>
                                <i className='fas fa-enveloppe'></i>
                                <CopyToClipboard text='fouzia.hollande@gmail.com'>
                                    <span 
                                        className="clickInput"
                                        onClick={() => { alert('E-mail copié!');}}
                                    >
                                        fouzia.hollande@gmail.com    
                                    </span>   
                                </CopyToClipboard>                               
                            </li>

                        </ul>
                    </div>
                </div>

                <div className="socialNetwork">
                <ul>

                    <a href="https://www.linkedin.com/in/fouzia-hollande/" target="_blank" rel='noopener noreferrer'>
                        <h4>Linkedin</h4>
                        <i className="fab fa-linkedin"></i>
                    </a>
                
                    <a href="https://github.com/" target="_blank" rel='noopener noreferrer'>
                        <h4>Github</h4>
                        <i className="fab fa-github"></i>
                    </a>
                
                    <a href="https://twitter.com/home" target="_blank" rel='noopener noreferrer'>
                        <h4>Twitter</h4>
                        <i className="fab fa-twitter"></i>
                    </a>

                    <a href="https://www.google.com" target="_blank" rel='noopener noreferrer'>
                    <h4>Codepen</h4>
                    <i className="fab fa-codepen"></i>
                    </a>

                </ul>
            </div>
        </div>
    </div>
        
    );
};

export default Contact;