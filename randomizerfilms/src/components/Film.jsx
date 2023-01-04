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

    if (code === undefined || name === undefined || year === undefined || duration === undefined || genre === undefined || director === undefined || actors === undefined || image === undefined || plot === undefined || rating === undefined) {
        return (
            <div className='Film'>
                <h4 className='Welcome'>Welcome to the Film Randomiser! Here you can quickly find the film that suits you with one click!</h4>
                <button onClick={viewNewFilm} className='UpdateFilmButton'>Recommend</button>
            </div>
        )
    }
    else {
        return (
        <div className='Film'>
            <img src={image} alt='Poster' className='Poster' />
            <h3 className='Name'>{name}</h3>
            <div className='DurationActorsYear'>
                <span>{year}</span>
                <span>{genre}</span>
                <span>{duration} min</span>
            </div>
            <div className='Rating'>
                <span className='SpanRating'><img src='https://img.icons8.com/color/512/imdb.png' alt='IMDd Logo' className='IMGb' /> {rating}</span>
                <a href='https://unogs.com/' target='_blank' rel="noreferrer" className='Streaming'>Who is streaming?</a>
            </div>
            <div className='InformationAboutFilm'>
                Director
                <p>{director}</p>
            </div>
            <div className='InformationAboutFilm'>
                Actors
                <p>{actors}</p>
            </div>
            <div className='InformationAboutFilm'>
                Plot
                <p>{plot}</p>
            </div>
            <button onClick={viewNewFilm} className='UpdateFilmButton'>Another film</button>
        </div>
    )
    }
}