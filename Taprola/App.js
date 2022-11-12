import React from 'react';
import ReactDOM from 'react-dom';
import arrayItem from './json/arrayItems.json';
import Taprola from './components/TaprolaComponent';

let newItemH = {};

ReactDOM.render(
    <Taprola
        array={arrayItem}
        newItemH={newItemH}
    />,
    document.getElementById('container')
)


