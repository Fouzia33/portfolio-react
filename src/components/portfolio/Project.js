import React, { Component } from 'react'

export default class Project extends Component {
    state = {
        showInfo: false
    }

    handleInfo = () => {
        this.setState({
            showInfo: !this.state.showInfo
        })
    }

    render() {
        let { name, languagesIcons, source, info, picture, webSite } = this.props.item;

        return (
           <div className="project">
               <div className="icons">
                   {languagesIcons.map(icon =>
                        <i className={icon} key={icon}></i>
                    )}
               </div>
               <h3>{name}</h3>
               <img src={picture} alt="" onClick={this.handleInfo} />
               <span className='infos' onClick={this.handleInfo}>
                   <i className='fas fa-plus-circle'></i>
               </span>

               {
                   this.state.showInfo && (
                    <div className="showInfos">
                        <div className="infosContent">
                            <div className="head">
                                <h2>{name}</h2>
                                <span>{info}</span>
                                {source !== '' && 
                                <div className="button sourceCode">
                                    <a href={source} rel='noopener noreferrer' target="_blank">Code source</a>
                                </div>
                                }
                                 {webSite !== '' && 
                                 <div className="button webSite">
                                 <a href={webSite} rel='noopener noreferrer' target="_blank">Visiter</a> 
                                 </div>
                                }
                               
                                <div className="button return" on onClick={this.handleInfo}>
                                    <i class="fas fa-undo"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                   )
               }
           </div>
        );
    }
}
