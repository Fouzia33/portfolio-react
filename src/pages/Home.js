import React, { Component } from 'react';

import Navigation from '../components/Navigation';

export default class Home extends Component {
    state = {
        showInfo: false,
        showInfoSecondPart: false
    }

    handleInfo = () => {
        this.setState({
            showInfo: !this.state.showInfo,
        })
    }

    handleInfoSecondPart = () => {
        this.setState({
            showInfoSecondPart: !this.state.showInfoSecondPart
        })
    }

    render() {

        return (
            <div className='home'>
                <Navigation />
                <div className="homeContent">
                    <div className="content">
                        <h1>Fouzia Hollande</h1>
                        <h2>Développeuse web fullstack</h2>
                        <h3>Spécialisée React</h3>
                        <div className="description">

                            <button className="aboutMe_button">à mon sujet</button> 
                            <p className="aboutMe">
                                Je suis issue d'une reconversion professionnelle, j'ai travaillé dans le commerce où j'ai pu développer des softs-skills comme l'esprit d'équipe, la curiosité et la capacité d'adaptation. 
                            </p>   
    
                            <button onClick={this.handleInfo}>Encore un peu?</button> 
                            {
                                this.state.showInfo && (
                                    <>
                                        <p className="aboutNow">
                                        Ce sont des atouts qui me sont utiles au quotidien et qui m'ont permises d'obtenir mon titre professionnel de développeuse web et web mobile en 2021. Aujourd'hui j'ai la chance de mettre à profit mes connaissances durant un stage et au sein d'une agence web, accompagnée d'une superbe équipe qui me fait monter en compétences chaque jour.
                                        </p> 
                                        
                                        <button onClick={this.handleInfoSecondPart}>Et maintenant?</button>
                                    </>
                                )
                            }
                            {
                                this.state.showInfoSecondPart && (
                                    <p className="aboutYou">
                                    J'aimerai prolonger ce plaisir après mon stage, c'est pour cette raison que je suis à la recherche d'un poste au sein d'une entreprise qui partage ma philosophie: travailler en équipe et apprendre les uns et des autres en restant humain <i class="fas fa-heart"></i>
                                    </p>     
                                )
                            } 
                        </div>
    
                        <div className="pdf">
                            <a href="./media/CV.pdf" target="_blank">Télécharger CV</a>
                        </div>
                    </div>  
                </div>
            </div>
        );
    }
   
};
