import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FavouriteBook } from './FavouriteBook';
import { resetFavourite } from '../Redux/favouriteBookSlice';
import { EmptyBasket } from './EmptyBasket';

export const FavouriteBooks = () => {

    const favouriteBooks = useSelector(state => state.favouriteBook.book);

    let dispatch = useDispatch();

    const clearFavourite = () => {
        let proofReset = window.confirm("Are you sure?");
        if(proofReset) dispatch(resetFavourite());
    }

    return (
        <div className='FavouriteBooks' style={{width: favouriteBooks.length ? "" : "100%"}}>
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
                    <div className='EmptyBasket'>
                        <EmptyBasket/>
                    </div>
                    :
                    favouriteBooks.map(e => <FavouriteBook key={e.code} code={e.code} name={e.name} image={e.image} arrow={e.arrow} type={e.type} />)
            }
        </div>
    )
}