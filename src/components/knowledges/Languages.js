import React, { Component } from 'react'
import ProgressBar from './ProgressBar';

export default class Languages extends Component {
    state = {
        languages: [
            {id: 1, value: "Javascript", xp:1},
            {id: 2, value: "CSS", xp:1},
            {id: 3, value: "PHP", xp:1},
            {id: 4, value: "SQL", xp:1}           
        ],
        frameworks: [
            {id: 1, value: "React", xp:1},
            {id: 2, value: "jQuery", xp:1},
            {id: 3, value: "Wordpress", xp:1},
            {id: 4, value: "Lumen", xp:1}
        ]
    }
    render() {
        let { languages, frameworks } = this.state;
        return (
            <div className="languagesFrameworks">
                <ProgressBar 
                    languages={languages}
                    className="languagesDisplay"
                    title="Languages"
                />
                <ProgressBar 
                    languages={frameworks}
                    className="frameworksDisplay"
                    title="Frameworks, libraries & CMS"
                />
            </div>
        )
    }
}
