import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listThunk } from '../Redux/listThunk';
import { iconThunk } from '../Redux/iconThunk';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const Header = React.memo(() => {

    let dispatch = useDispatch();
    let navigate = useNavigate();

    const list = useSelector(state => state.list.data);
    const favouriteBooks = useSelector(state => state.favouriteBook.book);
    const itemsBasket = useSelector(state => state.basket.basket);

    useEffect(() => {
        dispatch(listThunk);
    }, [dispatch]);

    useEffect(() => {
        dispatch(iconThunk);
    }, [dispatch]);

    const goToFavouriteBooksPage = () => {
        navigate('/favourite-books');
    }

    const goToBasketPage = () => {
        navigate('/basket');
    }

    return (
        <div className='Header'>
            <img src='https://i.ibb.co/vdKGBYM/ilybooks.png' alt='Logo' className='Logo' />
            <ul className='ListPageHeader'>
                {
                    list.map(e => <NavLink key={e.code} to={e.url} className='ListPage'>{e.page}</NavLink>)
                }
            </ul>
            <div className='RestHeader'>
                <input type='text' className='Search' maxLength='100'/>
                <img src='https://i.ibb.co/RzHWngP/Vector-4.png' alt='Search Button' className='SearchButton' />
                <div className='WrapperBasket'>
                    <img src='https://i.ibb.co/QDr4LFc/Vector-5.png' alt='Basket' onClick={goToBasketPage}/>
                    <span className='QuantityOfFavouriteBooks'>{itemsBasket.length}</span>
                </div>
                <div className='WrapperHeart'>
                    <img src='https://i.ibb.co/wNTx56p/heart.png' alt='Heart' onClick={goToFavouriteBooksPage} />
                    <span className='QuantityOfFavouriteBooks'>{favouriteBooks.length}</span>
                </div>
                <img src='https://i.ibb.co/r2Gt8FV/account.png' alt='Account' />
            </div>
            <div className='BigStaticText'>
                <p></p>
            </div>
        </div>
    )
})