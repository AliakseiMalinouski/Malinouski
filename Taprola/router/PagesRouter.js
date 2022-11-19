import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageTaprola } from '../pages/PageTaprola';

export const PagesRouter = () => {
          
    return (
      <Routes>
        <Route path="/taprola" element={<PageTaprola/>} />
      </Routes>
    );
    
};