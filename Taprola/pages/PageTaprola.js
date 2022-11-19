import React from 'react';
import Taprola from '../components/TaprolaComponent';
import arrayItem from '../json/arrayItems.json';
import colorsArray from '../json/colorsArray.json';

let newItemH = {};

export const PageTaprola = () => {
          
  return (
    <Taprola array={arrayItem} newItemH={newItemH} arrayColors={colorsArray}/>
  );
    
}