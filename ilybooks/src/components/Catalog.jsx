import React from 'react';
import { useEffect, useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { titlesThunk } from '../Redux/titlesThunk';
import { CatalogTitles } from './CatalogTitles';
import { IlyBooksEvents } from '../events';
import { itemsThunk } from '../Redux/itemsThunk';
import { Items } from './Items';

export const Catalog = React.memo(() => {

    const [isSelect, setIsSelected] = useState(1);
    const [currentTitle, setCurrentTitle] = useState("All");

    let dispatch = useDispatch();

    const titles = useSelector(state => state.titles.data);
    const items = useSelector(state => state.items.data);

    useEffect(() => {
        dispatch(titlesThunk);
    }, [dispatch]);

    useEffect(() => {
        dispatch(itemsThunk)
    }, [dispatch])

    useEffect(() => {
        IlyBooksEvents.addListener('Select', Select);
        return () => {
            IlyBooksEvents.addListener('Select', Select);
        }
    }, []);

    let listTitles = useMemo(() => titles.map(e => <CatalogTitles key={e.code} code={e.code} title={e.title} isSelect={isSelect} />), [titles, isSelect]);

    const Select = (code, title) => {
        setIsSelected(code);
        if (code === 1) setCurrentTitle('All');
        else setCurrentTitle(title);
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
                <div className='WrapperItems'>
                    {
                        (currentTitle === "All")
                            ?
                            items.map(e => <Items key={e.code} code={e.code} name={e.name} image={e.image} arrow={e.arrow} type={e.type} />)
                            :
                            items.filter(element => {
                                return element.type === currentTitle.toLowerCase();
                            }).map(e => <Items key={e.code} code={e.code} name={e.name} image={e.image} arrow={e.arrow} type={e.type}/>)
                    }
                </div>
                <p className='CatalogDescription'>Avid bookworms have a must read list for years to come. And other readers like to wander among the bookshelves or in the catalog of an online store - and often they come across exactly the work that matches the train of thought and mood. In this sense, the online book store is especially convenient - you can "travel" through it in any weather - anywhere in the world.</p>
            </div>
        </div>
    )
})