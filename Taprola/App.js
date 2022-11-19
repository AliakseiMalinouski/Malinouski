import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Intrudaction from './components/IntrudactionComponent';
import {PagesRouter} from './router/PagesRouter';

let newItemH = {};

ReactDOM.render(
    <BrowserRouter>
        <Intrudaction />
        <PagesRouter/>
    </BrowserRouter>,
    document.getElementById('container')
)


