import React from 'react';

const Experiences = () => {
    return (
        <div className='experience'>
            <h3>Expériences</h3>
            
            <div className="exp-1">
                <h4>Kafein Studio | Développeuse web en stage </h4>
                <h5>2021-2022</h5>
                <p>Développement d'une newsletter avec jQuery et Wordpress sur le site Kap Domaines.</p>
                <p>Création d'un module de A à Z avec le CRM Dolibarr, pour la gestion des noms de domaines de l'entreprise.</p>
                <p>Développement de fonctionnalités avec CodeIgniter pour le SIT Kap Tourisme.</p>
                <p>Traduction en anglais du site Kitbot avec Laravel .</p>
            </div>

            <div className="exp-2">
                <h4>O'clock | Développeuse web en formation </h4>
                <h5>Août 2021</h5>
                <p>J'ai développé une application web visant à aider les utilisateurs à concevoir un potager, grâce à un calendrier personnalisé permettant de choisir quoi et quand planter.</p>
                <p>J'ai également eu l'occasion de développer plusieurs petits projets pendant ma formation.</p>
            </div>

        </div>
    );
};

export default Experiences;