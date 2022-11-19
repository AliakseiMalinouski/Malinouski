import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Intrudaction from './components/IntrudactionComponent';
// import arrayItem from './json/arrayItems.json';
// import Taprola from './components/TaprolaComponent';
// import colorsArray from './json/colorsArray.json';
import {PagesRouter} from './router/PagesRouter';

let newItemH = {};

ReactDOM.render(
    // <Taprola
    //     array={arrayItem}
    //     newItemH={newItemH}
    //     arrayColors={colorsArray}
    // />,
    <BrowserRouter>
        <Intrudaction />
        <PagesRouter/>
    </BrowserRouter>,
    document.getElementById('container')
)


