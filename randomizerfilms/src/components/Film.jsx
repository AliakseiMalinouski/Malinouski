import React from 'react';
import { filmsEvents } from '../events';
import { useEffect } from 'react';

export const Film = ({ code, name, year, duration, genre, director, actors, image, plot, rating}) => {
    
    useEffect(() => {
        if (code === undefined || name === undefined || year === undefined || duration === undefined || genre === undefined || director === undefined || actors === undefined || image === undefined || plot === undefined || rating === undefined) {
            filmsEvents.emit('ViewNewFilm');
        }
    }, [code, name, year, duration, genre, director, actors, image, plot, rating]);


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