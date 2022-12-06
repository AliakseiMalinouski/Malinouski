import React from 'react';
import { useState } from 'react';
import { Items } from './Items.jsx';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';


export const Container = ({ array }) => {
    
    const [cash, setCash] = useState(80000000);

    const arrayItems = useSelector(state => state.base);

    function Increment(price) {
        if (cash < price) {
            return false;
        }
        setCash(prev => parseFloat(prev - price));
    }

    function Decrement(price) {
        setCash(prev => parseFloat(prev + price));
    }

    return (
        <div style={{width: '100%', height: '100%'}}>
            <div className='WrapperContent'>
            <div className='AboutHero'>
                <img className='WalterWhiteImage' src='../img/ww.png' alt='Walter White image' />
                <div className='TextUnderImage'>
                    <div className='About'>The good guys are never written about as much as the bad guys</div>
                    <div className='AboutSecond'>Being rich is something you have to know how to do. Being poor is much easier</div>
                </div>
                </div>
                <div className='MainBlock'>
                    <div className='Cash'>Remaining: ${cash}</div>
                    <div className='WrapperItems'>
                        {arrayItems.workMode == 0 && <div>...loading</div>}
                        {arrayItems.workMode == 1 && arrayItems.arrayItems.map(e => <Items cash={cash} cbDecrement={Decrement} cbIncrement={Increment} key={e.code} code={e.code} image={e.image} quanlity={e.quanlity} reset={e.reset} name={e.name} price={e.price} buy={e.buy} sell={e.sell} />)}
                    </div>
                </div>
        </div>
        </div>
        
    )
}