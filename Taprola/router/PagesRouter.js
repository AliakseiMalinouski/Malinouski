import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageTaprola } from '../pages/PageTaprola';
import { PageIntrudaction } from '../pages/PageIntrudaction';
import { PageOptions } from '../pages/PageOptions';
import { PageMenu } from '../pages/PageMenu';
import { PageSend } from '../pages/PageSend';
import { PageSendedForm } from '../pages/PageSendedForm';
import { PageReviews } from '../pages/PageReviews';

export const PagesRouter = () => {
          
    return (
      <Routes>
        <Route path='/' element={<PageIntrudaction/>} />
        <Route path="/taprola" element={<PageTaprola />} />
        <Route path='/options' element={<PageOptions />} />
        <Route path='/send' element={<PageSend/>} />
        <Route path='/menu' element={<PageMenu />} />
        <Route path='/sendedform' element={<PageSendedForm />} />
        <Route path='/reviews' element={<PageReviews/>} />
      </Routes>
    );
    
};