import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BookBasket } from './BookBasket';
import { clearBasket } from '../Redux/basketSlice';
import { useState, useEffect } from 'react';

export const Basket = React.memo(() => {

    const items = useSelector(state => state.basket.basket);
    const [total, setTotal] = useState(null);

    useEffect(() => {
        setTotal((9.99 * items.length) + 4.99);
    }, [items, total, setTotal])

    let dispatch = useDispatch();

    const resetBasket = () => {
        let proofDelete = window.confirm("Are you sure?");
        if(proofDelete) dispatch(clearBasket());
    }

    


    return (
        <div className='Cart'>
            <div className='BasketBooks'>
            <h5>Home / Cart</h5>
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
            {
                (items.length)
                    ?
                <div className='InformationAboutBookBasket'>
                    <div className='Summary'>
                    <h4>Summary</h4>
                    <h5>
                        Subtotal: <span>9.99$</span>
                    </h5>
                    <h5>
                        Delivery: <span>4.99$</span>
                    </h5>
                    </div>
                    <div className='Total'>
                        <h5>Total: <span>{total}$</span></h5>
                        <button>Checkout</button>
                    </div>
                </div>
                    :
                    null
            }
        </div>
    )
})