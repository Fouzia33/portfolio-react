import React from 'react';
import { NavLink } from 'react-router-dom';
const Navigation = () => {
    return (
        // header
        <div className='sidebar'>

            <div className="id">
                <div className="idContent">
                  <img src="./media/moi.jpg" alt="profil-pic" />
                  <h3>Fouzia Hollande</h3>
                </div>
            </div>

            {/* navbar */}
            <div className="navigation">
                <ul>

                    <li>
                        <NavLink exact to="/" activeClassName='navActive'>
                            <i className='fas fa-home'></i>
                            <span>Accueil</span>
                        </NavLink>  
                    </li>

                    <li>
                        <NavLink exact to="/competences" activeClassName='navActive'>
                            <i className='fas fa-mountain'></i>
                            <span>Compétences</span>
                        </NavLink>  
                    </li>

                    <li>
                        <NavLink exact to="/portfolio" activeClassName='navActive'>
                            <i className='fas fa-images'></i>
                            <span>Portfolio</span>
                        </NavLink>  
                    </li>

                    <li>
                        <NavLink exact to="/contact" activeClassName='navActive'>
                            <i className='fas fa-address-book'></i>
                            <span>Contact</span>
                        </NavLink>  
                    </li>
                    
                </ul>
            </div>

            {/* social network */}
            <div className="socialNetwork">
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/fouzia-hollande/" target="_blank" rel='noopener noreferrer' ><i className="fab fa-linkedin"></i></a>
                    </li>

                    <li>
                        <a href="https://github.com/" target="_blank" rel='noopener noreferrer' ><i className="fab fa-github"></i></a>
                    </li>

                    <li>
                        <a href="https://twitter.com/home" target="_blank" rel='noopener noreferrer' ><i className="fab fa-twitter"></i></a>
                    </li>
                </ul>

                {/* footer */}
                <div className="signature">
                    <p>Copyright Fouzia Hollande</p>
                </div>
            </div>
        </div>
    );
};

export default Navigation;