import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageTaprola } from '../pages/PageTaprola';
import { PageIntrudaction } from '../pages/PageIntrudaction';
import { PageOptions } from '../pages/PageOptions';
import { PageMenu } from '../pages/PageMenu';
import { PageSend } from '../pages/PageSend';
import { PageSendedForm } from '../pages/PageSendedForm';
import { PageReviews } from '../pages/PageReviews';
import { PageSlider } from '../pages/PageSlider';
import { PageAuth } from '../pages/PageAuth';

export const PagesRouter = () => {
          
    return (
      <Routes>
        <Route path='/registration' element={<PageAuth/>} />
        <Route path='/intrudaction' element={<PageIntrudaction/>} />
        <Route path="/" element={<PageTaprola />} />
        <Route path='/options' element={<PageOptions />} />
        <Route path='/send' element={<PageSend/>} />
        <Route path='/menu' element={<PageMenu />} />
        <Route path='/sendedform' element={<PageSendedForm />} />
        <Route path='/reviews' element={<PageReviews />} />
        <Route path='/gallery' element={<PageSlider/>} />
      </Routes>
    );
    
};