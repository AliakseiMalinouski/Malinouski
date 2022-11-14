import React from 'react';
import ReactDOM from 'react-dom';
import arrayItem from './json/arrayItems.json';
import Taprola from './components/TaprolaComponent';
import colorsArray from './json/colorsArray.json';

let newItemH = {};

ReactDOM.render(
    <Taprola
        array={arrayItem}
        newItemH={newItemH}
        arrayColors={colorsArray}
    />,
    document.getElementById('container')
)


