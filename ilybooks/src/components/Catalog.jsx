import React from 'react';
import { useEffect, useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { titlesThunk } from '../Redux/titlesThunk';
import { CatalogTitles } from './CatalogTitles';
import { IlyBooksEvents } from '../events';

export const Catalog = React.memo(() => {

    let dispatch = useDispatch();

    const titles = useSelector(state => state.titles.data);

    useEffect(() => {
        dispatch(titlesThunk);
    }, [dispatch]);


    useEffect(() => {
        IlyBooksEvents.addListener('Select', Select);
        return () => {
            IlyBooksEvents.addListener('Select', Select);
        }
    }, []);

     const [isSelect, setIsSelected] = useState(null);

    let listTitles = useMemo(() => titles.map(e => <CatalogTitles key={e.code} code={e.code} title={e.title} isSelect={isSelect} />), [titles, isSelect]);

    const Select = (code) => {
        console.log(code)
        setIsSelected(code);
    }

    return (
        <div className='Catalog'>
            <div className='FlexibilityBlockCatalog'>
                <div className='BigStaticText'>
                <p><span>Atomic Habits:</span> <br /> An Easy & Proven Way to <br /> Build Good Habits & Break <br /> Bad Ones</p>
                <p>This breakthrough on how to change your habits and get 1% better every day.</p>
                <button>Discover now <img src='https://i.ibb.co/D9yQ4TL/Arrow-1-1.png' alt='Arrow'/></button>
            </div>
            <img src='https://i.ibb.co/vq0zj32/main-1.png' alt='Illustration' className='Illustration'/>
            </div>
            <div className='CatalogOffers'>
                <h4 className='MiniTitle'>Catalog</h4>
                <ul className='TitlesList'>
                    {listTitles}
                </ul>
            </div>
        </div>
    )
})