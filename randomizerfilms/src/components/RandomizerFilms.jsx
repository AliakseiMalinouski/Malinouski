import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect, useMemo } from 'react';
import { loadFilms } from '../Redux/loadFilms';
import { Film } from './Film';
import { filmsEvents } from '../events';

export const RandomizerFilms = React.memo(() => {

    const [currentFilm, setCurrentFilm] = useState({});


    const loadState = useSelector(state => state.films.loadState);
    const films = useSelector(state => state.films.filmsArray);

    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadFilms);
    }, [dispatch]);

    useEffect(() => {
        filmsEvents.addListener('ViewNewFilm', viewNewFilm);
        return () => {
            filmsEvents.removeListener('ViewNewFilm', viewNewFilm);
        }
    });

    let filmsMemoizeed = useMemo(() => <Film
        key={currentFilm.id}
        code={currentFilm.id}
        name={currentFilm.name}
        year={currentFilm.year}
        rating={currentFilm.rating}
        actors={currentFilm.actors}
        genre={currentFilm.genre}
        duration={currentFilm.duration}
        director={currentFilm.director}
        plot={currentFilm.plot}
        image={currentFilm.image}
    />, [currentFilm]);


    const viewNewFilm = () => {
        films.forEach(el => {
            if (el.id === currentFilm.id) {
                setCurrentFilm(films[Math.floor(Math.random() * films.length)]);
            }
        });
        setCurrentFilm(films[Math.floor(Math.random() * films.length)]);
    }

    return (
        <div className='RandomizerFilms'>
            {(loadState === 1) && <img src='https://cdn-icons-png.flaticon.com/512/9053/9053458.png' alt='Loading' className='Loading'/>}
            {(loadState === 2) && filmsMemoizeed}
            {(loadState === 3) && <div>Error</div>}
        </div>
    )
})