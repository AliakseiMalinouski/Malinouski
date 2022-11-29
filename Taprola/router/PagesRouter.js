import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageTaprola } from '../pages/PageTaprola';
import { PageIntrudaction } from '../pages/PageIntrudaction';
import { PageOptions } from '../pages/PageOptions';
import { PageMenu } from '../pages/PageMenu';
import { Category } from '../components/CategoryComponent';

export const PagesRouter = () => {
          
    return (
      <Routes>
        <Route path='/' element={<PageIntrudaction/>} />
        <Route path="/taprola" element={<PageTaprola />} />
        <Route path='/options' element={<PageOptions />} />
        <Route path='/menu' element={<PageMenu />} />
        <Route path='/menudetails/:category' element={<Category/>}/>
      </Routes>
    );
    
};