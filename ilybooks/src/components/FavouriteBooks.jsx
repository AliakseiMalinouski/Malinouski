import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FavouriteBook } from './FavouriteBook';
import { resetFavourite } from '../Redux/favouriteBookSlice';

export const FavouriteBooks = () => {

    const favouriteBooks = useSelector(state => state.favouriteBook.book);

    let dispatch = useDispatch();

    const clearFavourite = () => {
        let proofReset = window.confirm("Are you sure?");
        if(proofReset) dispatch(resetFavourite());
    }

    return (
        <div className='FavouriteBooks'>
            {
                (!favouriteBooks.length)
                    ?
                    null
                    :
                    <button type='button' onClick={clearFavourite} className='ResetFavourite'>Clear</button>
            }
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