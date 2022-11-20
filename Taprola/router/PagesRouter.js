import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageTaprola } from '../pages/PageTaprola';
import { PageIntrudaction } from '../pages/PageIntrudaction';

export const PagesRouter = () => {
          
    return (
      <Routes>
        <Route path='/' element={<PageIntrudaction/>} />
        <Route path="/taprola" element={<PageTaprola/>} />
      </Routes>
    );
    
};