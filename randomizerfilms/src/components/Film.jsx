import React from 'react';
import { filmsEvents } from '../events';

export const Film = ({ code, name, year, duration, genre, director, actors, image, plot, rating , workMode}) => {
    
    const viewNewFilm = () => {
        filmsEvents.emit('ViewNewFilm');
    }

    return (
        <div className='Film'>
            <img src={image} alt='Poster' className='Poster' />
            <button onClick={viewNewFilm}>click</button>
        </div>
    )
}