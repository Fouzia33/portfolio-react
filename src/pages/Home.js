import React from 'react';

import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className='home'>
            <Navigation />
            <div className="homeContent">
                <h1>Fouzia Hollande</h1>
                <h2>Développeuse fullstack</h2>
                <div className="pdf">
                    <a href="./media/CV.pdf" target="_blank">Télécharger CV</a>
                </div>
            </div>
        </div>
    );
};

export default Home;