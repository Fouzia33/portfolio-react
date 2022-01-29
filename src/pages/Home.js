import React from 'react';

import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className='home'>
            <Navigation />
            <div className="homeContent">
                <div className="content">
                    <h1>Fouzia Hollande</h1>
                    <h2>Développeuse web fullstack</h2>
                    <h3>Spécialisée React</h3>
                    <div className="pdf">
                        <a href="./media/CV.pdf" target="_blank">Télécharger CV</a>
                    </div>
                </div>  
            </div>
        </div>
    );
};

export default Home;