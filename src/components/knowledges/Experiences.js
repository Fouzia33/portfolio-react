import React from 'react';

const Experiences = () => {
    return (
        <div className='experience'>
            <h3>Expériences</h3>
            
            <div className="exp-1">
                <h4>Développeuse web en stage - Kafein Studio</h4>
                <h5>2021-2022</h5>
                <p>J'ai développé une newsletter avec jQuery et Wordpress pour débuter. Puis j'ai développé un module de A à Z avec le CRM Dolibarr.</p>
            </div>

            <div className="exp-2">
                <h4>Développeuse web en formation - O'clock</h4>
                <h5>2021</h5>
                <p>J'ai développé une application web visant à aider les utilisaires à concevoir un potager, grâce à un calendrier personnalisé permettant de choisir quoi et quand planter.</p>
            </div>

        </div>
    );
};

export default Experiences;