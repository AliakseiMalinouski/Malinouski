import React from 'react';
import ReactDOM from 'react-dom';
import arrayItem from './json/arrayItems.json';
import Taprola from './components/TaprolaComponent';

ReactDOM.render(
    <Taprola
        array={arrayItem}
    />,
    document.getElementById('container')
)


