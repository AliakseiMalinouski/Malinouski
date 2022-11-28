import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { PagesRouter } from './router/PagesRouter';
import './src/i18n/config';


ReactDOM.render(
    <BrowserRouter>
        <PagesRouter/>
    </BrowserRouter>,
    document.getElementById('container')
)


