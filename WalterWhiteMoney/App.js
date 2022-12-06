import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './src/i18n/config';
import { Provider } from 'react-redux';
import {store} from './redux/store';

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            
        </Provider>
    </BrowserRouter>,
    document.getElementById('container')
)


