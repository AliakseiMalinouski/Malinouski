import React from 'react';
import Taprola from '../components/TaprolaComponent';
import arrayItem from '../json/arrayItems.json';

let newItemH = {};

export const PageTaprola = () => {
          
  return (
    <Taprola array={arrayItem} newItemH={newItemH}/>
  );
    
}