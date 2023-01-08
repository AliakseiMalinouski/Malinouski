import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FavouriteBook } from './FavouriteBook';

export const FavouriteBooks = () => {

    const favouriteBooks = useSelector(state => state.favouriteBook.book);



    console.log(favouriteBooks)

    return (
        <div className='FavouriteBooks'>
            {
                (!favouriteBooks.length)
                    ?
                    <div>Add something</div>
                    :
                    favouriteBooks.map(e => <FavouriteBook key={e.code} code={e.code} name={e.name} image={e.image} arrow={e.arrow} type={e.type} />)
            }
        </div>
    )
}