import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageRandomizerFilms } from '../Pages/PageRandomizerFilms';

export const PageRouter = () => {
    return (
    <Routes>
        <Route path='/' element={<PageRandomizerFilms/>} />
    </Routes>
    )
}