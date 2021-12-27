import React from 'react';
import Experiences from '../components/knowledges/Experiences';
import Languages from '../components/knowledges/Languages';
import Hobbies from '../components/knowledges/Hobbies';
import OtherSkills from '../components/knowledges/OtherSkills';
import Navigation from '../components/Navigation';

const Knowledges = () => {
    return (
        <div className='knowledges'>
            <Navigation />
            <div className="knowledgesContent">
                <Languages />
                <Experiences />
                <OtherSkills  />
                <Hobbies />
            </div>
        </div>
    );
};

export default Knowledges;