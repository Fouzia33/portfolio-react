import React, { Component } from 'react'
import ProgressBar from './ProgressBar';

class Languages extends Component {
    state = {
        languages: [
            {id: 1, value: "Javascript", xp:0.9},
            {id: 2, value: "CSS", xp:1.3},
            {id: 3, value: "PHP", xp:1},
            {id: 4, value: "SQL", xp:1}           
        ],
        frameworks: [
            {id: 1, value: "React", xp:1},
            {id: 2, value: "jQuery", xp:0.3},
            {id: 3, value: "Wordpress", xp:1},
            {id: 4, value: "CodeIgniter", xp:0.3},
            {id: 4, value: "Dolibarr", xp:0.3},
        ]
    }

    render() {
        let { languages, frameworks } = this.state;

        return (
            <div className="languagesFrameworks">
                <ProgressBar 
                    languages={languages}
                    className="languagesDisplay"
                    title="languages"
                />
                <ProgressBar 
                    languages={frameworks}
                    className="frameworksDisplay"
                    title="frameworks, libraries & CMS"
                />
            </div>
        );
    }
}

export default Languages;