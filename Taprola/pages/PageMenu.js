import React from 'react';
import MenuComponent from '../components/MenuComponent';
import ArrayCategories from '../json/arrayCategories.json';

export const PageMenu =  () => {
    return (
        <MenuComponent array={ArrayCategories} />
    )
}