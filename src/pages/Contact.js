import React from 'react';
import Navigation from '../components/Navigation';

const Contact = () => {
    return (
        <div className='contact'>
            <Navigation />
            <div className="contactContent">
                <div className="header"></div>
                    <div className="contactBox">
                        <h1>Contactez-moi</h1>
                        <ul>
                            <li>
                                <i className='fas fa-map-marker-alt'></i>
                                <span>Bordeaux</span>
                            </li>

                            <li>
                                <i className='fas fa-mobile-alt'></i>
                                <span 
                                    className="clickInput"
                                    onClick={() => window.location = 'tel:+33671834673'}
                                >
                                    06 71 83 46 73    
                                </span>                               
                            </li>

                            <li>
                                <i className='far fa-envelope'></i>
                                <span 
                                    className="clickInput"
                                    onClick={() => window.location = 'mailto:fouzia.hollande@gmail.com'}
                                >
                                fouzia.hollande@gmail.com  
                                </span>   
                            </li>

                        </ul>
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
                </ul>
            </div>
        </div>
    </div>
        
    );
};

export default Contact;