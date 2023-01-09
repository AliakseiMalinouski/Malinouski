import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BookBasket } from './BookBasket';
import { clearBasket } from '../Redux/basketSlice';

export const Basket = React.memo(() => {

    let dispatch = useDispatch();


    const items = useSelector(state => state.basket.basket);

    const resetBasket = () => {
        let proofDelete = window.confirm("Are you sure?");
        if(proofDelete) dispatch(clearBasket());
    }


    return (
        <div className='BasketBooks'>
            {
                (!items.length)
                    ?
                    null
                    :
                    <button type='button' onClick={resetBasket} className='ClearBasketButton'>Clear basket</button>
            }
            {
                (!items.length)
                    ?
                    <div>
                        Basket is empty
                    </div>
                    :
                    items.map(e => <BookBasket key={e.code} code={e.code} name={e.name} image={e.image} arrow={e.arrow} type={e.type}/>)
            }
        </div>
    )
})