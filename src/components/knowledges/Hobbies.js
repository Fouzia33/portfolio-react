import React from 'react';

const Hobbies = () => {
    return (
        <div className='hobbies'>
            <h3>Intérêts</h3>
            <ul>

                <li className='hobby'>
                    <i className='fas fa-hiking'></i>
                    <span> Randonnées </span>
                </li>

                <li className='hobby'>
                    <i className='fas fa-spa'></i>
                    <span> Yoga </span>
                </li>

                <li className='hobby'>
                    <i className='fas fa-plane'></i>
                    <span> Voyage </span>
                </li>

                <li className='hobby'>
                    <i className='fas fa-seedling'></i>
                    <span> Jardinage </span>
                </li>

                <li className='hobby'>
                    <i className='fas fa-film'></i>
                    <span> Séries </span>
                </li>

            </ul>
        
        </div>
    );
};

export default Hobbies;