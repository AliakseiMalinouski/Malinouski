import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageContainer } from '../pages/PageContainer';

export const PagesRouter = () => {

    return (
        <Routes>
            <Route path='/' element={<PageContainer/>}/>
        </Routes>
    )
}